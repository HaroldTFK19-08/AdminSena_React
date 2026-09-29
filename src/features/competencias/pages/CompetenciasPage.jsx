import { Link } from "react-router-dom";
import CrudPage from "../../../shared/components/crud/CrudPage";
import { competenciasResource } from "../competencias.resource";

/** Ejemplo de personalización: acceso directo a la tabla pivote competency_teacher. */
export default function CompetenciasPage() {
    return (
        <CrudPage
            resource={competenciasResource}
            headerExtra={
                <Link
                    to="/admin/competencias-instructores"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/15 hover:bg-white/15"
                >
                    <i className="bi bi-person-badge" />
                    Instructores por competencia
                </Link>
            }
        />
    );
}
