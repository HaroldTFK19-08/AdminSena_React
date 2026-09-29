import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ROLES } from "../../shared/constants/enums";
import { personColumns, personDisplay } from "../../shared/resources/helpers";

/** Tabla `aspirants` (1:1 con users). Personas que se inscriben a ofertas. */
export const aspirantesResource = defineResource({
    key: "aspirants",
    endpoint: ENDPOINTS.aspirants,
    singular: "Aspirante",
    plural: "Aspirantes",
    icon: "bi-person-raised-hand",
    description: "Personas interesadas en ingresar a un programa. Se inscriben a las ofertas de formación.",
    display: personDisplay("Aspirante"),
    fields: [
        ...personColumns,
        { name: "user_id", label: "Usuario", type: "reference", ref: "users", required: true, refFilter: (u) => u.rol === ROLES.ASPIRANTE, detail: false },
        { name: "eps", label: "EPS", maxLength: 255, table: true },
        { name: "certificado_eps", label: "Certificado EPS (URL)", type: "url", maxLength: 255, wide: true },
        { name: "certificado_icfes", label: "Certificado ICFES (URL)", type: "url", maxLength: 255, wide: true },
        { name: "certificado_sisben", label: "Certificado SISBÉN (URL)", type: "url", maxLength: 255, wide: true },
    ],
    relations: [{ resource: "registrations", foreignKey: "aspirant_id", title: "Inscripciones" }],
});
