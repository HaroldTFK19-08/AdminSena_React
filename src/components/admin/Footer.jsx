
import Logo from "../../assets/icons/auth/logoSena.svg";

export default function FooterCompletarPerfil() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#081B28]">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={Logo}
                            alt="Logo SENA"
                            className="w-7 h-7"
                        />

                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            ADMIN{" "}
                            <span className="text-[#8AFD5D]">
                                SENA
                            </span>
                        </span>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        Completa tu información para continuar
                    </p>

                    <p className="text-[11px] text-slate-500">
                        © {new Date().getFullYear()} ADMIN SENA
                    </p>
                </div>
            </div>
        </footer>
    );
}

