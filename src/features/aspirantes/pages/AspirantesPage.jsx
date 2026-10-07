import CrudPage from "../../../shared/components/crud/CrudPage";
import { aspirantesResource } from "../aspirantes.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function AspirantesPage() {
    return <CrudPage resource={aspirantesResource} canCreate={false} />;
}
