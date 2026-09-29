/**
 * Datos de prueba coherentes con el modelo relacional (mismas tablas, columnas y llaves foráneas).
 * Solo se usan cuando VITE_USE_MOCKS=true.
 */

// Contraseñas de prueba (en el backend real se guardan con hash en users.password)
export const MOCK_PASSWORDS = {
    1: "admin123",
    2: "instructor123",
    6: "aprendiz123",
    12: "aspirante123",
};

const u = (id, nombre_1, nombre_2, apellido_1, apellido_2, tipo_identificacion, identificacion, rol, email) => ({
    id, nombre_1, nombre_2, apellido_1, apellido_2, foto_perfil: null, tipo_identificacion, identificacion, rol, email,
});

export const seed = {
    trainingcenters: [
        { id: 1, nombre: "Centro de Teleinformática y Producción Industrial (CTPI)", direccion: "Calle 53 N # 9-27, Popayán" },
        { id: 2, nombre: "Centro de Comercio y Servicios", direccion: "Calle 4 # 2-80, Popayán" },
        { id: 3, nombre: "Centro Agropecuario", direccion: "Vía al Huila, Popayán" },
    ],

    areas: [
        { id: 1, trainingcenter_id: 1, nombre: "Teleinformática" },
        { id: 2, trainingcenter_id: 1, nombre: "Redes e Infraestructura Tecnológica" },
        { id: 3, trainingcenter_id: 2, nombre: "Gestión Administrativa y Financiera" },
        { id: 4, trainingcenter_id: 2, nombre: "Mercadeo y Gestión Comercial" },
        { id: 5, trainingcenter_id: 3, nombre: "Producción Agropecuaria" },
    ],

    programs: [
        { id: 1, area_id: 1, nombre: "Análisis y Desarrollo de Software", codigo_programa: "228106", nivel_programa: "tecnologo" },
        { id: 2, area_id: 2, nombre: "Gestión de Redes de Datos", codigo_programa: "228107", nivel_programa: "tecnologo" },
        { id: 3, area_id: 3, nombre: "Gestión Administrativa", codigo_programa: "122115", nivel_programa: "tecnologo" },
        { id: 4, area_id: 4, nombre: "Venta de Productos y Servicios", codigo_programa: "524101", nivel_programa: "tecnico" },
        { id: 5, area_id: 2, nombre: "Instalación de Sistemas Solares Fotovoltaicos", codigo_programa: "621113", nivel_programa: "tecnico" },
    ],

    users: [
        u(1, "Carlos", null, "Tejada", null, "CC", "10614520", "admin", "admin123@sena.edu.co"),
        u(2, "Carlos", "Alberto", "Ruiz", null, "CC", "1061789456", "instructor", "instructor@sena.edu.co"),
        u(3, "Marta", "Lucía", "Gómez", null, "CC", "34521890", "instructor", "marta.gomez@sena.edu.co"),
        u(4, "Jorge", "Eliécer", "Rodas", null, "CC", "1061998234", "instructor", "jorge.rodas@sena.edu.co"),
        u(5, "Sandra", "Milena", "Paz", null, "CC", "25289412", "instructor", "sandra.paz@sena.edu.co"),
        u(6, "Andrés", "Felipe", "Mendoza", null, "TI", "1023456789", "aprendiz", "aprendiz@sena.edu.co"),
        u(7, "Valentina", null, "Restrepo", null, "CC", "1056789012", "aprendiz", "valentina.restrepo@sena.edu.co"),
        u(8, "Mateo", null, "Jaramillo", null, "CC", "1089012345", "aprendiz", "mateo.jaramillo@sena.edu.co"),
        u(9, "Isabella", null, "Ortiz", null, "TI", "1011223344", "aprendiz", "isabella.ortiz@sena.edu.co"),
        u(10, "Santiago", null, "Duarte", null, "CC", "1066778899", "aprendiz", "santiago.duarte@sena.edu.co"),
        u(11, "Camila", null, "Valencia", null, "CC", "1033445566", "aprendiz", "camila.valencia@sena.edu.co"),
        u(12, "Laura", null, "Muñoz", null, "CC", "1061223344", "aspirante", "aspirante@sena.edu.co"),
        u(13, "Juan", "Alexander", "Adrada", "Salazar", "TI", "1062334455", "aspirante", "juan.adrada@outlook.com"),
    ],

    admins: [{ id: 1, user_id: 1, cargo: "Coordinador académico", ubicacion_oficina: "Bloque A - Oficina 201", direccion: "Calle 53 N # 9-27" }],

    teachers: [
        { id: 1, user_id: 2, area_id: 1, especialidad: "Desarrollo de software", tipo_instructor: "planta", fecha_inicio: "2019-02-01", fecha_fin: null },
        { id: 2, user_id: 3, area_id: 1, especialidad: "Bases de datos", tipo_instructor: "contratista", fecha_inicio: "2026-01-20", fecha_fin: "2026-12-15" },
        { id: 3, user_id: 4, area_id: 2, especialidad: "Redes y telecomunicaciones", tipo_instructor: "planta", fecha_inicio: "2017-08-01", fecha_fin: null },
        { id: 4, user_id: 5, area_id: 3, especialidad: "Gestión documental", tipo_instructor: "contratista", fecha_inicio: "2026-02-01", fecha_fin: "2026-11-30" },
    ],

    aspirants: [
        { id: 1, user_id: 12, eps: "Nueva EPS", certificado_eps: null, certificado_icfes: null, certificado_sisben: null },
        { id: 2, user_id: 13, eps: "Sanitas", certificado_eps: null, certificado_icfes: null, certificado_sisben: null },
    ],

    competencies: [
        { id: 1, codigo: "220501096", nombre: "Desarrollar la solución de software de acuerdo con el diseño", descripcion: "Construcción de componentes de software a partir de los artefactos de diseño.", fecha_inicio: "2026-02-02", fecha_fin: "2026-06-30" },
        { id: 2, codigo: "220501097", nombre: "Implantar la solución de software según los requisitos", descripcion: "Despliegue, pruebas y puesta en producción.", fecha_inicio: "2026-07-13", fecha_fin: "2026-11-27" },
        { id: 3, codigo: "220501046", nombre: "Utilizar herramientas informáticas según necesidades de información", descripcion: null, fecha_inicio: "2026-02-02", fecha_fin: "2026-04-10" },
        { id: 4, codigo: "210601020", nombre: "Atender clientes según procedimiento de servicio", descripcion: null, fecha_inicio: "2026-03-02", fecha_fin: "2026-08-28" },
        { id: 5, codigo: "280501021", nombre: "Configurar dispositivos de red según normas técnicas", descripcion: null, fecha_inicio: "2026-02-16", fecha_fin: "2026-07-31" },
    ],

    course_groups: [
        { id: 1, program_id: 1, codigo: "2854671", capacidad_aprendices: 30 },
        { id: 2, program_id: 2, codigo: "2854680", capacidad_aprendices: 25 },
        { id: 3, program_id: 3, codigo: "2854690", capacidad_aprendices: 30 },
        { id: 4, program_id: 1, codigo: "2854700", capacidad_aprendices: 28 },
    ],

    course_group_teacher: [
        { id: 1, course_group_id: 1, teacher_id: 1 },
        { id: 2, course_group_id: 1, teacher_id: 2 },
        { id: 3, course_group_id: 2, teacher_id: 3 },
        { id: 4, course_group_id: 3, teacher_id: 4 },
        { id: 5, course_group_id: 4, teacher_id: 1 },
    ],

    competency_teacher: [
        { id: 1, competency_id: 1, teacher_id: 1 },
        { id: 2, competency_id: 2, teacher_id: 1 },
        { id: 3, competency_id: 3, teacher_id: 2 },
        { id: 4, competency_id: 5, teacher_id: 3 },
        { id: 5, competency_id: 4, teacher_id: 4 },
    ],

    apprentices: [
        { id: 1, user_id: 6, course_group_id: 1, status: "en_formacion", start_date: "2026-02-02", end_date: "2027-12-15" },
        { id: 2, user_id: 7, course_group_id: 1, status: "en_formacion", start_date: "2026-02-02", end_date: "2027-12-15" },
        { id: 3, user_id: 8, course_group_id: 2, status: "en_formacion", start_date: "2026-02-16", end_date: "2027-11-30" },
        { id: 4, user_id: 9, course_group_id: 2, status: "aplazado", start_date: "2026-02-16", end_date: null },
        { id: 5, user_id: 10, course_group_id: 3, status: "certificado", start_date: "2024-07-15", end_date: "2026-06-20" },
        { id: 6, user_id: 11, course_group_id: 4, status: "condicionado", start_date: "2026-07-13", end_date: "2028-06-30" },
    ],

    results: [
        { id: 1, competency_id: 3, apprentice_id: 1, estado_competencia: "aprobado", comentarios: "Buen manejo de hojas de cálculo." },
        { id: 2, competency_id: 1, apprentice_id: 1, estado_competencia: "aprobado", comentarios: null },
        { id: 3, competency_id: 2, apprentice_id: 1, estado_competencia: "en_curso", comentarios: null },
        { id: 4, competency_id: 1, apprentice_id: 2, estado_competencia: "no_aprobado", comentarios: "Debe presentar plan de mejoramiento." },
        { id: 5, competency_id: 5, apprentice_id: 3, estado_competencia: "en_curso", comentarios: null },
    ],

    environments: [
        { id: 1, trainingcenter_id: 2, nombre: "Aula 102 - Bloque A", capacidad: 30, tipo_ambiente: "aula" },
        { id: 2, trainingcenter_id: 1, nombre: "Laboratorio de Cómputo 2", capacidad: 25, tipo_ambiente: "laboratorio" },
        { id: 3, trainingcenter_id: 3, nombre: "Laboratorio de Biología", capacidad: 20, tipo_ambiente: "laboratorio" },
        { id: 4, trainingcenter_id: 2, nombre: "Auditorio Principal", capacidad: 120, tipo_ambiente: "auditorio" },
        { id: 5, trainingcenter_id: 1, nombre: "Taller de Robótica", capacidad: 18, tipo_ambiente: "taller" },
    ],

    equipment: [
        { id: 1, environment_id: 1, name: "Proyector interactivo", brand: "Epson", equipment_type: "audiovisual" },
        { id: 2, environment_id: 2, name: "Computador de escritorio", brand: "HP", equipment_type: "computo" },
        { id: 3, environment_id: 3, name: "Microscopio binocular", brand: "Olympus", equipment_type: "laboratorio" },
        { id: 4, environment_id: 4, name: "Sistema de sonido portátil", brand: "JBL", equipment_type: "audiovisual" },
        { id: 5, environment_id: 5, name: "Impresora 3D", brand: "Creality", equipment_type: "herramienta" },
        { id: 6, environment_id: 2, name: "Portátil", brand: "Lenovo", equipment_type: "computo" },
    ],

    assignments: [
        { id: 1, equipment_id: 6, apprentice_id: 1, fecha_asignacion: "2026-09-01", fecha_devolucion: null, estado: "asignado" },
        { id: 2, equipment_id: 2, apprentice_id: 3, fecha_asignacion: "2026-08-10", fecha_devolucion: "2026-08-24", estado: "devuelto" },
    ],

    offers: [
        { id: 1, admin_id: 1, program_id: 1, fecha_lanzamiento: "2026-09-01", fecha_convocatoria: "2026-09-15", fecha_fin_convocatoria: "2026-10-15", fecha_primera_prueba: "2026-10-22", fecha_segunda_prueba: "2026-10-29", fecha_seleccionados: "2026-11-10", capacidad: 30, imagen: null },
        { id: 2, admin_id: 1, program_id: 2, fecha_lanzamiento: "2026-09-10", fecha_convocatoria: "2026-09-20", fecha_fin_convocatoria: "2026-10-20", fecha_primera_prueba: "2026-10-27", fecha_segunda_prueba: null, fecha_seleccionados: "2026-11-15", capacidad: 25, imagen: null },
        { id: 3, admin_id: 1, program_id: 4, fecha_lanzamiento: "2026-06-01", fecha_convocatoria: "2026-06-15", fecha_fin_convocatoria: "2026-07-15", fecha_primera_prueba: "2026-07-22", fecha_segunda_prueba: null, fecha_seleccionados: "2026-08-01", capacidad: 35, imagen: null },
    ],

    registrations: [
        { id: 1, aspirant_id: 1, offer_id: 1, status: "pendiente", fecha_inscripcion: "2026-09-16 10:12:00" },
        { id: 2, aspirant_id: 2, offer_id: 1, status: "preseleccionado", fecha_inscripcion: "2026-09-18 15:40:00" },
        { id: 3, aspirant_id: 2, offer_id: 2, status: "pendiente", fecha_inscripcion: "2026-09-21 09:05:00" },
    ],

    news: [
        { id: 1, admin_id: 1, trainingcenter_id: 1, titulo: "Abiertas las inscripciones para ADSO", descripcion: "La convocatoria para el tecnólogo en Análisis y Desarrollo de Software estará abierta hasta el 15 de octubre.", imagen: null, estado: "publicada" },
        { id: 2, admin_id: 1, trainingcenter_id: 2, titulo: "Feria de empleabilidad para egresados", descripcion: "Empresas de la región recibirán hojas de vida en el auditorio principal.", imagen: null, estado: "publicada" },
        { id: 3, admin_id: 1, trainingcenter_id: 1, titulo: "Actualización del reglamento del aprendiz", descripcion: "Resumen de los cambios aprobados por el comité académico.", imagen: null, estado: "borrador" },
        { id: 4, admin_id: 1, trainingcenter_id: 3, titulo: "Jornada de siembra en la granja", descripcion: "Actividad práctica abierta a todas las fichas del área agropecuaria.", imagen: null, estado: "archivada" },
    ],
};
