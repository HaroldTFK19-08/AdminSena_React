import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla pivote `course_group_teacher` (course_groups N:M teachers). */
export const fichaInstructorResource = defineResource({
    key: "course_group_teacher",
    endpoint: ENDPOINTS.course_group_teacher,
    singular: "Asignación",
    plural: "Instructores por ficha",
    icon: "bi-person-video3",
    description: "Instructores asignados a cada ficha.",
    display: (row, lookup) => `Ficha ${labelFor("course_groups", row.course_group_id, lookup)} → ${labelFor("teachers", row.teacher_id, lookup)}`,
    fields: [
        { name: "course_group_id", label: "Ficha", type: "reference", ref: "course_groups", required: true, table: true },
        { name: "teacher_id", label: "Instructor", type: "reference", ref: "teachers", required: true, table: true },
        {
            name: "_programa",
            label: "Programa",
            form: false,
            table: true,
            text: (row, lookup) => {
                const ficha = lookup?.course_groups?.get(String(row.course_group_id));
                return ficha ? labelFor("programs", ficha.program_id, lookup) : "";
            },
        },
    ],
    // El programa se deriva de la ficha: se necesita el catálogo de programas.
    dependsOn: ["programs"],
});
