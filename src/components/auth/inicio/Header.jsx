
import NavBar from './Navbar'
import Logo from "../../../assets/icons/auth/logoSena.svg"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header class="w-full bg-[#001E30] border-b border-white/5 shadow-lg sticky top-0 z-50 select-none">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/inicio" class="h-10 w-auto transition-transform group-hover:scale-105 flex items-center justify-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-10 w-10" />
                    <div class="flex flex-col">
                        <span class="text-xl font-extrabold text-white tracking-wider uppercase leading-none">
                            ADMIN <span class="text-[#8AFD5D]">SENA</span>
                        </span>
                        <span class="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                            Portal Institucional
                        </span>
                    </div>
                </Link>
                <div class="flex items-center gap-4">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}