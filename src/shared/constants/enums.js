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
    { value: "PAS", label: "Pasaporte" },
];

// users.rol (enum)
export const ROLES = {
    ADMIN: "admin",
    INSTRUCTOR: "instructor",
    APRENDIZ: "aprendiz",
    ASPIRANTE: "aspirante",
};

export const ROLES_OPCIONES = [
    { value: ROLES.ADMIN, label: "Administrador", tone: "info" },
    { value: ROLES.INSTRUCTOR, label: "Instructor", tone: "success" },
    { value: ROLES.APRENDIZ, label: "Aprendiz", tone: "warning" },
    { value: ROLES.ASPIRANTE, label: "Aspirante", tone: "neutral" },
];

// programs.nivel_programa
export const NIVELES_PROGRAMA = [
    { value: "auxiliar", label: "Auxiliar" },
    { value: "operario", label: "Operario" },
    { value: "tecnico", label: "Técnico" },
    { value: "tecnologo", label: "Tecnólogo" },
    { value: "especializacion", label: "Especialización tecnológica" },
];

// teachers.tipo_instructor
export const TIPOS_INSTRUCTOR = [
    { value: "planta", label: "Planta" },
    { value: "contratista", label: "Contratista" },
];

// apprentices.status
export const ESTADOS_APRENDIZ = [
    { value: "en_formacion", label: "En formación", tone: "success" },
    { value: "condicionado", label: "Condicionado", tone: "warning" },
    { value: "aplazado", label: "Aplazado", tone: "warning" },
    { value: "cancelado", label: "Cancelado", tone: "danger" },
    { value: "certificado", label: "Certificado", tone: "info" },
];

// registrations.status
export const ESTADOS_INSCRIPCION = [
    { value: "pendiente", label: "Pendiente", tone: "warning" },
    { value: "preseleccionado", label: "Preseleccionado", tone: "info" },
    { value: "seleccionado", label: "Seleccionado", tone: "success" },
    { value: "rechazado", label: "Rechazado", tone: "danger" },
];

// results.estado_competencia
export const ESTADOS_COMPETENCIA = [
    { value: "pendiente", label: "Pendiente", tone: "neutral" },
    { value: "en_curso", label: "En curso", tone: "info" },
    { value: "aprobado", label: "Aprobado", tone: "success" },
    { value: "no_aprobado", label: "No aprobado", tone: "danger" },
];

// assignments.estado
export const ESTADOS_ASIGNACION = [
    { value: "asignado", label: "Asignado", tone: "info" },
    { value: "devuelto", label: "Devuelto", tone: "success" },
    { value: "vencido", label: "Vencido", tone: "danger" },
];

// news.estado
export const ESTADOS_NOTICIA = [
    { value: "borrador", label: "Borrador", tone: "warning" },
    { value: "publicada", label: "Publicada", tone: "success" },
    { value: "archivada", label: "Archivada", tone: "neutral" },
];

// environments.tipo_ambiente
export const TIPOS_AMBIENTE = [
    { value: "aula", label: "Aula" },
    { value: "laboratorio", label: "Laboratorio" },
    { value: "taller", label: "Taller" },
    { value: "auditorio", label: "Auditorio" },
    { value: "virtual", label: "Virtual" },
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
