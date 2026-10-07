import { useMemo, useState } from "react";
import { EmptyState, ErrorState, Spinner } from "../ui/Feedback";
import { renderValue, textValue } from "./fieldValue";
import { useDebounce } from "../../hooks/useDebounce";
import { normalizarTexto } from "../../utils/format";

const PAGE_SIZE = 10;

/**
 * Tabla genérica basada en la definición del recurso.
 * Búsqueda (incluye nombres de llaves foráneas) + paginación en cliente.
 */
export default function DataTable({ resource, rows, lookup, loading, error, onRetry, onView, onEdit, onDelete }) {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const debounced = useDebounce(query);

    const columns = useMemo(() => resource.fields.filter((f) => f.table), [resource]);
    const searchable = useMemo(() => resource.fields.filter((f) => f.searchable || f.table), [resource]);

    const filtered = useMemo(() => {
        const q = normalizarTexto(debounced);
        if (!q) return rows;
        return rows.filter((row) => searchable.some((f) => normalizarTexto(textValue(f, row, lookup)).includes(q)));
    }, [rows, debounced, searchable, lookup]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    const hasActions = onView || onEdit || onDelete;

    return (
        <section className="overflow-hidden rounded-[26px] border border-[#D8E6EB] bg-[#F7FBFC] p-4 shadow-[0_12px_26px_rgba(15,40,53,0.06)] sm:p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7785]">Listado</p>
                    <h2 className="mt-2 text-xl font-extrabold text-[#0A2334]">{resource.plural}</h2>
                </div>
                <label className="relative w-full sm:w-[22rem]">
                    <span className="sr-only">Buscar {resource.plural}</span>
                    <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78909C]" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder={`Buscar ${resource.plural.toLowerCase()}...`}
                        className="w-full rounded-xl border border-[#D8E6EB] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0A2334] transition-all placeholder:text-[#78909C] focus:border-[#0E6B54] focus:outline-none focus:ring-4 focus:ring-[#0E6B54]/[0.12]"
                    />
                </label>
            </div>

            <div className="mb-4 text-sm text-[#5F7785]">
                <strong className="text-[#0E6B54] tabular-nums">{filtered.length}</strong> {filtered.length === 1 ? "registro" : "registros"}
            </div>

            {error ? (
                <ErrorState error={error} onRetry={onRetry} />
            ) : loading ? (
                <Spinner />
            ) : filtered.length === 0 ? (
                <EmptyState
                    icon={resource.icon}
                    title={query ? "Sin coincidencias" : `Aún no hay ${resource.plural.toLowerCase()}`}
                    message={query ? "Prueba con otro término de búsqueda." : undefined}
                />
            ) : (
                <div className="overflow-x-auto rounded-2xl border border-[#D8E6EB] bg-white">
                    <table className="w-full text-left text-sm text-[#456073]">
                        <thead className="border-b border-[#D8E6EB] bg-white text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#5F7785]">
                            <tr>
                                {columns.map((c) => (
                                    <th key={c.name} scope="col" className="whitespace-nowrap px-5 py-3.5">
                                        {c.label}
                                    </th>
                                ))}
                                {hasActions && (
                                    <th scope="col" className="px-4 py-3.5 text-center">
                                        Acciones
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAF1F3]">
                            {visible.map((row) => (
                                <tr key={row.id} className="transition-colors duration-150 hover:bg-[#F7FBFC]">
                                    {columns.map((c, i) => (
                                        <td key={c.name} className={`px-5 py-3.5 ${i === 0 ? "font-bold text-[#0A2334]" : ""}`}>
                                            {i === 0 ? (
                                                <span className="inline-flex items-center">
                                                    <span aria-hidden="true" className="mr-2.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D8F7CB] font-black text-[#0E6B54]">
                                                        {String(textValue(c, row, lookup) || resource.singular).trim().charAt(0).toUpperCase()}
                                                    </span>
                                                    {renderValue(c, row, lookup)}
                                                </span>
                                            ) : renderValue(c, row, lookup)}
                                        </td>
                                    ))}
                                    {hasActions && (
                                        <td className="px-5 py-3">
                                            <div className="flex justify-end gap-1.5">
                                                {onView && <button type="button" onClick={() => onView(row)} className="rounded-lg border border-[#D8E6EB] bg-white px-2.5 py-1.5 text-xs font-bold text-[#0E6B54] transition-colors hover:bg-[#F1F8F7]">Ver</button>}
                                                {onEdit && <button type="button" onClick={() => onEdit(row)} className="rounded-lg border border-[#D8E6EB] bg-white px-2.5 py-1.5 text-xs font-bold text-[#0E6B54] transition-colors hover:bg-[#F1F8F7]">Editar</button>}
                                                {onDelete && <button type="button" onClick={() => onDelete(row)} className="rounded-lg border border-rose-200 bg-white px-2.5 py-1.5 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50">Eliminar</button>}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {totalPages > 1 && !loading && !error && (
                <nav aria-label="Paginación" className="flex items-center justify-between gap-3 border-t border-[#D8E6EB] px-1 pt-4 text-sm">
                    <span className="text-[#5F7785]">
                        Página {currentPage} de {totalPages}
                    </span>
                    <div className="flex gap-2">
                        <button type="button" aria-label="Página anterior" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="rounded-lg border border-[#D8E6EB] bg-white px-3 py-1.5 text-[#0E6B54] disabled:opacity-40"><i className="bi bi-chevron-left" /></button>
                        <button type="button" aria-label="Página siguiente" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)} className="rounded-lg border border-[#D8E6EB] bg-white px-3 py-1.5 text-[#0E6B54] disabled:opacity-40"><i className="bi bi-chevron-right" /></button>
                    </div>
                </nav>
            )}
        </section>
    );
}
