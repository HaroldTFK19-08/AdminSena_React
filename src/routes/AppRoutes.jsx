import { Routes, Route } from "react-router-dom"
import Inicio from "../app/auth/pages/Inicio"
import Login from "../app/auth/pages/Login"
import Registro from "../app/auth/pages/Registro"
import InformacionAdmin from "../app/admin/pages/Informacion"
import InformacionAprendiz from "../app/aprendices/pages/Informacion"
import InformacionInstructor from "../app/instructores/pages/Informacion"
import HomeAdmin from "../app/admin/pages/Home"
import HomeAprendiz from "../app/aprendices/pages/Home"
import HomeInstructor from "../app/instructores/pages/Home"
import PerfilAdmin from "../app/admin/pages/Perfil"
import PerfilAprendiz from "../app/aprendices/pages/Perfil"
import PerfilInstructor from "../app/instructores/pages/Perfil"

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
                <Route path="/aprendiz" element={<HomeAprendiz/>}/>
                <Route path="/aprendiz/perfil" element={<PerfilAprendiz/>}/>
                <Route path="/instructor" element={<HomeInstructor/>}/>
                <Route path="/instructor/perfil" element={<PerfilInstructor/>}/>
            </Routes>
        </>
    )
}
export default AppRoutes