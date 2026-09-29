import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { findOption, ROLES_OPCIONES } from "../../shared/constants/enums";
import { iniciales, nombreCompleto } from "../../shared/utils/format";
import { env } from "../../config/env";

export default function Topbar({ titulo, onOpenMenu }) {
    const { user } = useAuth();

    return (
        <header className="h-16 shrink-0 bg-white border-b border-slate-200/70 px-4 sm:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
                <button type="button" onClick={onOpenMenu} aria-label="Abrir menú" className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer">
                    <i className="bi bi-list text-xl" />
                </button>
                <h1 className="text-lg font-black text-sena-navy tracking-tight truncate">{titulo}</h1>
                {env.useMocks && (
                    <span title="VITE_USE_MOCKS=true: los datos son simulados" className="hidden sm:inline-flex px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold ring-1 ring-amber-200">
                        Datos simulados
                    </span>
                )}
            </div>

            <Link to="/admin/perfil" className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-sena-navy" title="Mi perfil">
                <span className="text-right hidden sm:block">
                    <span className="block text-sm font-bold text-slate-700 leading-none">{nombreCompleto(user) || "Usuario"}</span>
                    <span className="block text-xs text-slate-400 mt-1">{findOption(ROLES_OPCIONES, user?.rol).label}</span>
                </span>
                {user?.foto_perfil ? (
                    <img src={user.foto_perfil} alt="" className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200" />
                ) : (
                    <span className="w-10 h-10 rounded-full bg-sena-navy text-sena-green font-bold flex items-center justify-center text-sm">{iniciales(user)}</span>
                )}
            </Link>
        </header>
    );
}
