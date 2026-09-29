/** Utilidades de formato compartidas por todos los dominios. */

export function nombreCompleto(user) {
    if (!user) return "";
    return [user.nombre_1, user.nombre_2, user.apellido_1, user.apellido_2].filter(Boolean).join(" ");
}

export function iniciales(user) {
    if (!user) return "?";
    const a = user.nombre_1?.[0] ?? "";
    const b = user.apellido_1?.[0] ?? "";
    return (a + b).toUpperCase() || "?";
}

const fechaFmt = new Intl.DateTimeFormat("es-CO", { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" });
const fechaHoraFmt = new Intl.DateTimeFormat("es-CO", { dateStyle: "medium", timeStyle: "short" });

/** Formatea 'YYYY-MM-DD' sin desfase de zona horaria. */
export function formatFecha(value) {
    if (!value) return "—";
    const date = new Date(String(value).length === 10 ? `${value}T00:00:00Z` : value);
    return Number.isNaN(date.getTime()) ? String(value) : fechaFmt.format(date);
}

export function formatFechaHora(value) {
    if (!value) return "—";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : fechaHoraFmt.format(date);
}

/** Convierte un valor de BD al formato que espera un <input type="date|datetime-local">. */
export function toInputValue(type, value) {
    if (value === null || value === undefined) return "";
    if (type === "date") return String(value).slice(0, 10);
    if (type === "datetime") return String(value).replace(" ", "T").slice(0, 16);
    return value;
}

export function normalizarTexto(value) {
    return String(value ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}
