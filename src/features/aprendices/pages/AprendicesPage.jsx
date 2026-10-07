import CrudPage from "../../../shared/components/crud/CrudPage";
import { aprendicesResource } from "../aprendices.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function AprendicesPage() {
    return <CrudPage resource={aprendicesResource} canCreate={false} />;
}
