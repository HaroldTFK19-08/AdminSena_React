// Modal sencillo solo para mostrar la interfaz
export default function CrearCentro({ abrir, cerrar }) {
    // Si la propiedad 'abrir' es false, no se muestra nada en pantalla
    if (!abrir) {
        return null;
    }
    return (
        /* Fondo oscuro translúcido */
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            {/* Tarjeta del Modal */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden space-y-6">
                {/* Encabezado del Modal */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-lg font-bold">
                            <i className="bi bi-building-add" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base">Crear Nuevo Centro</h3>
                            <p className="text-xs text-slate-400">Registra un nuevo centro de formación SENA</p>
                        </div>
                    </div>
                    {/* Botón para cerrar */}
                    <button 
                        onClick={cerrar}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>
                {/* Formulario Visual */}
                <form className="p-6 pt-0 space-y-4">
                    {/* Campo: Nombre */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Nombre del Centro
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: Centro de Comercio y Servicios"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                        />
                    </div>
                    {/* Campos: Ubicación y Dirección */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Ubicación
                            </label>
                            <input
                                type="text"
                                placeholder="Ej: Popayán, Cauca"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Dirección
                            </label>
                            <input
                                type="text"
                                placeholder="Ej: Calle 4 # 2-80"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                    {/* Campo: Estado */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Estado
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all cursor-pointer">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    {/* Botones de Cancelar / Guardar */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={cerrar}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={cerrar}
                            className="px-5 py-2.5 rounded-xl bg-[#081B2B] hover:bg-[#0c273d] text-[#8AFD5D] text-sm font-bold shadow-md transition-all active:scale-95"
                        >
                            Guardar Centro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}