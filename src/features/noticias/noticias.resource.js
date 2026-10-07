import { defineResource } from "../../shared/resources/registry";
import { ENDPOINTS } from "../../shared/api/endpoints";
import { CATEGORIAS_NOTICIA, ESTADOS_NOTICIA } from "../../shared/constants/enums";

/** Tabla `news` (admins 1:N news, trainingcenters 1:N news). */
export const noticiasResource = defineResource({
    key: "news",
    endpoint: ENDPOINTS.news,
    singular: "Noticia",
    plural: "Noticias",
    icon: "bi-newspaper",
    description: "Comunicados institucionales publicados por centro.",
    display: (row) => row?.titulo ?? `Noticia #${row?.id}`,
    fields: [
        { name: "titulo", label: "Título", required: true, maxLength: 255, table: true, wide: true },
        { name: "trainingcenter_id", label: "Centro de formación", type: "reference", ref: "trainingcenters", required: true, table: true },
        { name: "admin_id", label: "Autor", type: "reference", ref: "admins", form: false, table: true },
        { name: "estado", label: "Estado", type: "select", options: ESTADOS_NOTICIA, badge: true, required: true, table: true, defaultValue: "Creado" },
        { name: "categoria", label: "Categoría", type: "select", options: CATEGORIAS_NOTICIA, required: true, table: true },
        { name: "descripcion", label: "Descripción", type: "textarea", required: true, maxLength: 2000 },
        { name: "imagen", label: "Imagen", type: "file", accept: "image/png,image/jpeg,image/webp", wide: true },
    ],
});
