import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/auth/logoSena.svg";

/** Marco visual compartido por Login y Registro (antes duplicado en ambos). */
export default function AuthShell({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#061521] via-[#081B28] to-[#040E17] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#39A900]/15 via-[#0A2A3F]/25 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] bg-[#0A2A3F]/35 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 min-h-screen flex flex-col justify-between">
                <header className="sticky top-0 z-50 w-full bg-[#081B28]/80 backdrop-blur-md border-b border-white/5">
                    <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src={Logo} alt="Logo SENA" className="h-10 w-10 transition-transform duration-200 group-hover:scale-105" />
                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold text-white tracking-wider uppercase leading-tight">
                                    ADMIN <span className="text-[#8AFD5D]">SENA</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Portal Institucional</span>
                            </div>
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                        >
                            <i className="bi bi-arrow-left" />
                            <span>Volver al inicio</span>
                        </Link>
                    </div>
                </header>

                <main className="flex-1 flex items-center justify-center px-4 py-10">{children}</main>

                <footer className="py-4 text-center text-xs text-slate-500">© SENA. Todos los derechos reservados.</footer>
            </div>
        </div>
    );
}
