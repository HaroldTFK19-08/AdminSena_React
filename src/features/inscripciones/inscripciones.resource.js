import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ESTADOS_INSCRIPCION } from "../../shared/constants/enums";

/** Tabla `registrations`: inscripción de un aspirante a una oferta. */
export const inscripcionesResource = defineResource({
    key: "registrations",
    endpoint: ENDPOINTS.registrations,
    singular: "Inscripción",
    plural: "Inscripciones",
    icon: "bi-journal-check",
    description: "Aspirantes inscritos a cada oferta y el estado de su proceso de selección.",
    display: (row, lookup) => `${labelFor("aspirants", row.aspirant_id, lookup)} → ${labelFor("offers", row.offer_id, lookup)}`,
    fields: [
        { name: "aspirant_id", label: "Aspirante", type: "reference", ref: "aspirants", required: true, table: true },
        { name: "offer_id", label: "Oferta", type: "reference", ref: "offers", required: true, table: true, wide: true },
        { name: "status", label: "Estado", type: "select", options: ESTADOS_INSCRIPCION, badge: true, required: true, table: true },
        { name: "fecha_inscripcion", label: "Fecha de inscripción", type: "datetime", table: true },
    ],
});
