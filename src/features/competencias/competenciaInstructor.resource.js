import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla pivote `competency_teacher` (competencies N:M teachers). */
export const competenciaInstructorResource = defineResource({
    key: "competency_teacher",
    endpoint: ENDPOINTS.competency_teacher,
    singular: "Asignación",
    plural: "Competencias por instructor",
    icon: "bi-person-badge",
    description: "Qué instructor está habilitado para orientar cada competencia.",
    display: (row, lookup) => `${labelFor("teachers", row.teacher_id, lookup)} → ${labelFor("competencies", row.competency_id, lookup)}`,
    fields: [
        { name: "teacher_id", label: "Instructor", type: "reference", ref: "teachers", required: true, table: true },
        { name: "competency_id", label: "Competencia", type: "reference", ref: "competencies", required: true, table: true, wide: true },
    ],
});
