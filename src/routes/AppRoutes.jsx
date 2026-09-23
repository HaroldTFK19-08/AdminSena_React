import { Routes, Route } from "react-router-dom";
import Inicio from "../features/auth/pages/Inicio";
import Login from "../features/auth/pages/Login";
import Registro from "../features/auth/pages/Registro";
import HomeAdmin from "../features/admin/pages/Home";
import PerfilAdmin from "../features/admin/pages/Perfil";
import CentrosAdmin from "../features/centros/pages/Centros";
import EquiposAdmin from "../features/equipos/pages/Equipos";
import AprendicesAdmin from "../features/aprendices/pages/Aprendices";
import CompetenciasAdmin from "../features/cursos/pages/Competencias";
import InstructoresAdmin from "../features/instructores/pages/Instructores";
import AreasAdmin from "../features/areas/pages/Areas";
import ProgramasAdmin from "../features/programas/pages/Programas";
/**
 * Configuración Central de Rutas
 * Define la relación entre la URL del navegador y el Componente que se debe mostrar.
 */
export default function AppRoutes() {
    return (
        <Routes>
            {/* Rutas de Autenticación */}
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registro />} />
            
            {/* Rutas del Administrador */}
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/perfil" element={<PerfilAdmin />} />
            <Route path="/admin/centros" element={<CentrosAdmin />} />
            <Route path="/admin/equipos" element={<EquiposAdmin />} />
            <Route path="/admin/competencias" element={<CompetenciasAdmin />} />
            <Route path="/admin/aprendices" element={<AprendicesAdmin />} />
            <Route path="/admin/instructores" element={<InstructoresAdmin />} />
            <Route path="/admin/areas" element={<AreasAdmin />} />
            <Route path="/admin/programas" element={<ProgramasAdmin />} />
            {/* Redirección por defecto: Si la ruta no existe, vuelve al Inicio */}
            <Route path="*" element={<Inicio />} />
        </Routes>
    );
}
