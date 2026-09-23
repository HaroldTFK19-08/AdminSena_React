export default function TarjetaEquipos({ 
    titulo = "Gestión de Equipos", 
    descripcion = "Administra los equipos de los ambientes, para un mejor control del uso de estos equipos",
    icono = "bi-cpu-fill",
    accion
}) {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-[2rem] text-slate-800 shadow-sm border border-slate-100 relative overflow-hidden">
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Título e Icono */}
                <div className="flex items-start sm:items-center gap-4">
                    {/* Fondo claro suave con acentos de color */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#8AFD5D]/20 text-[#081B2B] border border-[#8AFD5D]/30 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                        <i className={`bi ${icono}`} />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-[#081B2B] tracking-tight flex items-center gap-3">
                            {titulo}
                        </h1>
                        <p className="text-slate-500 mt-1 max-w-2xl text-sm sm:text-base leading-relaxed font-medium">
                            {descripcion}
                        </p>
                    </div>
                </div>

                {/* Área para Botón de Acción (Opcional) */}
                {accion && (
                    <div className="shrink-0">
                        {accion}
                    </div>
                )}
            </div>

            {/* Resplandor de fondo ultra suave */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8AFD5D]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#081B2B]/5 rounded-full blur-2xl -ml-8 -mb-8 pointer-events-none" />
        </div>
    );
}