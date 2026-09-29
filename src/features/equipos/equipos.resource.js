import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { TIPOS_EQUIPO } from "../../shared/constants/enums";

/** Tabla `equipment` (environments 1:N equipment). */
export const equiposResource = defineResource({
    key: "equipment",
    endpoint: ENDPOINTS.equipment,
    singular: "Equipo",
    plural: "Equipos",
    icon: "bi-cpu-fill",
    description: "Inventario de equipos por ambiente. Pueden prestarse a aprendices.",
    display: (row) => (row ? `${row.name}${row.brand ? ` (${row.brand})` : ""}` : ""),
    fields: [
        { name: "name", label: "Nombre", required: true, maxLength: 255, table: true },
        { name: "brand", label: "Marca", maxLength: 255, table: true },
        { name: "equipment_type", label: "Tipo", type: "select", options: TIPOS_EQUIPO, required: true, table: true },
        { name: "environment_id", label: "Ambiente", type: "reference", ref: "environments", required: true, table: true },
    ],
    relations: [{ resource: "assignments", foreignKey: "equipment_id", title: "Historial de asignaciones" }],
});
