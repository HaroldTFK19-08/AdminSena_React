import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ESTADOS_APRENDIZ, ESTADOS_COMPETENCIA, ROLES, findOption } from "../../shared/constants/enums";
import { personColumns, personDisplay } from "../../shared/resources/helpers";

/** Tabla `apprentices` (users 1:1, course_groups N:1). */
export const aprendicesResource = defineResource({
    key: "apprentices",
    endpoint: ENDPOINTS.apprentices,
    singular: "Aprendiz",
    plural: "Aprendices",
    icon: "bi-people-fill",
    description: "Aprendices matriculados en una ficha, con su estado de formación.",
    display: personDisplay("Aprendiz"),
    fields: [
        ...personColumns,
        { name: "user_id", label: "Usuario", type: "reference", ref: "users", required: true, refFilter: (u) => u.rol === ROLES.APRENDIZ, detail: false },
        { name: "course_group_id", label: "Ficha", type: "reference", ref: "course_groups", required: true, table: true },
        { name: "status", label: "Estado", type: "select", options: ESTADOS_APRENDIZ, badge: true, required: true, table: true },
        { name: "start_date", label: "Fecha de inicio", type: "date" },
        { name: "end_date", label: "Fecha de fin", type: "date" },
    ],
    relations: [
        {
            resource: "results",
            foreignKey: "apprentice_id",
            title: "Resultados por competencia",
            label: (row, lookup) =>
                `${labelFor("competencies", row.competency_id, lookup)} — ${findOption(ESTADOS_COMPETENCIA, row.estado_competencia).label}`,
        },
        {
            resource: "assignments",
            foreignKey: "apprentice_id",
            title: "Equipos asignados",
            label: (row, lookup) => labelFor("equipment", row.equipment_id, lookup),
        },
    ],
});
