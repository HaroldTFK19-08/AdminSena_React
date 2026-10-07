import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla `results`: evaluación de una competencia para un aprendiz. */
export const resultadosResource = defineResource({
    key: "results",
    endpoint: ENDPOINTS.results,
    singular: "Resultado de aprendizaje",
    plural: "Resultados",
    icon: "bi-clipboard2-check-fill",
    description: "Resultados de aprendizaje vinculados a una competencia.",
    display: (row) => row?.nombre ?? `Resultado #${row?.id}`,
    fields: [
        { name: "competition_id", label: "Competencia", type: "reference", ref: "competencies", required: true, table: true },
        { name: "codigo", label: "Código", maxLength: 255, table: true, mono: true },
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true, wide: true },
        { name: "descripcion", label: "Descripción", type: "textarea", wide: true },
        { name: "cantidad", label: "Cantidad a crear", type: "number", min: 1, max: 30, createOnly: true, defaultValue: 1 },
    ],
    relations: [{ resource: "grades", foreignKey: "result_id", title: "Calificaciones" }],
});
