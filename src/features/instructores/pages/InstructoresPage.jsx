import CrudPage from "../../../shared/components/crud/CrudPage";
import { instructoresResource } from "../instructores.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function InstructoresPage() {
    return <CrudPage resource={instructoresResource} />;
}
