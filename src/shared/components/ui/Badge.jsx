const TONES = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
    info: "bg-sky-50 text-sky-700 ring-sky-600/15",
    warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
    danger: "bg-red-50 text-red-700 ring-red-600/15",
    neutral: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

/** Etiqueta de estado. Reemplaza al antiguo EtiquetaEstado. */
export default function Badge({ children, tone = "neutral" }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ring-1 ring-inset ${TONES[tone] ?? TONES.neutral}`}>
            {children}
        </span>
    );
}
