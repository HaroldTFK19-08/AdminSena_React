import { Link } from "react-router-dom";
import Logo from "../../../../assets/icons/auth/logoSena.svg";

export default function HeaderLogin(){
    return(
        <>
            <header className="sticky top-0 z-50 w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={Logo} alt="Logo SENA" className="h-10 w-10" />
                    <span className="text-lg font-extrabold text-white tracking-wider uppercase">
                        ADMIN <span className="text-[#8AFD5D]">SENA</span>
                    </span>
                </Link>
                <Link
                    to="/"
                    className="text-xs font-semibold text-slate-300 hover:text-[#8AFD5D] flex items-center gap-2 transition-colors"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Volver al Inicio
                </Link>
            </header>
        </>
    )
}