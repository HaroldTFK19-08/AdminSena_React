export default function TarjetaTituloAreas({ accion }) {
    return (
        <div className="bg-[#081B2B] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#8AFD5D]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#8AFD5D] text-xs font-semibold uppercase tracking-wider border border-white/10">
                    <i className="bi bi-[#8AFD5D] bi-grid-3x3-gap-fill text-sm" />
                    <span>Estructura Académica</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    Áreas de <span className="text-[#8AFD5D]">Formación</span>
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Administra las áreas técnicas del centro, agrupando competencias y líneas tecnológicas institucionales.
                </p>
            </div>
            {accion && <div className="relative z-10 w-full md:w-auto">{accion}</div>}
        </div>
    );
}