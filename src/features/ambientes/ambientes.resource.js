import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { TIPOS_AMBIENTE } from "../../shared/constants/enums";

/** Tabla `environments` (trainingcenters 1:N environments). */
export const ambientesResource = defineResource({
    key: "environments",
    endpoint: ENDPOINTS.environments,
    singular: "Ambiente",
    plural: "Ambientes",
    icon: "bi-door-open-fill",
    description: "Aulas, laboratorios y talleres de cada centro, con su capacidad.",
    display: (row) => row?.nombre ?? `Ambiente #${row?.id}`,
    fields: [
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true },
        { name: "tipo_ambiente", label: "Tipo", type: "select", options: TIPOS_AMBIENTE, required: true, table: true },
        { name: "capacidad", label: "Capacidad", type: "number", min: 1, required: true, table: true },
        { name: "trainingcenter_id", label: "Centro de formación", type: "reference", ref: "trainingcenters", required: true, table: true },
    ],
    relations: [{ resource: "equipment", foreignKey: "environment_id", title: "Equipos" }],
});
