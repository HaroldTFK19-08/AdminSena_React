
import NavBar from './Navbar'
import Logo from "../../../../assets/icons/auth/logoSena.svg"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header className="w-full bg-[#001E30] border-b border-white/5 shadow-lg sticky top-0 z-50 select-none">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/inicio" className="h-10 w-auto transition-transform group-hover:scale-105 flex items-center justify-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-10 w-10" />
                    <div className="flex flex-col">
                        <span className="text-xl font-extrabold text-white tracking-wider uppercase leading-none">
                            ADMIN <span className="text-[#8AFD5D]">SENA</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                            Portal Institucional
                        </span>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <NavBar />
                </div>
            </div>
        </header>
    )
}