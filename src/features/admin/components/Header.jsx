import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/auth/logoSena.svg";

export default function HeaderCompletarPerfil() {
    return (
        <header class="w-full bg-[#001E30] border-b border-white/5 shadow-lg sticky top-0 z-50 select-none">
            <div className="w-full max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <img
                        src={Logo}
                        alt="Logo SENA"
                        className="h-10 w-10"
                    />
                    <span className="text-lg font-extrabold text-white tracking-wider uppercase">
                        ADMIN{" "}
                        <span className="text-[#8AFD5D]">
                            SENA
                        </span>
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <div className="hidden sm:block text-right">
                        <p className="text-xs font-semibold text-white">
                            Configuración inicial
                        </p>
                        <p className="text-[11px] text-slate-400">
                            Completa tu perfil
                        </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#0A2A3F] border border-white/10 flex items-center justify-center">
                        <svg
                            className="w-4 h-4 text-[#8AFD5D]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </header>
    );
}

