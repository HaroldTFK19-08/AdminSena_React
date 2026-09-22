import { Link } from "react-router-dom";
import Logo from "../../../../assets/icons/auth/logoSena.svg";

export default function HeaderRegistro() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#081B28]/80 backdrop-blur-md border-b border-white/5">
            <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src={Logo}
                        alt="Logo SENA"
                        className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg font-extrabold text-white tracking-wider uppercase leading-tight">
                            ADMIN <span className="text-[#8AFD5D]">SENA</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                            Portal Institucional
                        </span>
                    </div>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#39A900]/40 transition-all duration-200 group"
                >
                    <svg
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8AFD5D] transition-colors"
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
                    <span>Volver al Inicio</span>
                </Link>
            </div>
        </header>
    );
}