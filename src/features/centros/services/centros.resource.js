import { defineResource } from "../../../shared/resources/registry";
import { ENDPOINTS } from "../../../shared/api/endpoints";
import { createResourceService } from "../../../shared/api/createResourceService";
import getCentros from "./api";

/** Tabla `trainingcenters`: raíz de la estructura institucional. */
const centrosService = createResourceService(ENDPOINTS.trainingcenters);

export const centrosResource = defineResource({
    key: "trainingcenters",
    endpoint: ENDPOINTS.trainingcenters,
    service: { ...centrosService, list: getCentros },
    singular: "Centro",
    plural: "Centros de formación",
    icon: "bi-building-fill",
    description: "Sedes del SENA. De cada centro dependen sus áreas, ambientes y noticias.",
    display: (row) => row?.nombre ?? `Centro #${row?.id}`,
    fields: [
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true, wide: true },
        { name: "direccion", label: "Dirección", required: true, maxLength: 255, table: true, wide: true },
    ],
    relations: [
        { resource: "areas", foreignKey: "trainingcenter_id" },
        { resource: "environments", foreignKey: "trainingcenter_id" },
        { resource: "news", foreignKey: "trainingcenter_id" },
    ],
});
