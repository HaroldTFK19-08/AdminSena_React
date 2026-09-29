export default function SeccionConfiguracion({ titulo, icono, children }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
                <div className="w-9 h-9 rounded-lg bg-[#8AFD5D]/15 text-[#081B2B] flex items-center justify-center">
                    <i className={`bi ${icono}`} />
                </div>
                <h2 className="font-bold text-[#081B2B]">{titulo}</h2>
            </div>
            <div className="p-5 space-y-4">
                {children}
            </div>
        </div>
    );
}
