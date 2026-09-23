export default function VerArea({ abrir, cerrar, area }) {
    if (!abrir || !area) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="font-extrabold text-[#081B2B] text-lg">Detalles del Área</h3>
                    <button onClick={cerrar} className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><i className="bi bi-x-lg" /></button>
                </div>
                <div className="space-y-3 text-sm">
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Código</span><p className="font-mono font-bold text-[#081B2B]">{area.codigo}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Nombre</span><p className="font-semibold text-slate-800">{area.nombre}</p></div>
                </div>
                <div className="flex justify-end pt-2">
                    <button onClick={cerrar} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold">Cerrar</button>
                </div>
            </div>
        </div>
    );
}