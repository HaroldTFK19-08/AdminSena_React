import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { ROLES_OPCIONES, TIPOS_IDENTIFICACION } from "../../shared/constants/enums";
import { nombreCompleto } from "../../shared/utils/format";

/** Tabla `users`: cuenta base de todas las personas del sistema. */
export const usuariosResource = defineResource({
    key: "users",
    endpoint: ENDPOINTS.users,
    singular: "Usuario",
    plural: "Usuarios",
    icon: "bi-person-gear",
    description: "Cuentas de acceso. Cada administrador, instructor, aprendiz o aspirante está vinculado a un usuario.",
    display: (row) => nombreCompleto(row) || row?.email || `Usuario #${row?.id}`,
    fields: [
        { name: "_nombre", label: "Nombre", form: false, detail: false, table: true, text: (row) => nombreCompleto(row) },
        { name: "nombre_1", label: "Primer nombre", required: true, maxLength: 255 },
        { name: "nombre_2", label: "Segundo nombre", maxLength: 255 },
        { name: "apellido_1", label: "Primer apellido", required: true, maxLength: 255 },
        { name: "apellido_2", label: "Segundo apellido", maxLength: 255 },
        { name: "tipo_identificacion", label: "Tipo de identificación", type: "select", options: TIPOS_IDENTIFICACION, required: true },
        { name: "identificacion", label: "Identificación", required: true, maxLength: 255, table: true, mono: true },
        { name: "email", label: "Correo electrónico", type: "email", required: true, maxLength: 255, table: true },
        { name: "rol", label: "Rol", type: "select", options: ROLES_OPCIONES, badge: true, required: true, table: true },
        { name: "foto_perfil", label: "Foto de perfil", type: "file", accept: "image/png,image/jpeg,image/webp", help: "PNG, JPG o WEBP; máximo 2 MB.", wide: true },
        {
            name: "password",
            label: "Contraseña",
            type: "password",
            required: "create",
            minLength: 8,
            help: "Mínimo 8 caracteres.",
            helpEdit: "Déjala vacía para conservar la actual.",
        },
        {
            name: "password_confirmation",
            label: "Confirmar contraseña",
            type: "password",
            required: "create",
            minLength: 8,
        },
    ],
    relations: [],
});
