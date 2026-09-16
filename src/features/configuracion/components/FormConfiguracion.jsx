export default function FormConfiguracion() {
    return (
        <form
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8"
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <h2 className="text-lg font-bold text-[#071D2B]">Preferencias generales</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Ajustes de visualización y notificaciones del panel.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">
                        Nombre del sistema
                    </label>
                    <input
                        type="text"
                        defaultValue="Admin SENA"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-2 focus:ring-[#8AFD5D]/20"
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2">
                        Regional
                    </label>
                    <input
                        type="text"
                        defaultValue="Cauca"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-2 focus:ring-[#8AFD5D]/20"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">
                        Correo de notificaciones
                    </label>
                    <input
                        type="email"
                        defaultValue="admin@sena.edu.co"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-2 focus:ring-[#8AFD5D]/20"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm text-slate-700">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#39A900]" />
                    Recibir alertas de equipos en mantenimiento
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-700">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#39A900]" />
                    Notificar fichas próximas a finalizar
                </label>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#8AFD5D] text-[#071D2B] text-sm font-bold hover:bg-[#9CFF78] transition-colors"
                >
                    <i className="bi bi-check-lg" />
                    Guardar cambios
                </button>
            </div>
        </form>
    );
}
