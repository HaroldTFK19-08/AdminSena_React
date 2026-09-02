import { Routes, Route } from "react-router-dom"
import Inicio from "../app/auth/pages/Inicio"


const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>} />
            </Routes>
        </>
    )
}
export default AppRoutes