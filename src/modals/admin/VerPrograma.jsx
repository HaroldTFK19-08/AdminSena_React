export default function VerPrograma({ abrir = true, cerrar, programa }) {
    if (!abrir) return null;

    // Datos por defecto solo para previsualización
    const datos = programa || {
        codigo: "228106",
        nombre: "Análisis y Desarrollo de Software (ADSO)",
        nivel: "Tecnólogo",
        duracion: "27 meses",
        area: "Análisis y Desarrollo de Software",
        centro: "Centro de Teleinformática y Producción Industrial - Popayán",
        estado: "Activo"
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-lg font-bold">
                            <i className="bi bi-mortarboard-fill" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base">Detalles del Programa</h3>
                            <p className="text-xs text-slate-400">Información registrada</p>
                        </div>
                    </div>
                    <button onClick={cerrar} type="button" className="p-2 text-slate-400 hover:text-slate-600 rounded-xl">
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Contenido Visual */}
                <div className="p-6 pt-0 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Código</span>
                            <p className="text-sm font-semibold text-slate-800 mt-0.5 font-mono">{datos.codigo}</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Estado</span>
                            <div className="mt-0.5">
                                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-lg inline-block ${
                                    datos.estado === "Activo" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                }`}>
                                    {datos.estado}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Nombre del Programa</span>
                        <p className="text-base font-bold text-[#081B2B] mt-0.5">{datos.nombre}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Nivel</span>
                            <p className="text-sm font-semibold text-slate-700 mt-0.5">{datos.nivel}</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Duración</span>
                            <p className="text-sm font-semibold text-slate-700 mt-0.5">{datos.duracion}</p>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Área</span>
                        <p className="text-sm font-semibold text-slate-700 mt-0.5">{datos.area}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Centro de Formación</span>
                        <p className="text-sm font-semibold text-slate-700 mt-0.5">{datos.centro}</p>
                    </div>

                    {/* Botón Cierre */}
                    <div className="flex justify-end pt-4 border-t border-slate-100">
                        <button 
                            type="button" 
                            onClick={cerrar} 
                            className="px-5 py-2.5 bg-[#081B2B] text-white rounded-xl text-sm font-semibold hover:bg-[#0c273d] transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}