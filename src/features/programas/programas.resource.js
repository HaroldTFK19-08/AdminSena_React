import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { NIVELES_PROGRAMA } from "../../shared/constants/enums";

/** Tabla `programs` (areas 1:N programs). */
export const programasResource = defineResource({
    key: "programs",
    endpoint: ENDPOINTS.programs,
    singular: "Programa",
    plural: "Programas",
    icon: "bi-mortarboard-fill",
    description: "Programas de formación. Cada programa pertenece a un área y se oferta en fichas y convocatorias.",
    display: (row) => row?.nombre ?? `Programa #${row?.id}`,
    fields: [
        { name: "codigo_programa", label: "Código", required: true, maxLength: 255, table: true, mono: true },
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true },
        { name: "nivel_programa", label: "Nivel", type: "select", options: NIVELES_PROGRAMA, required: true, table: true },
        { name: "area_id", label: "Área", type: "reference", ref: "areas", required: true, table: true },
    ],
    relations: [
        { resource: "course_groups", foreignKey: "program_id", title: "Fichas" },
        { resource: "offers", foreignKey: "program_id", title: "Ofertas" },
    ],
});
