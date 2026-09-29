import { ENDPOINTS } from "../../shared/api/endpoints";
import { ROLES, TIPOS_INSTRUCTOR } from "../../shared/constants/enums";
import { personColumns, personDisplay } from "../../shared/resources/helpers";
import { defineResource, labelFor } from "../../shared/resources/registry";

/** Tabla `teachers` (users 1:1, areas N:1). */
export const instructoresResource = defineResource({
    key: "teachers",
    endpoint: ENDPOINTS.teachers,
    singular: "Instructor",
    plural: "Instructores",
    icon: "bi-person-workspace",
    description: "Instructores vinculados a un área. Se asignan a fichas y a competencias.",
    display: personDisplay("Instructor"),
    fields: [
        ...personColumns,
        { name: "user_id", label: "Usuario", type: "reference", ref: "users", required: true, refFilter: (u) => u.rol === ROLES.INSTRUCTOR, detail: false },
        { name: "area_id", label: "Área", type: "reference", ref: "areas", required: true, table: true },
        { name: "especialidad", label: "Especialidad", maxLength: 255, table: true },
        { name: "tipo_instructor", label: "Tipo de vinculación", type: "select", options: TIPOS_INSTRUCTOR, required: true },
        { name: "fecha_inicio", label: "Fecha de inicio", type: "date" },
        { name: "fecha_fin", label: "Fecha de fin", type: "date" },
    ],
    relations: [
        {
            resource: "course_group_teacher",
            foreignKey: "teacher_id",
            title: "Fichas asignadas",
            label: (row, lookup) => `Ficha ${labelFor("course_groups", row.course_group_id, lookup)}`,
        },
        {
            resource: "competency_teacher",
            foreignKey: "teacher_id",
            title: "Competencias que orienta",
            label: (row, lookup) => labelFor("competencies", row.competency_id, lookup),
        },
    ],
});
