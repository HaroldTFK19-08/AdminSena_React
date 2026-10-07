import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { findOption, ROLES_OPCIONES } from "../../shared/constants/enums";
import { iniciales, mediaUrl, nombreCompleto } from "../../shared/utils/format";
import { env } from "../../config/env";
import Logo from "../../assets/icons/auth/logoSena.svg";

export default function Topbar({ onOpenMenu }) {
    const { user } = useAuth();

    return (
        <header className="sticky top-0 z-20 h-[4.75rem] shrink-0 border-b border-[#D8E6EB]/80 bg-[#F8FBFC]/90 px-4 shadow-[0_8px_30px_rgba(15,40,53,0.06)] backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex h-full items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                    <button type="button" onClick={onOpenMenu} aria-label="Abrir menú" className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-sena-navy lg:hidden">
                        <i className="bi bi-list text-xl" />
                    </button>
                    <Link to="/" className="group flex items-center gap-3 lg:hidden">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D8E6EB] bg-white shadow-sm transition-colors group-hover:border-[#39A900]">
                            <img src={Logo} alt="Logo SENA" className="h-7 w-7 object-contain" />
                        </span>
                        <span className="leading-tight">
                            <span className="block text-[11px] font-bold tracking-[0.18em] text-[#607D8B]">PLATAFORMA</span>
                            <span className="block text-sm font-black tracking-wide text-[#0A2334]">ADMIN <span className="text-[#0E6B54]">SENA</span></span>
                        </span>
                    </Link>
                    <div className="hidden min-w-0 lg:block">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#78909C]">Panel administrativo</p>
                        <h1 className="truncate text-lg font-black tracking-tight text-[#0A2334]">Gestión institucional</h1>
                    </div>
                    {env.useMocks && (
                        <span title="VITE_USE_MOCKS=true: los datos son simulados" className="hidden rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700 ring-1 ring-amber-200 sm:inline-flex">
                            Datos simulados
                        </span>
                    )}
                </div>

                <div className="hidden h-8 w-px bg-[#D8E6EB] sm:block" />
                <Link to="/admin/perfil" className="group flex items-center gap-2.5 rounded-xl px-1 py-1.5 transition-colors hover:bg-white hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sena-navy sm:gap-3 sm:pl-1 sm:pr-2.5" title="Mi perfil">
                    <span className="hidden text-right sm:block">
                        <span className="block text-sm font-bold leading-tight text-slate-700 transition-colors group-hover:text-sena-navy">{nombreCompleto(user) || "Usuario"}</span>
                        <span className="mt-0.5 block text-[11px] font-medium text-[#78909C]">{findOption(ROLES_OPCIONES, user?.rol).label}</span>
                    </span>
                    {user?.foto_perfil ? (
                        <img src={mediaUrl(user.foto_perfil)} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm transition-shadow group-hover:ring-sena-green" />
                    ) : (
                        <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#0E6B54] text-sm font-black text-white shadow-sm transition-shadow group-hover:ring-2 group-hover:ring-[#8AFD5D]">{iniciales(user)}</span>
                    )}
                </Link>
            </div>
        </header>
    );
}
