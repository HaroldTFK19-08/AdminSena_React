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
        login: "/login",
        register: "/register",
        logout: "/logout",
        me: "/me",
    },

    // Personas
    users: "/users",
    admins: "/admins",
    aspirants: "/aspirants",
    teachers: "/teachers",
    apprentices: "/apprentices",

    // Estructura institucional
    trainingcenters: "/trainingcenters",
    areas: "/areas",
    programs: "/programs",
    competencies: "/competencies",
    course_groups: "/course-groups",
    environments: "/environments",
    equipment: "/equipment",

    // Relaciones / operación
    competency_teacher: "/competency-teacher",
    course_group_teacher: "/course-group-teacher",
    results: "/results",
    assignments: "/assignments",

    // Convocatorias y comunicación
    offers: "/offers",
    registrations: "/registrations",
    news: "/news",
});
