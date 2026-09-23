export default function VerCentro({ abrir, cerrar, centro }) {
    if (!abrir || !centro) return null;

    const esActivo = centro.estado === "Activo";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col transition-all transform scale-100">
                
                {/* Encabezado con estética SENA */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-xl shadow-md shadow-[#081B2B]/20">
                            <i className="bi bi-building-check" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base leading-tight">
                                Detalles del Centro
                            </h3>
                            <p className="text-xs text-slate-400 font-medium">
                                Información general de la sede
                            </p>
                        </div>
                    </div>

                    <button 
                        onClick={cerrar} 
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Cerrar ventana"
                    >
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Contenido principal en modo lectura */}
                <div className="p-6 space-y-4">
                    
                    {/* Campo: Nombre del Centro */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <i className="bi bi-building text-slate-400" />
                            <span>Nombre del Centro</span>
                        </div>
                        <p className="text-slate-800 font-bold text-base pt-0.5">
                            {centro.nombre}
                        </p>
                    </div>

                    {/* Campos: Ubicación y Dirección en Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <i className="bi bi-geo-alt text-slate-400" />
                                <span>Ubicación</span>
                            </div>
                            <p className="text-slate-700 font-semibold text-sm">
                                {centro.ubicacion || "No especificada"}
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <i className="bi bi-[#081B2B] bi-signpost-split text-slate-400" />
                                <span>Dirección</span>
                            </div>
                            <p className="text-slate-700 font-semibold text-sm">
                                {centro.direccion || "No especificada"}
                            </p>
                        </div>
                    </div>

                    {/* Campo: Estado del Centro */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <i className="bi bi-activity text-slate-400" />
                            <span>Estado</span>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            esActivo 
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200" 
                            : "bg-amber-100 text-amber-800 border border-amber-200"
                        }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${esActivo ? "bg-emerald-500" : "bg-amber-500"}`} />
                            {centro.estado}
                        </span>
                    </div>

                </div>

                {/* Footer / Botón de Cierre */}
                <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                    <button 
                        onClick={cerrar} 
                        className="px-6 py-2.5 bg-[#081B2B] hover:bg-[#0d2a42] text-white rounded-xl text-sm font-bold shadow-md shadow-[#081B2B]/10 transition-all active:scale-95 cursor-pointer"
                    >
                        Entendido
                    </button>
                </div>

            </div>
        </div>
    );
}