import { getResource } from "../../resources/registry";
import { toInputValue } from "../../utils/format";

/**
 * Lógica de formularios genéricos (sin JSX), separada de los componentes
 * para que Fast Refresh funcione y para poder probarla de forma aislada.
 */

/** Construye las reglas de react-hook-form a partir de la definición del campo. */
export function rulesFor(field, isCreate) {
    const required = field.required === true || (field.required === "create" && isCreate);
    return {
        ...(required ? { required: `${field.label} es obligatorio` } : {}),
        ...(field.maxLength ? { maxLength: { value: field.maxLength, message: `Máximo ${field.maxLength} caracteres` } } : {}),
        ...(field.minLength ? { minLength: { value: field.minLength, message: `Mínimo ${field.minLength} caracteres` } } : {}),
        ...(field.min !== undefined ? { min: { value: field.min, message: `Debe ser mayor o igual a ${field.min}` } } : {}),
        ...(field.type === "email"
            ? { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Correo electrónico no válido" } }
            : {}),
        ...(field.rules ?? {}),
    };
}

/** Opciones de un select de llave foránea, con filtro opcional (p. ej. solo usuarios con rol instructor). */
export function referenceOptions(field, catalogs, lookup) {
    const resource = getResource(field.ref);
    const rows = catalogs?.[field.ref] ?? [];
    return rows
        .filter((row) => (field.refFilter ? field.refFilter(row, lookup) : true))
        .map((row) => ({ value: row.id, label: resource.display(row, lookup) }))
        .sort((a, b) => String(a.label).localeCompare(String(b.label), "es"));
}

/** Valores iniciales del formulario a partir del registro (o vacíos al crear). */
export function initialValues(fields, record) {
    return Object.fromEntries(
        fields.map((f) => {
            if (f.type === "password") return [f.name, ""];
            const value = record ? record[f.name] : f.defaultValue;
            return [f.name, toInputValue(f.type, value ?? "")];
        }),
    );
}

/** Convierte los valores del formulario al payload que espera el backend. */
export function serialize(fields, values, isCreate) {
    const payload = {};
    for (const f of fields) {
        let value = values[f.name];
        if (f.type === "password" && !isCreate && !value) continue; // no cambiar contraseña
        if (value === "" || value === undefined) value = null;
        else if (f.type === "number" || f.type === "reference") value = Number(value);
        else if (f.type === "datetime") value = value.replace("T", " ") + (value.length === 16 ? ":00" : "");
        else if (typeof value === "string") value = value.trim();
        payload[f.name] = value;
    }
    return payload;
}

