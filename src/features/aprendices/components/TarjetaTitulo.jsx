export default function TarjetaTitulo({ accion }) {
    return (
        <div className="bg-[#081B2B] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
            
            {/* Adorno de fondo ambiental */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#8AFD5D]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Información Principal */}
            <div className="relative z-10 space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#8AFD5D] text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/10">
                    <i className="bi bi-people-fill text-sm" />
                    <span>Módulo de Gestión</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
                    Aprendices <span className="text-[#8AFD5D]">SENA</span>
                </h1>

                <p className="text-slate-300 text-sm leading-relaxed">
                    Administra la información de los aprendices matriculados, consulta su estado de formación, ficha asignada y datos de contacto.
                </p>
            </div>

            {/* Zona del Botón de Acción / Métricas Rápidas */}
            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
                {accion && (
                    <div className="shrink-0">
                        {accion}
                    </div>
                )}
            </div>

        </div>
    );
}