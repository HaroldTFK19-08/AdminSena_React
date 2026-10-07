/**
 * Catálogos de valores cerrados.
 *
 * - `value` es lo que se guarda en la BD (debe coincidir con el enum/varchar del backend).
 * - `label` es lo que ve el usuario.
 * - `tone` define el color del badge (success | info | warning | danger | neutral).
 *
 * ⚠️ Los enums de `users` (tipo_identificacion, rol) están definidos como ENUM en la BD:
 *    verifica que estos valores sean EXACTAMENTE los de tu migración.
 */

// users.tipo_identificacion (enum)
export const TIPOS_IDENTIFICACION = [
    { value: "CC", label: "Cédula de ciudadanía" },
    { value: "TI", label: "Tarjeta de identidad" },
    { value: "CE", label: "Cédula de extranjería" },
    { value: "PPT", label: "Permiso por protección temporal" },
];

// users.rol (enum)
export const ROLES = {
    ADMIN: "Admin",
    INSTRUCTOR: "Instructor",
    APRENDIZ: "Aprendiz",
    ASPIRANTE: "Aspirante",
};

export const ROLES_OPCIONES = [
    { value: ROLES.ADMIN, label: "Administrador", tone: "info" },
    { value: ROLES.INSTRUCTOR, label: "Instructor", tone: "success" },
    { value: ROLES.APRENDIZ, label: "Aprendiz", tone: "warning" },
    { value: ROLES.ASPIRANTE, label: "Aspirante", tone: "neutral" },
];

// programs.nivel_programa
export const NIVELES_PROGRAMA = [
    { value: "Tecnico", label: "Técnico" },
    { value: "Tecnologo", label: "Tecnólogo" },
];

// teachers.tipo_instructor
export const TIPOS_INSTRUCTOR = [
    { value: "Planta", label: "Planta" },
    { value: "Contratista", label: "Contratista" },
];

// apprentices.estado
export const ESTADOS_APRENDIZ = [
    { value: "Activo", label: "Activo", tone: "success" },
    { value: "Retirado", label: "Retirado", tone: "danger" },
    { value: "Certificado", label: "Certificado", tone: "info" },
];

// registrations.estado
export const ESTADOS_INSCRIPCION = [
    { value: "Registrado", label: "Registrado", tone: "warning" },
    { value: "En proceso", label: "En proceso", tone: "info" },
    { value: "Seleccionado", label: "Seleccionado", tone: "success" },
    { value: "Rechazado", label: "Rechazado", tone: "danger" },
    { value: "Cancelada", label: "Cancelada", tone: "neutral" },
];

// grades.estado_resultado
export const ESTADOS_COMPETENCIA = [
    { value: "Pendiente", label: "Pendiente", tone: "neutral" },
    { value: "Aprobado", label: "Aprobado", tone: "success" },
    { value: "Reprobado", label: "Reprobado", tone: "danger" },
];

// assignments.Estado
export const ESTADOS_ASIGNACION = [
    { value: "Activo", label: "Activo", tone: "info" },
    { value: "Inactivo", label: "Inactivo", tone: "neutral" },
];

// news.estado
export const ESTADOS_NOTICIA = [
    { value: "Creado", label: "Creado", tone: "neutral" },
    { value: "Pendiente", label: "Pendiente", tone: "warning" },
    { value: "Publicado", label: "Publicado", tone: "success" },
];

// environments.tipo_ambiente
export const TIPOS_AMBIENTE = [
    { value: "Software", label: "Software" },
    { value: "TICS", label: "TICS" },
    { value: "Laboratorio", label: "Laboratorio" },
    { value: "Cocina", label: "Cocina" },
];

export const CATEGORIAS_NOTICIA = [
    { value: "Tecnologia", label: "Tecnología" },
    { value: "Educacion", label: "Educación" },
    { value: "Deporte", label: "Deporte" },
    { value: "Politica", label: "Política" },
    { value: "Artistica", label: "Artística" },
    { value: "Diseño", label: "Diseño" },
];

export const EPS = [
    { value: "SURA", label: "SURA" },
    { value: "Sanitas", label: "Sanitas" },
    { value: "Nueva EPS", label: "Nueva EPS" },
    { value: "Salud Total", label: "Salud Total" },
    { value: "Compensar", label: "Compensar" },
    { value: "Coosalud", label: "Coosalud" },
    { value: "Emssanar", label: "Emssanar" },
];

// equipment.equipment_type
export const TIPOS_EQUIPO = [
    { value: "computo", label: "Cómputo" },
    { value: "audiovisual", label: "Audiovisual" },
    { value: "laboratorio", label: "Laboratorio" },
    { value: "herramienta", label: "Herramienta" },
    { value: "otro", label: "Otro" },
];

/** Devuelve la opción que corresponde a un valor (o una genérica). */
export function findOption(options = [], value) {
    return options.find((o) => String(o.value) === String(value)) ?? { value, label: value ?? "—" };
}
