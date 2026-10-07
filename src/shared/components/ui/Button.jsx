const VARIANTS = {
    primary: "bg-sena-green text-sena-navy shadow-[0_6px_18px_-8px_rgba(138,253,93,0.6)] hover:bg-[#a0ff79] hover:shadow-[0_9px_24px_-8px_rgba(138,253,93,0.65)]",
    dark: "bg-sena-navy text-sena-green shadow-sm hover:bg-sena-navy-soft",
    secondary: "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50",
    ghost: "text-slate-500 hover:bg-slate-100 hover:text-slate-800",
    danger: "bg-red-600 text-white shadow-sm hover:bg-red-700",
};

const SIZES = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm",
};

/** Botón base del sistema. `loading` deshabilita y muestra spinner. */
export default function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    loading = false,
    className = "",
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            disabled={loading || props.disabled}
            className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sena-navy active:translate-y-0 disabled:transform-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
            {...props}
        >
            {loading ? <i className="bi bi-arrow-repeat animate-spin" /> : icon && <i className={`bi ${icon}`} />}
            {children}
        </button>
    );
}
