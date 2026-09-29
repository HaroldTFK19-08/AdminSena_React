/**
 * Backend simulado en memoria (solo desarrollo, VITE_USE_MOCKS=true).
 *
 * Emula el contrato REST que espera el frontend:
 *  - Respuestas envueltas en { data } (estilo Laravel API Resources).
 *  - 422 con { message, errors } en validaciones (campos únicos, llaves foráneas).
 *  - 409 al eliminar registros con hijos (restricción de llave foránea).
 *  - 401 si no hay sesión.
 * Las reglas de llaves foráneas se leen de las mismas definiciones de dominio.
 */
import { ApiError } from "../shared/api/ApiError";
import { ENDPOINTS } from "../shared/api/endpoints";
import { tokenStorage } from "../shared/api/tokenStorage";
import { RESOURCES } from "../features/resources";
import { MOCK_PASSWORDS, seed } from "./seed";

const STORAGE_KEY = "adminsena.mockdb";
const LATENCY = 180;

/** Campos únicos por tabla (según el modelo relacional). */
const UNIQUE = {
    users: ["email", "identificacion"],
    programs: ["codigo_programa"],
    course_groups: ["codigo"],
    competencies: ["codigo"],
    admins: ["user_id"],
    teachers: ["user_id"],
    apprentices: ["user_id"],
    aspirants: ["user_id"],
};

const clone = (v) => JSON.parse(JSON.stringify(v));

function loadDb() {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch {
        /* sin almacenamiento */
    }
    return { tables: clone(seed), passwords: { ...MOCK_PASSWORDS } };
}

const db = loadDb();

function persist() {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch {
        /* sin almacenamiento */
    }
}

/** Reinicia los datos simulados (útil desde la consola: window.__resetMockDb()). */
window.__resetMockDb = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
};

// Ruta REST -> nombre de tabla
const ROUTES = Object.fromEntries(
    Object.entries(ENDPOINTS)
        .filter(([, v]) => typeof v === "string")
        .map(([table, path]) => [path, table]),
);

const resourceByTable = Object.fromEntries(RESOURCES.map((r) => [r.key, r]));

/** Llaves foráneas: tabla -> [{ field, ref, label }] */
const FOREIGN_KEYS = Object.fromEntries(
    RESOURCES.map((r) => [r.key, r.fields.filter((f) => f.type === "reference").map((f) => ({ field: f.name, ref: f.ref, label: f.label }))]),
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const table = (name) => (db.tables[name] ??= []);
const nextId = (rows) => rows.reduce((max, r) => Math.max(max, Number(r.id)), 0) + 1;

function publicRow(name, row) {
    if (name !== "users") return clone(row);
    const rest = clone(row);
    delete rest.password;
    delete rest.remember_token;
    return rest;
}

function validate(name, data, id = null) {
    const errors = {};
    const resource = resourceByTable[name];

    // Campos obligatorios
    resource?.fields.forEach((f) => {
        if (!f.form) return;
        const required = f.required === true || (f.required === "create" && id === null);
        if (required && (data[f.name] === null || data[f.name] === undefined || data[f.name] === "")) {
            errors[f.name] = [`El campo ${f.label.toLowerCase()} es obligatorio.`];
        }
    });

    // Únicos
    (UNIQUE[name] ?? []).forEach((field) => {
        if (data[field] === undefined || data[field] === null) return;
        const dup = table(name).some((r) => String(r[field]) === String(data[field]) && String(r.id) !== String(id));
        if (dup) errors[field] = [`Ya existe un registro con este valor de ${field}.`];
    });

    // Llaves foráneas
    (FOREIGN_KEYS[name] ?? []).forEach(({ field, ref, label }) => {
        const value = data[field];
        if (value === null || value === undefined) return;
        if (!table(ref).some((r) => String(r.id) === String(value))) {
            errors[field] = [`El valor seleccionado en ${label.toLowerCase()} no existe.`];
        }
    });

    if (Object.keys(errors).length) {
        throw new ApiError("Los datos enviados no son válidos.", { status: 422, errors, data: { errors } });
    }
}

function dependentsOf(name, id) {
    const found = [];
    for (const [child, fks] of Object.entries(FOREIGN_KEYS)) {
        for (const { field } of fks.filter((fk) => fk.ref === name)) {
            const count = table(child).filter((r) => String(r[field]) === String(id)).length;
            if (count) found.push(`${count} en ${resourceByTable[child]?.plural.toLowerCase() ?? child}`);
        }
    }
    return found;
}

function currentUser() {
    const token = tokenStorage.getToken();
    const match = token?.match(/^mock-token-(\d+)$/);
    return match ? table("users").find((u) => String(u.id) === match[1]) : null;
}

// ---------- Autenticación ----------

function handleAuth(method, path, body) {
    if (path === ENDPOINTS.auth.login && method === "POST") {
        const user = table("users").find((u) => u.email?.toLowerCase() === String(body?.email).toLowerCase());
        if (!user || db.passwords[user.id] !== body?.password) {
            throw new ApiError("Credenciales incorrectas.", {
                status: 422,
                errors: { email: ["Estas credenciales no coinciden con nuestros registros."] },
            });
        }
        return { token: `mock-token-${user.id}`, user: publicRow("users", user) };
    }

    if (path === ENDPOINTS.auth.register && method === "POST") {
        // eslint-disable-next-line no-unused-vars
        const { password, password_confirmation, ...data } = body ?? {};
        validate("users", { ...data, password });
        const user = { id: nextId(table("users")), foto_perfil: null, ...data };
        table("users").push(user);
        db.passwords[user.id] = password;
        persist();
        return { token: `mock-token-${user.id}`, user: publicRow("users", user) };
    }

    if (path === ENDPOINTS.auth.logout) return null;

    if (path === ENDPOINTS.auth.me) {
        const user = currentUser();
        if (!user) throw new ApiError("No autenticado.", { status: 401 });
        const admin = table("admins").find((a) => a.user_id === user.id);
        return { data: { ...publicRow("users", user), admin: admin ? clone(admin) : null } };
    }

    return undefined;
}

// ---------- CRUD genérico ----------

export async function mockRequest(method, fullPath, { params, body } = {}) {
    await sleep(LATENCY);

    const authResult = handleAuth(method, fullPath, body);
    if (authResult !== undefined) return authResult;

    if (!currentUser()) throw new ApiError("No autenticado.", { status: 401 });

    const [, base, id] = fullPath.match(/^(\/[^/]+)(?:\/([^/]+))?$/) ?? [];
    const name = ROUTES[base];
    if (!name) throw new ApiError(`Ruta simulada no encontrada: ${fullPath}`, { status: 404 });

    const rows = table(name);
    const findIndex = () => rows.findIndex((r) => String(r.id) === String(id));

    if (method === "GET" && !id) {
        const filters = Object.entries(params ?? {}).filter(([k]) => rows.length === 0 || k in rows[0]);
        const result = rows.filter((r) => filters.every(([k, v]) => String(r[k]) === String(v)));
        return { data: result.map((r) => publicRow(name, r)) };
    }

    if (method === "GET") {
        const row = rows[findIndex()];
        if (!row) throw new ApiError("Registro no encontrado.", { status: 404 });
        return { data: publicRow(name, row) };
    }

    if (method === "POST") {
        const { password, ...data } = body ?? {};
        validate(name, name === "users" ? { ...data, password } : data);
        const row = { ...data, id: nextId(rows) };
        rows.push(row);
        if (name === "users" && password) db.passwords[row.id] = password;
        persist();
        return { data: publicRow(name, row) };
    }

    if (method === "PUT" || method === "PATCH") {
        const index = findIndex();
        if (index === -1) throw new ApiError("Registro no encontrado.", { status: 404 });
        const { password, ...data } = body ?? {};
        const merged = { ...rows[index], ...data, id: rows[index].id };
        validate(name, merged, rows[index].id);
        rows[index] = merged;
        if (name === "users" && password) db.passwords[merged.id] = password;
        persist();
        return { data: publicRow(name, merged) };
    }

    if (method === "DELETE") {
        const index = findIndex();
        if (index === -1) throw new ApiError("Registro no encontrado.", { status: 404 });
        const deps = dependentsOf(name, id);
        if (deps.length) {
            throw new ApiError(`No se puede eliminar: tiene registros relacionados (${deps.join(", ")}).`, { status: 409 });
        }
        rows.splice(index, 1);
        persist();
        return null;
    }

    throw new ApiError("Método no soportado en el mock.", { status: 405 });
}
