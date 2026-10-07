import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ESTADOS_COMPETENCIA } from "../../shared/constants/enums";

export const calificacionesResource = defineResource({
    key: "grades",
    endpoint: ENDPOINTS.grades,
    singular: "Calificación",
    plural: "Calificaciones",
    icon: "bi-clipboard2-check-fill",
    description: "Estados de los resultados de aprendizaje por aprendiz.",
    display: (row, lookup) =>
        `${labelFor("results", row.result_id, lookup)} · ${labelFor("apprentices", row.apprentice_id, lookup)}`,
    fields: [
        { name: "result_id", label: "Resultado de aprendizaje", type: "reference", ref: "results", required: true, table: true },
        { name: "apprentice_id", label: "Aprendiz", type: "reference", ref: "apprentices", required: true, table: true },
        { name: "teacher_id", label: "Instructor", type: "reference", ref: "teachers", form: false, table: false },
        { name: "estado_resultado", label: "Estado", type: "select", options: ESTADOS_COMPETENCIA, badge: true, required: true, table: true },
        { name: "comentarios", label: "Comentarios", type: "textarea", maxLength: 2000, wide: true },
    ],
});
