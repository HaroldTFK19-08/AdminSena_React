import { Routes, Route } from "react-router-dom"
import Inicio from "../features/auth/pages/Inicio"
import Login from "../features/auth/pages/Login"
import Registro from "../features/auth/pages/Registro"
import InformacionAdmin from "../features/admin/pages/Informacion"
import InformacionAprendiz from "../features/aprendices/pages/Informacion"
import InformacionInstructor from "../features/instructores/pages/Informacion"
import HomeAdmin from "../features/admin/pages/Home"
import HomeAprendiz from "../features/aprendices/pages/Home"
import HomeInstructor from "../features/instructores/pages/Home"
import PerfilAdmin from "../features/admin/pages/Perfil"
import PerfilAprendiz from "../features/aprendices/pages/Perfil"
import PerfilInstructor from "../features/instructores/pages/Perfil"
import IndexAreas from "../features/areas/pages/Index"
import IndexCentros from "../features/centros/pages/Index"
import IndexComputadores from "../features/computadores/pages/Index"
import IndexCursos from "../features/cursos/pages/Index"
import InstructoresAdmin from "../features/admin/pages/Instructores"
import AprendicesAdmin from "../features/admin/pages/Aprendices"
import IndexReportes from "../features/reportes/pages/Index"
import IndexConfiguracion from "../features/configuracion/pages/Index"

const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/register" element={<Registro/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin/completarPerfil" element={<InformacionAdmin/>} />
                <Route path="/aprendiz/completarPerfil" element={<InformacionAprendiz/>} />
                <Route path="/instructor/completarPerfil" element={<InformacionInstructor/>} />
                <Route path="/admin" element={<HomeAdmin/>}/>
                <Route path="/admin/perfil" element={<PerfilAdmin/>}/>
                <Route path="/admin/areas" element={<IndexAreas/>}/>
                <Route path="/admin/centros" element={<IndexCentros/>}/>
                <Route path="/admin/equipos" element={<IndexComputadores/>}/>
                <Route path="/admin/programas" element={<IndexCursos/>}/>
                <Route path="/admin/instructores" element={<InstructoresAdmin/>}/>
                <Route path="/admin/aprendices" element={<AprendicesAdmin/>}/>
                <Route path="/admin/reportes" element={<IndexReportes/>}/>
                <Route path="/admin/configuracion" element={<IndexConfiguracion/>}/>
                <Route path="/aprendiz" element={<HomeAprendiz/>}/>
                <Route path="/aprendiz/perfil" element={<PerfilAprendiz/>}/>
                <Route path="/instructor" element={<HomeInstructor/>}/>
                <Route path="/instructor/perfil" element={<PerfilInstructor/>}/>
            </Routes>
        </>
    )
}
export default AppRoutes