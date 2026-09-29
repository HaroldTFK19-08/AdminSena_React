/**
 * Menú del panel administrativo agrupado por dominio del modelo relacional.
 * `path` debe coincidir con las rutas de app/router/AppRoutes.jsx.
 */
export const ADMIN_MENU = [
    {
        grupo: "Principal",
        items: [{ path: "/admin", label: "Inicio", icon: "bi-grid-1x2-fill" }],
    },
    {
        grupo: "Personas",
        items: [
            { path: "/admin/usuarios", label: "Usuarios", icon: "bi-person-gear" },
            { path: "/admin/administradores", label: "Administradores", icon: "bi-shield-lock-fill" },
            { path: "/admin/instructores", label: "Instructores", icon: "bi-person-workspace" },
            { path: "/admin/aprendices", label: "Aprendices", icon: "bi-people-fill" },
            { path: "/admin/aspirantes", label: "Aspirantes", icon: "bi-person-raised-hand" },
        ],
    },
    {
        grupo: "Estructura académica",
        items: [
            { path: "/admin/centros", label: "Centros", icon: "bi-building-fill" },
            { path: "/admin/areas", label: "Áreas", icon: "bi-diagram-3-fill" },
            { path: "/admin/programas", label: "Programas", icon: "bi-mortarboard-fill" },
            { path: "/admin/competencias", label: "Competencias", icon: "bi-award-fill" },
            { path: "/admin/fichas", label: "Fichas", icon: "bi-card-checklist" },
        ],
    },
    {
        grupo: "Seguimiento",
        items: [
            { path: "/admin/fichas-instructores", label: "Instructores por ficha", icon: "bi-person-video3" },
            { path: "/admin/competencias-instructores", label: "Competencias por instructor", icon: "bi-person-badge" },
            { path: "/admin/resultados", label: "Resultados", icon: "bi-clipboard2-check-fill" },
        ],
    },
    {
        grupo: "Infraestructura",
        items: [
            { path: "/admin/ambientes", label: "Ambientes", icon: "bi-door-open-fill" },
            { path: "/admin/equipos", label: "Equipos", icon: "bi-cpu-fill" },
            { path: "/admin/asignaciones", label: "Asignaciones", icon: "bi-box-arrow-in-right" },
        ],
    },
    {
        grupo: "Convocatorias",
        items: [
            { path: "/admin/ofertas", label: "Ofertas", icon: "bi-megaphone-fill" },
            { path: "/admin/inscripciones", label: "Inscripciones", icon: "bi-journal-check" },
            { path: "/admin/noticias", label: "Noticias", icon: "bi-newspaper" },
        ],
    },
    {
        grupo: "Sistema",
        items: [
            { path: "/admin/reportes", label: "Reportes", icon: "bi-bar-chart-fill" },
            { path: "/admin/configuracion", label: "Configuración", icon: "bi-gear-fill" },
        ],
    },
];

/** Título de la barra superior según la ruta actual. */
export function tituloDeRuta(pathname) {
    if (pathname === "/admin/perfil") return "Mi perfil";
    const items = ADMIN_MENU.flatMap((g) => g.items);
    const match = items
        .filter((i) => pathname === i.path || pathname.startsWith(`${i.path}/`))
        .sort((a, b) => b.path.length - a.path.length)[0];
    return match?.label ?? "Panel administrativo";
}
