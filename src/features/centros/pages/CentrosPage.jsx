import CrudPage from "../../../shared/components/crud/CrudPage";
import { centrosResource } from "../services/centros.resource";

/**
 * Página del dominio. Usa la página CRUD genérica; si este módulo necesita
 * comportamiento propio (filtros, acciones extra, vistas especiales), agréguelo aquí.
 */
export default function CentrosPage() {
    return <CrudPage resource={centrosResource} />;
}
