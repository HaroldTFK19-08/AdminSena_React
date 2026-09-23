export default function TarjetaTituloInstructores() {
    return (
        <div className="bg-[#081B2B] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-white/10">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#8AFD5D]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#8AFD5D] text-xs font-semibold uppercase tracking-wider border border-white/10">
                    <i className="bi bi-person-workspace text-sm" />
                    <span>Módulo de Consulta</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    Instructores <span className="text-[#8AFD5D]">SENA</span>
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Directorio del equipo ejecutor de formación. Consulta la asignación de centros, correos y áreas técnicas.
                </p>
            </div>
        </div>
    );
}