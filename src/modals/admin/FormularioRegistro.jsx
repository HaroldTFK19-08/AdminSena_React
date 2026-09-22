export default function FormularioRegistro({
    abierto,
    editando,
    titulo,
    botonNuevo,
    columnas,
    registros,
    datos,
    cambiarDato,
    guardar,
    cerrar,
}) {
    // Si el modal no está marcado como abierto, no renderizamos nada
    if (!abierto) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071D2B]/55 px-4 backdrop-blur-sm"
            onClick={cerrar}
        >
            <form
                onSubmit={guardar}
                className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(evento) => evento.stopPropagation()}
            >
                {/* --- ENCABEZADO DEL FORMULARIO --- */}
                <div className="flex items-center justify-between bg-[#071D2B] px-6 py-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#8AFD5D]">
                            {editando ? "Editar registro" : "Nuevo registro"}
                        </p>
                        <h2 className="mt-1 text-xl font-bold text-white">
                            {editando ? `Editar ${titulo.toLowerCase()}` : botonNuevo}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={cerrar}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </div>

                {/* --- CUERPO DEL FORMULARIO (Campos Dinámicos) --- */}
                <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
                    {columnas.map((columna) => {
                        // Si la columna es de tipo 'estado', creamos una lista de opciones basadas en los registros existentes
                        const opcionesEstado = columna.tipo === "estado"
                            ? [...new Set(registros.map((registro) => registro[columna.clave]).filter(Boolean))]
                            : [];

                        return (
                            <label key={columna.clave} className="text-sm font-semibold text-slate-700">
                                {columna.etiqueta}
                                {columna.tipo === "estado" ? (
                                    <select
                                        required
                                        value={datos[columna.clave] ?? ""}
                                        onChange={(evento) => cambiarDato(columna.clave, evento.target.value)}
                                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-[#5FBF3A] focus:ring-2 focus:ring-[#8AFD5D]/20"
                                    >
                                        <option value="">Selecciona un estado</option>
                                        {opcionesEstado.map((opcion) => (
                                            <option key={opcion} value={opcion}>{opcion}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        required
                                        type="text"
                                        value={datos[columna.clave] ?? ""}
                                        onChange={(evento) => cambiarDato(columna.clave, evento.target.value)}
                                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-[#5FBF3A] focus:ring-2 focus:ring-[#8AFD5D]/20"
                                    />
                                )}
                            </label>
                        );
                    })}
                </div>

                {/* --- PIE DEL FORMULARIO (Botones de Acción) --- */}
                <div className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4">
                    <button
                        type="button"
                        onClick={cerrar}
                        className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-lg bg-[#8AFD5D] px-4 py-2.5 text-sm font-bold text-[#071D2B] transition hover:bg-[#9CFF78]"
                    >
                        {editando ? "Guardar cambios" : "Guardar registro"}
                    </button>
                </div>
            </form>
        </div>
    );
}
