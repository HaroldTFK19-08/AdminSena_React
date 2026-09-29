/** Estados de carga, vacío y error reutilizables. */

export function Spinner({ label = "Cargando..." }) {
    return (
        <div role="status" className="flex items-center justify-center gap-3 py-12 text-slate-400 text-sm">
            <i className="bi bi-arrow-repeat animate-spin text-lg" />
            {label}
        </div>
    );
}

export function EmptyState({ icon = "bi-inbox", title = "Sin registros", message }) {
    return (
        <div className="py-14 text-center space-y-2">
            <i className={`bi ${icon} text-3xl text-slate-300`} />
            <p className="font-bold text-slate-600">{title}</p>
            {message && <p className="text-sm text-slate-400">{message}</p>}
        </div>
    );
}

export function ErrorState({ error, onRetry }) {
    return (
        <div role="alert" className="m-4 p-4 rounded-2xl bg-red-50 border border-red-100 text-sm text-red-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="flex items-center gap-2">
                <i className="bi bi-exclamation-octagon" />
                {error?.message || "No se pudo cargar la información."}
            </span>
            {onRetry && (
                <button type="button" onClick={onRetry} className="font-bold underline underline-offset-2 cursor-pointer">
                    Reintentar
                </button>
            )}
        </div>
    );
}
