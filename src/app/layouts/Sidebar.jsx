import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/auth/logoSena.svg";
import { ADMIN_MENU } from "../navigation";
import { useAuth } from "../../features/auth/hooks/useAuth";

export default function Sidebar({ collapsed, onToggle, mobileOpen, onCloseMobile }) {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate("/login", { replace: true });
    };

    return (
        <>
            {mobileOpen && <div className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-[2px] lg:hidden" onClick={onCloseMobile} aria-hidden="true" />}
            <aside
                aria-label="Navegación administrativa"
                className={`fixed lg:sticky top-0 z-40 h-screen bg-gradient-to-b from-[#08283B] to-[#041A2A] text-white flex flex-col border-r border-white/[0.08] shadow-2xl transition-[width,transform] duration-300 ease-out
                ${collapsed ? "lg:w-20" : "lg:w-72"} w-72 ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className={`h-20 shrink-0 p-5 flex items-center border-b border-white/[0.08] bg-white/[0.02] ${collapsed ? "lg:h-28 lg:flex-col lg:gap-3 lg:p-2" : "justify-between gap-2"}`}>
                    <NavLink to="/admin" className="group flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0 border border-white/10 shadow-inner transition-colors group-hover:border-sena-green/40">
                            <img src={Logo} alt="" className="w-7 h-7" />
                        </span>
                        <span className={`font-black text-lg tracking-tight leading-none ${collapsed ? "lg:hidden" : ""}`}>
                            ADMIN <span className="text-sena-green">SENA</span>
                        </span>
                    </NavLink>
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
                        className="hidden lg:block shrink-0 rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-sena-green cursor-pointer"
                    >
                        <i className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`} />
                    </button>
                    <button type="button" onClick={onCloseMobile} aria-label="Cerrar menú" className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-slate-300 cursor-pointer">
                        <i className="bi bi-x-lg" />
                    </button>
                </div>

                <nav aria-label="Menú principal" className="sidebar-scroll min-h-0 flex-1 space-y-2 overflow-x-hidden overflow-y-auto px-3 py-5">
                    {ADMIN_MENU.map((grupo) => (
                        <div key={grupo.grupo} className="space-y-1">
                            <p className={`flex items-center justify-between rounded-lg px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] ${collapsed ? "lg:sr-only" : ""}`}>{grupo.grupo}</p>
                            <ul className="space-y-1">
                                {grupo.items.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            end={item.path === "/admin"}
                                            title={collapsed ? item.label : undefined}
                                            className={({ isActive }) =>
                                                `group relative flex min-h-10 items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-[13px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sena-green ${
                                                    isActive
                                                        ? "bg-sena-green/[0.12] font-bold text-sena-green shadow-inner shadow-sena-green/[0.04] before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:rounded-r-full before:bg-sena-green before:content-['']"
                                                        : "text-slate-400 hover:bg-white/[0.07] hover:text-white"
                                                }`
                                            }
                                        >
                                            <i className={`bi ${item.icon} w-5 shrink-0 text-center text-[15px] transition-transform duration-200 group-hover:scale-110 ${collapsed ? "lg:mx-auto" : ""}`} />
                                            <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className={`border-t border-white/[0.08] pt-4 ${collapsed ? "lg:hidden" : ""}`}>
                        <div className="rounded-2xl border border-[#8AFD5D]/[0.16] bg-white/[0.04] p-3.5">
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">Estado del sistema</p>
                            <div className="mt-1.5 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8AFD5D] opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8AFD5D]" />
                                </span>
                                <span className="text-xs font-semibold text-slate-200">Sistema operativo</span>
                            </div>
                            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-full rounded-full bg-[#8AFD5D]" />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="shrink-0 border-t border-white/[0.08] bg-[#061522]/70 p-4">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-[13px] text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-red-300 cursor-pointer"
                    >
                        <i className={`bi bi-box-arrow-right text-base ${collapsed ? "lg:mx-auto" : ""}`} />
                        <span className={collapsed ? "lg:hidden" : ""}>Cerrar sesión</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
