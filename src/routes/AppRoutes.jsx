import { Routes, Route } from "react-router-dom"
import Inicio from "../app/auth/pages/Inicio"
import Login from "../app/auth/pages/Login"
import Registro from "../app/auth/pages/Registro"

const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/register" element={<Registro/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </>
    )
}
export default AppRoutes