import { nombreCompleto } from "../utils/format";

/** Usuario asociado a un perfil (admins, teachers, apprentices, aspirants). */
export function userOf(row, lookup) {
    if (!row) return null;
    return row.user ?? lookup?.users?.get(String(row.user_id)) ?? null;
}

/** Display para perfiles que dependen de users: muestra el nombre completo. */
export const personDisplay = (fallback) => (row, lookup) => nombreCompleto(userOf(row, lookup)) || `${fallback} #${row?.id}`;

/** Columnas virtuales (no se envían al backend) con datos del usuario asociado. */
export const personColumns = [
    {
        name: "_nombre",
        label: "Nombre",
        form: false,
        table: true,
        text: (row, lookup) => nombreCompleto(userOf(row, lookup)),
    },
    {
        name: "_documento",
        label: "Documento",
        form: false,
        table: true,
        text: (row, lookup) => {
            const u = userOf(row, lookup);
            return u ? `${u.tipo_identificacion ?? ""} ${u.identificacion ?? ""}`.trim() : "";
        },
    },
    {
        name: "_email",
        label: "Correo",
        form: false,
        text: (row, lookup) => userOf(row, lookup)?.email ?? "",
    },
];

/** Busca un registro del catálogo `key` por id. */
export const pick = (lookup, key, id) => lookup?.[key]?.get(String(id)) ?? null;
