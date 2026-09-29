const VARIANTS = {
    primary: "bg-sena-green text-sena-navy hover:bg-sena-green-strong shadow-md shadow-sena-green/20",
    dark: "bg-sena-navy text-sena-green hover:bg-sena-navy-soft",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    ghost: "text-slate-500 hover:bg-slate-100 hover:text-slate-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
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
            className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sena-navy disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
            {...props}
        >
            {loading ? <i className="bi bi-arrow-repeat animate-spin" /> : icon && <i className={`bi ${icon}`} />}
            {children}
        </button>
    );
}
