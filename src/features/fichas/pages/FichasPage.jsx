import { Link } from "react-router-dom";
import CrudPage from "../../../shared/components/crud/CrudPage";
import { fichasResource } from "../fichas.resource";

/** Ejemplo de personalización: acceso directo a la tabla pivote course_group_teacher. */
export default function FichasPage() {
    return (
        <CrudPage
            resource={fichasResource}
            headerExtra={
                <Link
                    to="/admin/fichas-instructores"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/15 hover:bg-white/15"
                >
                    <i className="bi bi-person-video3" />
                    Asignar instructores
                </Link>
            }
        />
    );
}
