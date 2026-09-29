import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ROLES } from "../../shared/constants/enums";
import { personColumns, personDisplay } from "../../shared/resources/helpers";

/** Tabla `admins` (1:1 con users). */
export const administradoresResource = defineResource({
    key: "admins",
    endpoint: ENDPOINTS.admins,
    singular: "Administrador",
    plural: "Administradores",
    icon: "bi-shield-lock-fill",
    description: "Perfiles administrativos. Publican ofertas y noticias.",
    display: personDisplay("Administrador"),
    fields: [
        ...personColumns,
        { name: "user_id", label: "Usuario", type: "reference", ref: "users", required: true, refFilter: (u) => u.rol === ROLES.ADMIN, detail: false },
        { name: "cargo", label: "Cargo", required: true, maxLength: 255, table: true },
        { name: "ubicacion_oficina", label: "Ubicación de oficina", maxLength: 255, table: true },
        { name: "direccion", label: "Dirección", maxLength: 255, wide: true },
    ],
    relations: [
        { resource: "offers", foreignKey: "admin_id", title: "Ofertas publicadas" },
        { resource: "news", foreignKey: "admin_id", title: "Noticias publicadas" },
    ],
});
