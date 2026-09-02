import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

export default function NavBar(){
    const navigate = useNavigate()
    return(
        <>
            <nav className="flex items-center gap-4">
                <ul className="flex justify-center items-center space-x-5">
                    <li><Link onClick={()=>navigate("/login")} className="text-sm font-medium text-slate-200 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">Iniciar Sesion</Link></li>
                    <li><Link onClick={()=>navigate("/register")} className="text-sm font-semibold text-[#001E30] bg-[#8AFD5D] hover:bg-[#72db4c] px-5 py-2.5 rounded-lg shadow-md hover:shadow-[#8AFD5D]/20 transition-all duration-200">Registrarse</Link></li>
                </ul>
            </nav>
        </>
    )
}