import Badge from "../ui/Badge";
import { findOption } from "../../constants/enums";
import { labelFor } from "../../resources/registry";
import { formatFecha, formatFechaHora } from "../../utils/format";

/** Nombre de la relación cargada por el backend: program_id -> program (convención Laravel). */
const embeddedKey = (fieldName) => fieldName.replace(/_id$/, "");

/** Valor como texto plano (para búsquedas y exportaciones). */
export function textValue(field, row, lookup) {
    const value = row?.[field.name];
    if (field.text) return field.text(row, lookup);
    switch (field.type) {
        case "reference":
            return labelFor(field.ref, value, lookup, row?.[embeddedKey(field.name)]);
        case "select":
            return findOption(field.options, value).label ?? "";
        case "date":
            return formatFecha(value);
        case "datetime":
            return formatFechaHora(value);
        case "password":
            return "";
        default:
            return value ?? "";
    }
}

/** Valor renderizado (badges, enlaces, etc.) para tablas y detalle. */
export function renderValue(field, row, lookup) {
    if (field.render) return field.render(row, lookup);
    if (field.text) return field.text(row, lookup) || <span className="text-slate-300">—</span>;
    const value = row?.[field.name];

    if (value === null || value === undefined || value === "") {
        return <span className="text-slate-300">—</span>;
    }

    if (field.type === "select" && field.badge) {
        const option = findOption(field.options, value);
        return <Badge tone={option.tone}>{option.label}</Badge>;
    }

    if (field.type === "url") {
        return (
            <a href={value} target="_blank" rel="noreferrer" className="text-sky-700 underline underline-offset-2 break-all">
                Ver archivo
            </a>
        );
    }

    if (field.mono) return <span className="font-mono font-bold text-sena-navy">{value}</span>;

    return textValue(field, row, lookup);
}
