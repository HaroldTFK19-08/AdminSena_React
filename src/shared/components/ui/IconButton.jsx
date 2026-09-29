const TONES = {
    neutral: "bg-slate-100 text-slate-600 hover:bg-sena-navy hover:text-white",
    warning: "bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white",
    danger: "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white",
};

export default function IconButton({ icon, label, tone = "neutral", ...props }) {
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            className={`p-2 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sena-navy ${TONES[tone]}`}
            {...props}
        >
            <i className={`bi ${icon}`} />
        </button>
    );
}
