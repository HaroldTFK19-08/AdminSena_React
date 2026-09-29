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
            {mobileOpen && <div className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden" onClick={onCloseMobile} aria-hidden="true" />}
            <aside
                className={`fixed lg:sticky top-0 z-40 h-screen bg-sena-navy text-white flex flex-col border-r border-white/10 transition-[width,transform] duration-300
                ${collapsed ? "lg:w-20" : "lg:w-72"} w-72 ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className={`p-5 flex items-center border-b border-white/10 ${collapsed ? "lg:flex-col lg:gap-3" : "justify-between gap-2"}`}>
                    <NavLink to="/admin" className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
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
                        className="hidden lg:block p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <i className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`} />
                    </button>
                    <button type="button" onClick={onCloseMobile} aria-label="Cerrar menú" className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-slate-300 cursor-pointer">
                        <i className="bi bi-x-lg" />
                    </button>
                </div>

                <nav aria-label="Menú principal" className="flex-1 px-3 py-6 space-y-6 overflow-y-auto [scrollbar-width:none]">
                    {ADMIN_MENU.map((grupo) => (
                        <div key={grupo.grupo}>
                            <p className={`px-3 mb-2 text-xs font-semibold text-slate-500 ${collapsed ? "lg:sr-only" : ""}`}>{grupo.grupo}</p>
                            <ul className="space-y-1">
                                {grupo.items.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            end={item.path === "/admin"}
                                            title={collapsed ? item.label : undefined}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-2 focus-visible:outline-sena-green ${
                                                    isActive ? "bg-sena-green text-sena-navy font-bold" : "text-slate-400 hover:bg-white/5 hover:text-white"
                                                }`
                                            }
                                        >
                                            <i className={`bi ${item.icon} text-base ${collapsed ? "lg:mx-auto" : ""}`} />
                                            <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-300 cursor-pointer"
                    >
                        <i className={`bi bi-box-arrow-right text-base ${collapsed ? "lg:mx-auto" : ""}`} />
                        <span className={collapsed ? "lg:hidden" : ""}>Cerrar sesión</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
