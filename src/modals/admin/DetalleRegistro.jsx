import EstadoBadge from "../../features/admin/components/EstadoBadge";

export default function DetalleRegistro({ fila, columnas, titulo, cerrar }) {
    if (!fila) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071D2B]/55 px-4 backdrop-blur-sm"
            onClick={cerrar}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="detalle-registro-titulo"
                className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(evento) => evento.stopPropagation()}
            >
                <div className="flex items-center justify-between bg-[#071D2B] px-6 py-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#8AFD5D]">
                            Detalle
                        </p>
                        <h2 id="detalle-registro-titulo" className="mt-1 text-xl font-bold text-white">
                            {titulo}
                        </h2>
                    </div>
                    <button
                        type="button"
                        aria-label="Cerrar detalle"
                        onClick={cerrar}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </div>
                <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
                    {columnas.map((columna) => (
                        <div key={columna.clave} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                {columna.etiqueta}
                            </p>
                            <div className="mt-1 text-sm font-semibold text-slate-700">
                                {columna.tipo === "estado" ? (
                                    <EstadoBadge valor={fila[columna.clave]} />
                                ) : (
                                    fila[columna.clave]
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
