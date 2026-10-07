import { defineResource, labelFor } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { formatFecha } from "../../shared/utils/format";

/** Tabla `offers`: convocatoria de un programa publicada por un administrador. */
export const ofertasResource = defineResource({
    key: "offers",
    endpoint: ENDPOINTS.offers,
    singular: "Oferta",
    plural: "Ofertas",
    icon: "bi-megaphone-fill",
    description: "Convocatorias de formación: fechas del proceso, pruebas, selección y cupos.",
    display: (row, lookup) => `${labelFor("programs", row.program_id, lookup)} · ${formatFecha(row.fecha_convocatoria)}`,
    fields: [
        { name: "program_id", label: "Programa", type: "reference", ref: "programs", required: true, table: true, wide: true },
        { name: "admin_id", label: "Publicada por", form: false, type: "reference", ref: "admins", table: true },
        { name: "capacidad", label: "Cupos", type: "number", min: 1, required: true, table: true },
        { name: "fecha_lanzamiento", label: "Lanzamiento", type: "date", required: true },
        { name: "fecha_convocatoria", label: "Inicio de convocatoria", type: "date", required: true, table: true },
        { name: "fecha_fin_convocatoria", label: "Cierre de convocatoria", type: "date", required: true, table: true },
        { name: "fecha_primera_prueba", label: "Primera prueba", type: "date" },
        { name: "fecha_segunda_prueba", label: "Segunda prueba", type: "date" },
        { name: "fecha_seleccionados", label: "Publicación de seleccionados", type: "date" },
        { name: "imagen", label: "Imagen", type: "file", accept: "image/png,image/jpeg,image/webp", wide: true },
        { name: "publicada", label: "Publicada", type: "checkbox", defaultValue: false, table: true, badge: true },
    ],
    relations: [
        {
            resource: "registrations",
            foreignKey: "offer_id",
            title: "Inscritos",
            label: (row, lookup) => labelFor("aspirants", row.aspirant_id, lookup),
        },
    ],
});
