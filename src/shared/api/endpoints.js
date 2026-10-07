/**
 * Mapa único de endpoints del backend.
 * Las claves coinciden con los nombres de las tablas del modelo relacional,
 * así cada dominio del frontend sabe exactamente contra qué recurso habla.
 *
 * Si tu backend usa otras rutas (p. ej. /centros en vez de /trainingcenters),
 * cámbialas SOLO aquí.
 */
export const ENDPOINTS = Object.freeze({
    // Autenticación
    auth: {
        login: "/auth/login",
        register: "/auth/register",
        logout: "/auth/logout",
        me: "/auth/me",
        profile: "/auth/profile",
    },

    // Personas
    users: "/usuarios",
    admins: "/admins",
    aspirants: "/aspirantes",
    teachers: "/instructores",
    apprentices: "/aprendices",

    // Estructura institucional
    trainingcenters: "/centros",
    areas: "/areas",
    programs: "/programas",
    competencies: "/competencias",
    course_groups: "/fichas",
    environments: "/ambientes",
    equipment: "/equipos",

    // Relaciones / operación
    competency_teacher: "/competencias-instructores",
    course_group_teacher: "/fichas-instructores",
    results: "/resultados",
    grades: "/calificaciones",
    assignments: "/asignaciones",
    // Convocatorias y comunicación
    offers: "/ofertas",
    registrations: "/inscripciones",
    news: "/noticias",
});
