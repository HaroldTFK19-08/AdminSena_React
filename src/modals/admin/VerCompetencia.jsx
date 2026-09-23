// Modal de solo lectura para desplegar el registro completo
export default function VerCompetencia({ abrir, cerrar, competencia }) {
    if (!abrir || !competencia) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
                
                {/* Encabezado */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-lg font-bold">
                            <i className="bi bi-award-fill" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base leading-tight">Detalles de Competencia</h3>
                            <p className="text-xs text-slate-400">Consulta de información</p>
                        </div>
                    </div>
                    <button onClick={cerrar} className="p-2 text-slate-400 hover:text-slate-600 rounded-xl cursor-pointer">
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Datos en Solo Lectura */}
                <div className="p-6 space-y-4">
                    <div>
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Código</span>
                        <p className="text-slate-800 font-mono font-bold text-base mt-0.5">{competencia.codigo}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Nombre de la Competencia</span>
                        <p className="text-slate-800 font-semibold text-sm mt-0.5 leading-relaxed">{competencia.nombre}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Programa Asociado</span>
                        <p className="text-slate-700 font-medium mt-0.5">{competencia.programa}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Duración</span>
                            <p className="text-slate-700 font-medium mt-0.5">{competencia.horas} horas</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Estado</span>
                            <div className="mt-0.5">
                                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-lg inline-block ${
                                    competencia.estado === "Activa" 
                                        ? "bg-emerald-100 text-emerald-700" 
                                        : "bg-amber-100 text-amber-700"
                                }`}>
                                    {competencia.estado}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cierre */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                    <button 
                        onClick={cerrar} 
                        className="px-5 py-2.5 bg-[#081B2B] text-white rounded-xl text-sm font-semibold cursor-pointer hover:bg-[#0d283d] transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}