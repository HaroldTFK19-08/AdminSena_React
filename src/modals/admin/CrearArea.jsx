export default function CrearArea({ abrir, cerrar }) {
    if (!abrir) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="font-extrabold text-[#081B2B] text-lg">Nueva Área</h3>
                    <button onClick={cerrar} className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><i className="bi bi-x-lg" /></button>
                </div>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); cerrar(); }}>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 mb-1 block">Código</label>
                        <input type="text" placeholder="Ej: AD-01" className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#081B2B] focus:outline-none" required />
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 mb-1 block">Nombre del Área</label>
                        <input type="text" placeholder="Ej: Teleinformática" className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#081B2B] focus:outline-none" required />
                    </div>
                    <div className="flex justify-end gap-2 pt-3">
                        <button type="button" onClick={cerrar} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold">Cancelar</button>
                        <button type="submit" className="px-4 py-2 rounded-xl bg-[#8AFD5D] text-[#081B2B] font-bold shadow-md shadow-[#8AFD5D]/20">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}