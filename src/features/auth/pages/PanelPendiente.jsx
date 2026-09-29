import { Link } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import { useAuth } from "../hooks/useAuth";
import { nombreCompleto } from "../../../shared/utils/format";

/** Destino temporal para roles cuyo panel aún no existe (instructor, aprendiz, aspirante). */
export default function PanelPendiente() {
    const { user, logout } = useAuth();
    return (
        <AuthShell>
            <div className="max-w-md text-center space-y-4 bg-[#001E30]/85 border border-white/10 rounded-3xl p-8">
                <i className="bi bi-tools text-3xl text-[#8AFD5D]" />
                <h1 className="text-xl font-black">Hola, {nombreCompleto(user) || "usuario"}</h1>
                <p className="text-sm text-slate-300">El panel para el rol «{user?.rol}» todavía está en construcción.</p>
                <div className="flex justify-center gap-3">
                    <Link to="/" className="px-4 py-2 rounded-xl bg-white/10 text-sm font-semibold">
                        Ir al inicio
                    </Link>
                    <button type="button" onClick={logout} className="px-4 py-2 rounded-xl bg-[#8AFD5D] text-[#001E30] text-sm font-bold cursor-pointer">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </AuthShell>
    );
}
