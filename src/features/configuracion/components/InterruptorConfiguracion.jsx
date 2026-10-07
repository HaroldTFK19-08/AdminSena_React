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
                role="switch"
                aria-checked={activo}
                aria-label={etiqueta}
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0E6B54]/20 ${activo ? "bg-[#8AFD5D]" : "bg-slate-200"}`}
            >
                <span
                    className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${activo ? "translate-x-5" : "translate-x-0"}`}
                />
            </button>
        </div>
    );
}
