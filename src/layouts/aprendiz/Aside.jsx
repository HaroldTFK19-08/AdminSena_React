import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/auth/logoSena.svg";

const ENLACES_PRINCIPALES = [
    {
        to: "/aprendiz",
        nombre: "Inicio",
        icono: "bi-grid-1x2-fill",
    },
    {
        to: "/aprendiz/cursos",
        nombre: "Cursos",
        icono: "bi-mortarboard-fill",
    },
    {
        to: "/aprendiz/instructores",
        nombre: "Instructores",
        icono: "bi-person-video3",
    },
    {
        to: "/aprendiz/computador",
        nombre: "Computador",
        icono: "bi-pc-display",
    },
];

const ENLACES_SISTEMA = [
    {
        to: "/aprendiz/reportes",
        nombre: "Reportes",
        icono: "bi-bar-chart-fill",
    },
    {
        to: "/aprendiz/configuracion",
        nombre: "Configuración",
        icono: "bi-gear-fill",
    },
];

function SidebarLink({ to, nombre, icono, end, collapsed }) {
    return (
        <li>
            <NavLink
                to={to}
                end={end}
                aria-label={nombre}
                title={collapsed ? nombre : undefined}
                className={({ isActive }) =>
                    `group relative flex items-center rounded-xl transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#8AFD5D]/50 ${
                        collapsed
                            ? "justify-center px-0 py-3"
                            : "gap-3 px-3 py-3"
                    } ${
                        isActive
                            ? "bg-[#8AFD5D]/15 text-[#8AFD5D]"
                            : "text-slate-400 hover:bg-[#8AFD5D]/10 hover:text-[#8AFD5D]"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        {isActive && (
                            <span
                                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-[#8AFD5D]"
                            />
                        )}

                        <i
                            className={`bi ${icono} text-[17px] shrink-0 ${
                                collapsed
                                    ? "w-auto"
                                    : "w-6 text-center"
                            } ${
                                isActive
                                    ? "text-[#8AFD5D]"
                                    : "text-slate-500 group-hover:text-[#8AFD5D]"
                            }`}
                        />

                        {!collapsed && (
                            <span className="text-[13px] font-semibold truncate">
                                {nombre}
                            </span>
                        )}
                    </>
                )}
            </NavLink>
        </li>
    );
}

export default function AsideAprendiz() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside
            className={`h-screen sticky top-0 flex flex-col bg-[#071D2B] border-r border-white/[0.06] shrink-0 transition-all duration-300 ${
                collapsed ? "w-20" : "w-72"
            }`}
        >
            {/* LOGO */}
            <div
                className={`flex items-center border-b border-white/[0.06] py-6 ${
                    collapsed
                        ? "flex-col gap-3 px-2"
                        : "justify-between gap-2 px-5"
                }`}
            >
                <Link
                    to="/aprendiz"
                    className={`flex items-center min-w-0 ${
                        collapsed ? "" : "gap-3"
                    }`}
                >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                        <img
                            src={Logo}
                            alt="Logo SENA"
                            className="w-7 h-7"
                        />
                    </div>

                    {!collapsed && (
                        <div className="min-w-0">
                            <h1 className="text-base font-black tracking-wide text-white uppercase leading-none truncate">
                                ADMIN
                                <span className="text-[#8AFD5D] ml-1">
                                    SENA
                                </span>
                            </h1>

                            <p className="mt-1.5 text-[10px] text-slate-500 font-semibold uppercase tracking-[0.14em]">
                                Panel del aprendiz
                            </p>
                        </div>
                    )}
                </Link>

                <button
                    onClick={() => setCollapsed((v) => !v)}
                    aria-label={
                        collapsed
                            ? "Expandir menú"
                            : "Colapsar menú"
                    }
                    className="shrink-0 w-8 h-8 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-center"
                >
                    <i
                        className={`bi ${
                            collapsed
                                ? "bi-chevron-right"
                                : "bi-chevron-left"
                        }`}
                    />
                </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {!collapsed && (
                    <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Principal
                    </p>
                )}

                {collapsed && (
                    <div className="h-px bg-white/[0.06] mx-1 mb-3" />
                )}

                <ul className="space-y-1">
                    {ENLACES_PRINCIPALES.map((enlace) => (
                        <SidebarLink
                            key={enlace.to}
                            {...enlace}
                            end={enlace.to === "/aprendiz"}
                            collapsed={collapsed}
                        />
                    ))}
                </ul>

                {/* SISTEMA */}
                <div className="mt-8">
                    {!collapsed && (
                        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                            Sistema
                        </p>
                    )}

                    {collapsed && (
                        <div className="h-px bg-white/[0.06] mx-1 mb-3" />
                    )}

                    <ul className="space-y-1">
                        {ENLACES_SISTEMA.map((enlace) => (
                            <SidebarLink
                                key={enlace.to}
                                {...enlace}
                                collapsed={collapsed}
                            />
                        ))}
                    </ul>
                </div>
            </nav>

            {/* PERFIL */}
            <div className="px-3 pb-4 border-t border-white/[0.06] pt-3">
                <div
                    className={`flex items-center rounded-xl px-2 py-2 hover:bg-white/[0.04] transition-colors ${
                        collapsed
                            ? "flex-col gap-2"
                            : "gap-3"
                    }`}
                >
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                        <i className="bi bi-person-fill text-slate-300 text-base" />
                    </div>

                    {!collapsed && (
                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-white truncate">
                                Aprendiz
                            </p>

                            <p className="text-[10px] text-slate-500 truncate">
                                aprendiz@sena.edu.co
                            </p>
                        </div>
                    )}

                    <button
                        onClick={cerrarSesion}
                        aria-label="Cerrar sesión"
                        title="Cerrar sesión"
                        className="shrink-0 w-8 h-8 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-colors flex items-center justify-center"
                    >
                        <i className="bi bi-box-arrow-right" />
                    </button>
                </div>
            </div>
        </aside>
    );
}