import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "../../features/auth/components/ProtectedRoute";
import { Spinner } from "../../shared/components/ui/Feedback";
import { ROLES } from "../../shared/constants/enums";

// Carga diferida: cada módulo se descarga solo cuando se visita.
const Inicio = lazy(() => import("../../features/auth/pages/Inicio"));
const Login = lazy(() => import("../../features/auth/pages/Login"));
const Registro = lazy(() => import("../../features/auth/pages/Registro"));
const PanelPendiente = lazy(() => import("../../features/auth/pages/PanelPendiente"));

const Dashboard = lazy(() => import("../../features/dashboard/pages/DashboardPage"));
const Perfil = lazy(() => import("../../features/perfil/pages/PerfilPage"));
const Reportes = lazy(() => import("../../features/reportes/pages/ReportesPage"));
const Configuracion = lazy(() => import("../../features/configuracion/pages/ConfiguracionPage"));

// Personas
const Usuarios = lazy(() => import("../../features/usuarios/pages/UsuariosPage"));
const Administradores = lazy(() => import("../../features/administradores/pages/AdministradoresPage"));
const Instructores = lazy(() => import("../../features/instructores/pages/InstructoresPage"));
const Aprendices = lazy(() => import("../../features/aprendices/pages/AprendicesPage"));
const Aspirantes = lazy(() => import("../../features/aspirantes/pages/AspirantesPage"));

// Estructura académica
const Centros = lazy(() => import("../../features/centros/pages/CentrosPage"));
const Areas = lazy(() => import("../../features/areas/pages/AreasPage"));
const Programas = lazy(() => import("../../features/programas/pages/ProgramasPage"));
const Competencias = lazy(() => import("../../features/competencias/pages/CompetenciasPage"));
const Fichas = lazy(() => import("../../features/fichas/pages/FichasPage"));

// Seguimiento
const FichasInstructor = lazy(() => import("../../features/fichas/pages/FichasInstructorPage"));
const CompetenciasInstructor = lazy(() => import("../../features/competencias/pages/CompetenciasInstructorPage"));
const Resultados = lazy(() => import("../../features/resultados/pages/ResultadosPage"));

// Infraestructura
const Ambientes = lazy(() => import("../../features/ambientes/pages/AmbientesPage"));
const Equipos = lazy(() => import("../../features/equipos/pages/EquiposPage"));
const Asignaciones = lazy(() => import("../../features/asignaciones/pages/AsignacionesPage"));

// Convocatorias
const Ofertas = lazy(() => import("../../features/ofertas/pages/OfertasPage"));
const Inscripciones = lazy(() => import("../../features/inscripciones/pages/InscripcionesPage"));
const Noticias = lazy(() => import("../../features/noticias/pages/NoticiasPage"));

/** Rutas del panel: path relativo a /admin -> página. */
const ADMIN_ROUTES = [
    ["perfil", Perfil],
    ["usuarios", Usuarios],
    ["administradores", Administradores],
    ["instructores", Instructores],
    ["aprendices", Aprendices],
    ["aspirantes", Aspirantes],
    ["centros", Centros],
    ["areas", Areas],
    ["programas", Programas],
    ["competencias", Competencias],
    ["fichas", Fichas],
    ["fichas-instructores", FichasInstructor],
    ["competencias-instructores", CompetenciasInstructor],
    ["resultados", Resultados],
    ["ambientes", Ambientes],
    ["equipos", Equipos],
    ["asignaciones", Asignaciones],
    ["ofertas", Ofertas],
    ["inscripciones", Inscripciones],
    ["noticias", Noticias],
    ["reportes", Reportes],
    ["configuracion", Configuracion],
];

export default function AppRoutes() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {/* Públicas */}
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registro />} />

                {/* Panel administrativo: requiere sesión con rol admin */}
                <Route element={<ProtectedRoute roles={[ROLES.ADMIN]} />}>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        {ADMIN_ROUTES.map(([path, Page]) => (
                            <Route key={path} path={path} element={<Page />} />
                        ))}
                        <Route path="*" element={<Navigate to="/admin" replace />} />
                    </Route>
                </Route>

                {/* Paneles de otros roles (pendientes de construir) */}
                <Route element={<ProtectedRoute roles={[ROLES.INSTRUCTOR, ROLES.APRENDIZ, ROLES.ASPIRANTE]} />}>
                    <Route path="/instructor/*" element={<PanelPendiente />} />
                    <Route path="/aprendiz/*" element={<PanelPendiente />} />
                    <Route path="/aspirante/*" element={<PanelPendiente />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
}
