import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ESTADOS_COMPETENCIA } from "../../shared/constants/enums";

/** Tabla `results`: evaluación de una competencia para un aprendiz. */
export const resultadosResource = defineResource({
    key: "results",
    endpoint: ENDPOINTS.results,
    singular: "Resultado",
    plural: "Resultados",
    icon: "bi-clipboard2-check-fill",
    description: "Estado de cada competencia por aprendiz y comentarios del instructor.",
    display: (row, lookup) => `${labelFor("apprentices", row.apprentice_id, lookup)} · ${labelFor("competencies", row.competency_id, lookup)}`,
    fields: [
        { name: "apprentice_id", label: "Aprendiz", type: "reference", ref: "apprentices", required: true, table: true },
        {
            name: "_ficha",
            label: "Ficha",
            form: false,
            table: true,
            text: (row, lookup) => {
                const aprendiz = lookup?.apprentices?.get(String(row.apprentice_id));
                return aprendiz ? labelFor("course_groups", aprendiz.course_group_id, lookup) : "";
            },
        },
        { name: "competency_id", label: "Competencia", type: "reference", ref: "competencies", required: true, table: true, wide: true },
        { name: "estado_competencia", label: "Estado", type: "select", options: ESTADOS_COMPETENCIA, badge: true, required: true, table: true },
        { name: "comentarios", label: "Comentarios", type: "textarea" },
    ],
});
