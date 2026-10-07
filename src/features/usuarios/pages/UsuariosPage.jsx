import CrudPage from "../../../shared/components/crud/CrudPage";
import { usuariosResource } from "../usuarios.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function UsuariosPage() {
    return <CrudPage resource={usuariosResource} canEdit={false} />;
}
