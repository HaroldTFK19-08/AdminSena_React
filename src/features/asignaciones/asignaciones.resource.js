import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ESTADOS_ASIGNACION } from "../../shared/constants/enums";

/** Tabla `assignments`: préstamo de un equipo a un aprendiz. */
export const asignacionesResource = defineResource({
    key: "assignments",
    endpoint: ENDPOINTS.assignments,
    singular: "Asignación",
    plural: "Asignaciones de equipos",
    icon: "bi-box-arrow-in-right",
    description: "Préstamos de equipos a aprendices, con fechas de entrega y devolución.",
    display: (row, lookup) => `${labelFor("equipment", row.equipment_id, lookup)} → ${labelFor("apprentices", row.apprentice_id, lookup)}`,
    fields: [
        { name: "equipment_id", label: "Equipo", type: "reference", ref: "equipment", required: true, table: true },
        { name: "apprentice_id", label: "Aprendiz", type: "reference", ref: "apprentices", required: true, table: true },
        { name: "fecha_asignacion", label: "Fecha de asignación", type: "date", required: true, table: true },
        { name: "fecha_devolucion", label: "Fecha de devolución", type: "date", table: true },
        { name: "Estado", label: "Estado", type: "select", options: ESTADOS_ASIGNACION, badge: true, required: true, table: true },
    ],
});
