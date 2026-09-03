import Logo from "../../../assets/icons/auth/logoSena.svg"

export default function Footer(){
    return(
        <>
            <footer className="w-full bg-[#001E30] text-slate-300 border-t border-white/5 select-none">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex flex-col gap-4">
                        <a href="/" className="flex items-center gap-3">
                            <img
                                src={Logo}
                                alt="Logo SENA"
                                className="h-10 w-auto"/>
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold text-white tracking-wider uppercase leading-none">
                                    ADMIN <span className="text-[#8AFD5D]">SENA</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                                    Portal Institucional
                                </span>
                            </div>
                        </a>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                            Servicio Nacional de Aprendizaje. Plataforma para la gestión integral de áreas, centros, cursos, instructores y aprendices.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#8AFD5D] pl-2">
                            Navegación
                        </h3>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <a
                                    href="{{ route('areas.index') }}"
                                    className="hover:text-[#8AFD5D] transition-colors flex items-center gap-1.5">
                                    <span>›</span>
                                    Áreas de Formación
                                </a>
                            </li>
                            <li>
                                <a
                                    href="{{ route('trainingcenters.index') }}"
                                    className="hover:text-[#8AFD5D] transition-colors flex items-center gap-1.5">
                                    <span>›</span>
                                    Centros de Formación
                                </a>
                            </li>
                            <li>
                                <a
                                    href="{{ route('courses.index') }}"
                                    className="hover:text-[#8AFD5D] transition-colors flex items-center gap-1.5">
                                    <span>›</span>
                                    Oferta de Cursos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="{{ route('teachers.index') }}"
                                    className="hover:text-[#8AFD5D] transition-colors flex items-center gap-1.5">
                                    <span>›</span>
                                    Instructores
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#8AFD5D] pl-2">
                            Atención al Ciudadano
                        </h3>
                        <ul className="space-y-3 text-xs">
                            <li className="flex items-start gap-2.5">
                                <svg
                                    className="w-4 h-4 text-[#8AFD5D] shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>
                                    Dirección General: Calle 57 No. 8 - 69, Bogotá D.C.
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <svg
                                    className="w-4 h-4 text-[#8AFD5D] shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span>
                                    Línea Gratuita: 01 8000 910270
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <svg
                                    class="w-4 h-4 text-[#8AFD5D] shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>
                                    soporte@sena.edu.co
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div>
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#8AFD5D] pl-2">
                                Sistema
                            </h3>
                            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A2A3F] border border-white/10 text-xs text-slate-200">
                                <span class="w-2 h-2 rounded-full bg-[#8AFD5D] animate-pulse"></span>
                                <span>
                                    Servidores operando al 100%
                                </span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <a
                                href="{{ route('login') }}"
                                class="inline-block text-xs font-medium text-[#001E30] bg-[#8AFD5D] hover:bg-[#72db4c] px-4 py-2 rounded-lg transition-colors font-semibold shadow">
                                Acceso Administrativo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0A2A3F]/50 border-t border-white/5 py-4 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                        <p>
                            © {new Date().getFullYear()}{" "}
                            <span className="text-white font-medium">SENA</span>.
                            Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-[#8AFD5D] transition-colors">
                                Políticas de Privacidad
                            </a>
                            <span>•</span>
                            <a href="#" className="hover:text-[#8AFD5D] transition-colors">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}