export default function InterruptorConfiguracion({ etiqueta, descripcion, activo, onCambiar }) {
    return (
        <div className="flex items-center justify-between gap-4 py-2">
            <div>
                <p className="text-sm font-semibold text-slate-700">{etiqueta}</p>
                {descripcion && <p className="text-xs text-slate-400">{descripcion}</p>}
            </div>
            <button
                type="button"
                onClick={onCambiar}
                className={`w-12 h-7 rounded-full relative transition-colors shrink-0 ${activo ? "bg-[#8AFD5D]" : "bg-slate-200"}`}
            >
                <span
                    className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${activo ? "translate-x-6" : "translate-x-1"}`}
                />
            </button>
        </div>
    );
}
