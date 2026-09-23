export default function EditarCentro({ abrir, cerrar, centro }) {
    if (!abrir || !centro) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
                
                {/* Encabezado */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-xl shadow-md shadow-[#081B2B]/20">
                            <i className="bi bi-pencil-square" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base leading-tight">
                                Editar Centro
                            </h3>
                            <p className="text-xs text-slate-400 font-medium">
                                Formulario de edición de datos
                            </p>
                        </div>
                    </div>

                    <button 
                        onClick={cerrar} 
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                    >
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Vista del Formulario */}
                <div className="p-6 space-y-4">
                    
                    {/* Campo: Nombre */}
                    <div className="space-y-1.5">
                        <label className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                            <i className="bi bi-building text-slate-400" />
                            <span>Nombre del Centro</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={centro.nombre}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:bg-white focus:border-[#081B2B] focus:outline-none transition-all"
                        />
                    </div>

                    {/* Grid: Ubicación y Dirección */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <i className="bi bi-geo-alt text-slate-400" />
                                <span>Ubicación</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={centro.ubicacion}
                                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:bg-white focus:border-[#081B2B] focus:outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <i className="bi bi-signpost-split text-slate-400" />
                                <span>Dirección</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={centro.direccion}
                                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:bg-white focus:border-[#081B2B] focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Campo: Estado */}
                    <div className="space-y-1.5">
                        <label className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                            <i className="bi bi-activity text-slate-400" />
                            <span>Estado</span>
                        </label>
                        <select
                            defaultValue={centro.estado}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:bg-white focus:border-[#081B2B] focus:outline-none transition-all cursor-pointer"
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>

                    {/* Botones de Cierre */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={cerrar}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold transition-all cursor-pointer"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={cerrar}
                            className="px-6 py-2.5 bg-[#8AFD5D] hover:bg-[#72e04d] text-[#081B2B] rounded-xl text-sm font-bold shadow-md shadow-[#8AFD5D]/20 transition-all cursor-pointer flex items-center gap-2"
                        >
                            <i className="bi bi-check-lg text-base" />
                            <span>Guardar Cambios</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}