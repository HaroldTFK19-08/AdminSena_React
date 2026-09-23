// Modal de solo lectura: recibe la visibilidad (abrir), función de cierre (cerrar) y el objeto cargado (aprendiz)
export default function VerAprendiz({ abrir, cerrar, aprendiz }) {
    // Renderizado condicional guard: si el modal está cerrado o no hay un aprendiz seleccionado, no dibuja nada
    if (!abrir || !aprendiz) return null;

    return (
        /* Fondo con desenfoque (backdrop) centrado en pantalla */
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
                
                {/* Encabezado del modal */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-lg font-bold">
                            <i className="bi bi-person-badge-fill" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base leading-tight">Detalles del Aprendiz</h3>
                            <p className="text-xs text-slate-400">Información del estudiante</p>
                        </div>
                    </div>
                    {/* Botón X de cierre */}
                    <button onClick={cerrar} className="p-2 text-slate-400 hover:text-slate-600 rounded-xl cursor-pointer">
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Cuerpo del modal con la información leída desde las propiedades */}
                <div className="p-6 space-y-4">
                    <div>
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Nombre Completo</span>
                        <p className="text-slate-800 font-semibold text-base mt-0.5">{aprendiz.nombre}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Documento</span>
                            <p className="text-slate-700 font-mono font-medium mt-0.5">{aprendiz.documento}</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Ficha</span>
                            <p className="text-slate-700 font-medium mt-0.5">{aprendiz.ficha}</p>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Programa</span>
                        <p className="text-slate-700 font-medium mt-0.5">{aprendiz.programa}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Estado</span>
                        <div className="mt-1">
                            <span className={`px-2.5 py-1 text-xs font-bold rounded-lg inline-block ${
                                aprendiz.estado === "Activo" 
                                    ? "bg-emerald-100 text-emerald-700" 
                                    : aprendiz.estado === "En formación"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-amber-100 text-amber-700"
                            }`}>
                                {aprendiz.estado}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Pie del modal con botón de cierre */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                    <button onClick={cerrar} className="px-5 py-2.5 bg-[#081B2B] text-white rounded-xl text-sm font-semibold cursor-pointer hover:bg-[#0d283d] transition-colors">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}