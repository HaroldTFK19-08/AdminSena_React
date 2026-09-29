import CrudPage from "../../../shared/components/crud/CrudPage";
import { areasResource } from "../areas.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function AreasPage() {
    return <CrudPage resource={areasResource} />;
}
