import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";

/** Tabla `areas` (trainingcenters 1:N areas). */
export const areasResource = defineResource({
    key: "areas",
    endpoint: ENDPOINTS.areas,
    singular: "Área",
    plural: "Áreas",
    icon: "bi-diagram-3-fill",
    description: "Áreas de formación de cada centro. Agrupan programas e instructores.",
    display: (row) => row?.nombre ?? `Área #${row?.id}`,
    fields: [
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true },
        { name: "trainingcenter_id", label: "Centro de formación", type: "reference", ref: "trainingcenters", required: true, table: true },
    ],
    relations: [
        { resource: "programs", foreignKey: "area_id" },
        { resource: "teachers", foreignKey: "area_id" },
    ],
});
