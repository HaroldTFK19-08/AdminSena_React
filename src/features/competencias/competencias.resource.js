import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla `competencies`. */
export const competenciasResource = defineResource({
    key: "competencies",
    endpoint: ENDPOINTS.competencies,
    singular: "Competencia",
    plural: "Competencias",
    icon: "bi-award-fill",
    description: "Competencias que se evalúan a los aprendices y que orientan los instructores.",
    display: (row) => (row ? `${row.codigo} · ${row.nombre}` : ""),
    fields: [
        { name: "codigo", label: "Código", required: true, maxLength: 255, table: true, mono: true },
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true, wide: true },
        { name: "descripcion", label: "Descripción", type: "textarea" },
        { name: "fecha_inicio", label: "Fecha de inicio", type: "date", table: true },
        { name: "fecha_fin", label: "Fecha de fin", type: "date", table: true },
    ],
    relations: [
        {
            resource: "competency_teacher",
            foreignKey: "competency_id",
            title: "Instructores",
            label: (row, lookup) => labelFor("teachers", row.teacher_id, lookup),
        },
    ],
});
