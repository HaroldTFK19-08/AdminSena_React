import CrudPage from "../../../shared/components/crud/CrudPage";
import { asignacionesResource } from "../asignaciones.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function AsignacionesPage() {
    return <CrudPage resource={asignacionesResource} />;
}
