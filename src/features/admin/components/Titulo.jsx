export default function TituloCompletarPerfil() {
    return (
        <div className="mt-5 mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#8AFD5D]/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8AFD5D]">
                    Configuración inicial
                </span>
                <span className="h-px w-8 bg-[#8AFD5D]/40" />
            </div>
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Completa tu{" "}
                <span className="text-[#8AFD5D]">
                    perfil
                </span>
            </h1>
            <p className="mt-4 text-center text-sm leading-6 text-slate-400 max-w-lg mx-auto">
                Queremos conocerte un poco mejor. Completa tu información
                para personalizar tu experiencia en{" "}
                <span className="text-slate-300 font-medium">
                    ADMIN SENA
                </span>.
            </p>
        </div>
    );
}

