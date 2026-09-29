/** Reportes disponibles. `resource` es la tabla que se exporta. */
export const REPORTES = [
    { id: "aprendices", resource: "apprentices", nombre: "Aprendices por ficha", descripcion: "Aprendices con su ficha, documento y estado de formación.", icono: "bi-people-fill" },
    { id: "instructores", resource: "teachers", nombre: "Instructores por área", descripcion: "Instructores, su área, especialidad y tipo de vinculación.", icono: "bi-person-workspace" },
    { id: "resultados", resource: "results", nombre: "Resultados por competencia", descripcion: "Estado de cada competencia evaluada por aprendiz.", icono: "bi-clipboard2-check-fill" },
    { id: "ambientes", resource: "environments", nombre: "Ambientes por centro", descripcion: "Aulas, laboratorios y talleres con su capacidad.", icono: "bi-door-open-fill" },
    { id: "programas", resource: "programs", nombre: "Programas de formación", descripcion: "Programas por área con su código y nivel.", icono: "bi-mortarboard-fill" },
    { id: "inscripciones", resource: "registrations", nombre: "Inscripciones a ofertas", descripcion: "Aspirantes inscritos y el estado de su proceso.", icono: "bi-journal-check" },
];
