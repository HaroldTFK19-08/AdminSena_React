// Componente de encabezado estático de la vista
export default function TarjetaTitulo({titulo}) {
    return (
        <div className="bg-[#081B2B] text-white p-6 rounded-3xl shadow-xl flex items-center justify-between border border-white/10">
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8AFD5D]/20 text-[#8AFD5D] text-xs font-bold uppercase tracking-wider">
                        Módulo
                    </span>
                </div>
                <h1 className="text-2xl font-black tracking-tight">{titulo}</h1>
                <p className="text-slate-400 text-xs">
                    Consulta el catálogo general de competencias asociadas a los programas de formación SENA.
                </p>
            </div>
            
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-[#8AFD5D] text-2xl">
                <i className="bi bi-award-fill" />
            </div>
        </div>
    );
}