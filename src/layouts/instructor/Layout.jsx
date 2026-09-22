import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/auth/logoSena.svg";

// --- CONFIGURACIÓN DEL MENÚ (Instructor) ---
const ENLACES_PRINCIPALES = [
    { to: "/instructor", nombre: "Inicio", icono: "bi-grid-1x2-fill" },
    { to: "/instructor/cursos", nombre: "Mis cursos", icono: "bi-mortarboard-fill" },
    { to: "/instructor/aprendices", nombre: "Aprendices", icono: "bi-people-fill" },
    { to: "/instructor/ambientes", nombre: "Ambientes", icono: "bi-door-open-fill" },
];

const ENLACES_SISTEMA = [
    { to: "/instructor/reportes", nombre: "Reportes", icono: "bi-bar-chart-fill" },
    { to: "/instructor/configuracion", nombre: "Configuración", icono: "bi-gear-fill" },
];

// --- COMPONENTE AUXILIAR: Enlace del Menú ---
function SidebarLink({ to, nombre, icono, end, collapsed }) {
    return (
        <li>
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    `group relative flex items-center rounded-xl transition-all duration-150 ${
                        collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-3"
                    } ${isActive ? "bg-[#8AFD5D]/15 text-[#8AFD5D]" : "text-slate-400 hover:bg-[#8AFD5D]/10 hover:text-[#8AFD5D]"}`
                }
            >
                {({ isActive }) => (
                    <>
                        {isActive && <span className="absolute top-2 bottom-2 w-[3px] rounded-r-full bg-[#8AFD5D] left-0" />}
                        <i className={`bi ${icono} text-[17px] shrink-0 ${collapsed ? "w-auto" : "w-6 text-center"} ${isActive ? "text-[#8AFD5D]" : "text-slate-500 group-hover:text-[#8AFD5D]"}`} />
                        {!collapsed && <span className="text-[13px] font-semibold truncate">{nombre}</span>}
                    </>
                )}
            </NavLink>
        </li>
    );
}

// --- LAYOUT PRINCIPAL DEL INSTRUCTOR ---
export default function LayoutInstructor({ children, titulo = "Panel del Instructor", seccion = "Inicio" }) {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            
            {/* --- MENÚ LATERAL (Aside) --- */}
            <aside className={`h-screen sticky top-0 flex flex-col bg-[#071D2B] border-r border-white/[0.06] shrink-0 transition-all duration-300 ${collapsed ? "w-20" : "w-72"}`}>
                
                <div className={`flex items-center border-b border-white/[0.06] py-6 ${collapsed ? "flex-col gap-3 px-2" : "justify-between gap-2 px-5"}`}>
                    <Link to="/instructor" className={`flex items-center min-w-0 ${collapsed ? "" : "gap-3"}`}>
                        <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                            <img src={Logo} alt="Logo SENA" className="w-7 h-7" />
                        </div>
                        {!collapsed && (
                            <div className="min-w-0">
                                <h1 className="text-base font-black tracking-wide text-white uppercase leading-none truncate">ADMIN <span className="text-[#8AFD5D]">SENA</span></h1>
                                <p className="mt-1.5 text-[10px] text-slate-500 font-semibold uppercase tracking-[0.14em]">Panel del instructor</p>
                            </div>
                        )}
                    </Link>
                    <button onClick={() => setCollapsed(!collapsed)} className="shrink-0 w-8 h-8 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-center">
                        <i className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {!collapsed && <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Principal</p>}
                    {collapsed && <div className="h-px bg-white/[0.06] mx-1 mb-3" />}
                    <ul className="space-y-1">
                        {ENLACES_PRINCIPALES.map(enlace => (
                            <SidebarLink key={enlace.to} {...enlace} end={enlace.to === "/instructor"} collapsed={collapsed} />
                        ))}
                    </ul>
                    <div className="mt-8">
                        {!collapsed && <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Sistema</p>}
                        {collapsed && <div className="h-px bg-white/[0.06] mx-1 mb-3" />}
                        <ul className="space-y-1">
                            {ENLACES_SISTEMA.map(enlace => (
                                <SidebarLink key={enlace.to} {...enlace} collapsed={collapsed} />
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="px-3 pb-4 border-t border-white/[0.06] pt-3">
                    <div className={`flex items-center rounded-xl px-2 py-2 hover:bg-white/[0.04] transition-colors ${collapsed ? "flex-col gap-2" : "gap-3"}`}>
                        <Link to="/instructor/perfil" className={`flex items-center min-w-0 ${collapsed ? "" : "gap-3 flex-1"}`}>
                            <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                                <i className="bi bi-person-workspace text-slate-300 text-base" />
                            </div>
                            {!collapsed && (
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-white truncate">Instructor</p>
                                    <p className="text-[10px] text-slate-500 truncate">instructor@sena.edu.co</p>
                                </div>
                            )}
                        </Link>
                        <button onClick={cerrarSesion} className="shrink-0 w-8 h-8 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-colors flex items-center justify-center">
                            <i className="bi bi-box-arrow-right" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* --- ÁREA DE CONTENIDO --- */}
            <main className="flex-1 min-w-0 overflow-y-auto">
                <header className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <button onClick={() => navigate(-1)} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-[#39A900]/10 hover:text-[#39A900] border border-gray-300">
                                <i className="bi bi-arrow-left text-lg"></i>
                            </button>
                            <div className="ml-2">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Instructor / {seccion}</p>
                                <h1 className="text-base font-bold text-slate-800 leading-none mt-0.5">{titulo}</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-emerald-600 transition-colors">
                                <i className="bi bi-bell text-sm" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white" />
                            </button>
                        </div>
                    </div>
                </header>
                <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
