export default function CrearPrograma({ abrir = true, cerrar }) {
    if (!abrir) return null;

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
                            <h3 className="font-bold text-[#081B2B] text-base">Crear Nuevo Programa</h3>
                            <p className="text-xs text-slate-400">Registra una oferta académica</p>
                        </div>
                    </div>
                    <button onClick={cerrar} type="button" className="p-2 text-slate-400 hover:text-slate-600 rounded-xl">
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Formulario */}
                <form className="p-6 pt-0 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5 sm:col-span-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Código</label>
                            <input
                                type="text"
                                placeholder="Ej: 228106"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none"
                            />
                        </div>
                        <div className="space-y-1.5 sm:col-span-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nombre Programa</label>
                            <input
                                type="text"
                                placeholder="Ej: Análisis y Desarrollo de Software"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nivel</label>
                            <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none cursor-pointer">
                                <option value="Tecnólogo">Tecnólogo</option>
                                <option value="Técnico">Técnico</option>
                                <option value="Especialización">Especialización</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Duración</label>
                            <input
                                type="text"
                                placeholder="Ej: 27 meses"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Área</label>
                        <input
                            type="text"
                            placeholder="Ej: Análisis y Desarrollo de Software"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Centro de Formación</label>
                        <input
                            type="text"
                            placeholder="Ej: Centro de Teleinformática y Producción Industrial"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none"
                        />
                    </div>

                    {/* Botones */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                        <button type="button" onClick={cerrar} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors">
                            Cancelar
                        </button>
                        <button type="button" onClick={cerrar} className="px-5 py-2.5 rounded-xl bg-[#081B2B] hover:bg-[#0c273d] text-[#8AFD5D] text-sm font-bold shadow-md transition-all">
                            Guardar Programa
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}