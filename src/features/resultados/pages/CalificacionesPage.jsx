import CrudPage from "../../../shared/components/crud/CrudPage";
import { calificacionesResource } from "../calificaciones.resource";

export default function CalificacionesPage() {
    return <CrudPage resource={calificacionesResource} />;
}
