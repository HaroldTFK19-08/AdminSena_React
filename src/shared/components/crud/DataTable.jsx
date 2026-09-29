import { useMemo, useState } from "react";
import IconButton from "../ui/IconButton";
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
        <div className="rounded-3xl border border-slate-200/70 bg-white overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="relative w-full sm:w-96">
                    <span className="sr-only">Buscar {resource.plural}</span>
                    <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder={`Buscar ${resource.plural.toLowerCase()}...`}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:bg-white focus:border-sena-navy focus:outline-none"
                    />
                </label>
                <p className="text-sm text-slate-500">
                    <strong className="text-sena-navy tabular-nums">{filtered.length}</strong> {filtered.length === 1 ? "registro" : "registros"}
                </p>
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
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-xs font-bold text-slate-500 border-b border-slate-100">
                            <tr>
                                {columns.map((c) => (
                                    <th key={c.name} scope="col" className="px-4 py-3 whitespace-nowrap">
                                        {c.label}
                                    </th>
                                ))}
                                {hasActions && (
                                    <th scope="col" className="px-4 py-3 text-center">
                                        Acciones
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {visible.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50/70">
                                    {columns.map((c, i) => (
                                        <td key={c.name} className={`px-4 py-3 ${i === 0 ? "font-semibold text-slate-800" : ""}`}>
                                            {renderValue(c, row, lookup)}
                                        </td>
                                    ))}
                                    {hasActions && (
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-center gap-2">
                                                {onView && <IconButton icon="bi-eye-fill" label="Ver detalle" onClick={() => onView(row)} />}
                                                {onEdit && <IconButton icon="bi-pencil-fill" label="Editar" tone="warning" onClick={() => onEdit(row)} />}
                                                {onDelete && <IconButton icon="bi-trash-fill" label="Eliminar" tone="danger" onClick={() => onDelete(row)} />}
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
                <nav aria-label="Paginación" className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 text-sm">
                    <span className="text-slate-500">
                        Página {currentPage} de {totalPages}
                    </span>
                    <div className="flex gap-2">
                        <IconButton icon="bi-chevron-left" label="Página anterior" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} />
                        <IconButton icon="bi-chevron-right" label="Página siguiente" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)} />
                    </div>
                </nav>
            )}
        </div>
    );
}
