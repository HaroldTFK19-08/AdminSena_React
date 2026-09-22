//importaciones de cada componente en react
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/auth/logoSena.svg";

// Enlaces principales del menú
const ENLACES_PRINCIPALES = [
    { to: "/admin", nombre: "Home", icono: "bi-grid-1x2-fill" },
    { to: "/admin/areas", nombre: "Áreas", icono: "bi-diagram-3-fill" },
    { to: "/admin/centros", nombre: "Centros de formación", icono: "bi-building-fill" },
    { to: "/admin/equipos", nombre: "Equipos", icono: "bi-pc-display" },
    { to: "/admin/programas", nombre: "Programas", icono: "bi-mortarboard-fill" },
    { to: "/admin/instructores", nombre: "Instructores", icono: "bi-person-workspace" },
    { to: "/admin/aprendices", nombre: "Aprendices", icono: "bi-people-fill" },
];

// Enlaces de la sección sistema
const ENLACES_SISTEMA = [
    { to: "/admin/reportes", nombre: "Reportes", icono: "bi-bar-chart-fill" },
    { to: "/admin/configuracion", nombre: "Configuración", icono: "bi-gear-fill" },
];

// Componente para crear cada enlace del menú
function SidebarLink({ to, nombre, icono, end, collapsed }) {
    return (
        <li>
            <NavLink
                to={to}
                end={end}
                // Cambia los estilos dependiendo de si el enlace está activo
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
                        {/* Muestra una línea verde si el enlace está activo */}
                        {isActive && (
                            <span
                                className={`absolute top-2 bottom-2 w-[3px] rounded-r-full bg-[#8AFD5D] ${
                                    collapsed ? "left-0" : "left-0"
                                }`}
                            />
                        )}
                        {/* Icono del enlace */}
                        <i
                            className={`bi ${icono} text-[17px] shrink-0 ${
                                collapsed ? "w-auto" : "w-6 text-center"
                            } ${
                                isActive
                                    ? "text-[#8AFD5D]"
                                    : "text-slate-500 group-hover:text-[#8AFD5D]"
                            }`}
                        />
                        {/* Muestra el nombre solo cuando el menú está abierto */}
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

// Componente principal del menú lateral
export default function AsideAdmin() {

    // collapsed indica si el menú está cerrado o abierto
    // false = abierto
    // true = cerrado
    const [collapsed, setCollapsed] = useState(false);

    // Permite cambiar de página desde JavaScript
    const navigate = useNavigate();

    // Función para cerrar sesión
    const cerrarSesion = () => {

        // Elimina el token guardado en el navegador
        localStorage.removeItem("token");

        // Envía al usuario a la página de login
        navigate("/login");
    };

    return (
        <aside
            className={`h-screen sticky top-0 flex flex-col bg-[#071D2B] border-r border-white/[0.06] shrink-0 transition-all duration-300 ${
                // Si está cerrado mide w-20, si está abierto mide w-72
                collapsed ? "w-20" : "w-72"
            }`}
        >

            {/* Parte superior: logo y botón para abrir/cerrar */}
            <div
                className={`flex items-center border-b border-white/[0.06] py-6 ${
                    collapsed
                        ? "flex-col gap-3 px-2"
                        : "justify-between gap-2 px-5"
                }`}
            >

                {/* Al hacer clic en el logo vamos a /admin */}
                <Link
                    to="/admin"
                    className={`flex items-center min-w-0 ${
                        collapsed ? "" : "gap-3"
                    }`}
                >
                    {/* Contenedor del logo */}
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">

                        {/* Logo del SENA */}
                        <img
                            src={Logo}
                            alt="Logo SENA"
                            className="w-7 h-7"
                        />
                    </div>

                    {/* Estos textos desaparecen cuando el menú está cerrado */}
                    {!collapsed && (
                        <div className="min-w-0">

                            {/* Nombre del sistema */}
                            <h1 className="text-base font-black tracking-wide text-white uppercase leading-none truncate">
                                ADMIN <span className="text-[#8AFD5D]">SENA</span>
                            </h1>

                            {/* Descripción */}
                            <p className="mt-1.5 text-[10px] text-slate-500 font-semibold uppercase tracking-[0.14em]">
                                Sistema administrativo
                            </p>
                        </div>
                    )}
                </Link>

                {/* Botón para abrir o cerrar el menú */}
                <button
                    onClick={() =>
                        // Cambia el estado al contrario
                        // false → true
                        // true → false
                        setCollapsed((v) => !v)
                    }
                    aria-label={
                        collapsed
                            ? "Expandir menú"
                            : "Colapsar menú"
                    }
                    className="shrink-0 w-8 h-8 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-center"
                >

                    {/* Cambia el icono dependiendo del estado */}
                    <i
                        className={`bi ${
                            collapsed
                                ? "bi-chevron-right"
                                : "bi-chevron-left"
                        }`}
                    />
                </button>
            </div>

            {/* Menú de navegación */}
            <nav className="flex-1 overflow-y-auto px-3 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                {/* Título Principal solo cuando el menú está abierto */}
                {!collapsed && (
                    <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Principal
                    </p>
                )}

                {/* Línea que aparece cuando el menú está cerrado */}
                {collapsed && (
                    <div className="h-px bg-white/[0.06] mx-1 mb-3" />
                )}

                {/* Lista de enlaces principales */}
                <ul className="space-y-1">

                    {/* Recorre todos los enlaces y crea un SidebarLink */}
                    {ENLACES_PRINCIPALES.map((enlace) => (
                        <SidebarLink
                            key={enlace.to}
                            {...enlace}

                            // Solo Home utiliza end=true
                            // para que sea activo únicamente en /admin
                            end={enlace.to === "/admin"}

                            collapsed={collapsed}
                        />
                    ))}
                </ul>

                {/* Sección Sistema */}
                <div className="mt-8">

                    {/* Título Sistema */}
                    {!collapsed && (
                        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                            Sistema
                        </p>
                    )}

                    {/* Línea cuando el menú está cerrado */}
                    {collapsed && (
                        <div className="h-px bg-white/[0.06] mx-1 mb-3" />
                    )}

                    {/* Lista de enlaces del sistema */}
                    <ul className="space-y-1">

                        {/* Recorre los enlaces de sistema */}
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

            {/* Parte inferior del menú: perfil y cerrar sesión */}
            <div className="px-3 pb-4 border-t border-white/[0.06] pt-3">

                <div
                    className={`flex items-center rounded-xl px-2 py-2 hover:bg-white/[0.04] transition-colors ${
                        collapsed
                            ? "flex-col gap-2"
                            : "gap-3"
                    }`}
                >

                    {/* Enlace hacia el perfil */}
                    <Link
                        to="/admin/perfil"
                        className={`flex items-center min-w-0 ${
                            collapsed
                                ? ""
                                : "gap-3 flex-1"
                        }`}
                        aria-label="Ver perfil"
                    >

                        {/* Icono del usuario */}
                        <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                            <i className="bi bi-person-fill text-slate-300 text-base" />
                        </div>

                        {/* Información del administrador */}
                        {!collapsed && (
                            <div className="min-w-0">

                                <p className="text-xs font-bold text-white truncate">
                                    Administrador
                                </p>

                                <p className="text-[10px] text-slate-500 truncate">
                                    admin@sena.edu.co
                                </p>

                            </div>
                        )}
                    </Link>

                    {/* Botón para cerrar sesión */}
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

