import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla `course_groups` (programs 1:N course_groups). En el SENA se conoce como "ficha". */
export const fichasResource = defineResource({
    key: "course_groups",
    endpoint: ENDPOINTS.course_groups,
    singular: "Ficha",
    plural: "Fichas",
    icon: "bi-card-checklist",
    description: "Grupos de formación de un programa. Agrupan aprendices e instructores.",
    display: (row) => row?.codigo ?? `Ficha #${row?.id}`,
    fields: [
        { name: "codigo", label: "Código de ficha", required: true, maxLength: 255, table: true, mono: true },
        { name: "program_id", label: "Programa", type: "reference", ref: "programs", required: true, table: true, wide: true },
        { name: "teacher_id", label: "Instructor principal", type: "reference", ref: "teachers", required: true, table: true },
        { name: "capacidad_aprendices", label: "Capacidad de aprendices", type: "number", min: 1, required: true, table: true },
    ],
    relations: [
        { resource: "apprentices", foreignKey: "course_group_id" },
        {
            resource: "course_group_teacher",
            foreignKey: "course_group_id",
            title: "Instructores",
            label: (row, lookup) => labelFor("teachers", row.teacher_id, lookup),
        },
    ],
});
