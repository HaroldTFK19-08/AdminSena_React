import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { renderValue } from "./fieldValue";
import { getResource } from "../../resources/registry";

/** Registros hijos (relaciones 1:N) del registro abierto, p. ej. aprendices de una ficha. */
function RelatedList({ relation, parentId, lookup }) {
    const child = getResource(relation.resource);
    const [state, setState] = useState({ rows: [], loading: true, error: null });

    useEffect(() => {
        let active = true;
        child.service
            .list({ [relation.foreignKey]: parentId })
            // Se filtra también en cliente por si el backend aún no soporta el filtro por query.
            .then((rows) => rows.filter((r) => String(r[relation.foreignKey]) === String(parentId)))
            .then((rows) => active && setState({ rows, loading: false, error: null }))
            .catch((error) => active && setState({ rows: [], loading: false, error }));
        return () => {
            active = false;
        };
    }, [child, relation.foreignKey, parentId]);

    return (
        <section className="space-y-2">
            <h3 className="text-sm font-bold text-sena-navy flex items-center gap-2">
                <i className={`bi ${child.icon} text-slate-400`} />
                {relation.title ?? child.plural}
                {!state.loading && <span className="text-slate-400 font-medium tabular-nums">({state.rows.length})</span>}
            </h3>
            {state.loading ? (
                <p className="text-xs text-slate-400">Cargando...</p>
            ) : state.error ? (
                <p className="text-xs text-red-600">{state.error.message}</p>
            ) : state.rows.length === 0 ? (
                <p className="text-xs text-slate-400">Sin registros asociados.</p>
            ) : (
                <ul className="flex flex-wrap gap-2">
                    {state.rows.slice(0, 30).map((row) => (
                        <li key={row.id} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
                            {(relation.label ?? child.display)(row, lookup)}
                        </li>
                    ))}
                    {state.rows.length > 30 && <li className="px-3 py-1.5 text-xs text-slate-400">y {state.rows.length - 30} más…</li>}
                </ul>
            )}
        </section>
    );
}

export default function EntityDetailModal({ resource, record, open, onClose, onEdit, lookup }) {
    if (!open || !record) return null;
    const fields = resource.fields.filter((f) => f.detail && f.type !== "password");

    return (
        <Modal
            open
            onClose={onClose}
            size="lg"
            icon={resource.icon}
            title={resource.display(record, lookup)}
            subtitle={`${resource.singular} · ID ${record.id}`}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cerrar
                    </Button>
                    {onEdit && (
                        <Button variant="dark" icon="bi-pencil" onClick={() => onEdit(record)}>
                            Editar
                        </Button>
                    )}
                </>
            }
        >
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fields.map((field) => (
                    <div key={field.name} className={`bg-slate-50 p-3 rounded-xl ${field.type === "textarea" || field.wide ? "sm:col-span-2" : ""}`}>
                        <dt className="text-xs font-semibold text-slate-500">{field.label}</dt>
                        <dd className="mt-0.5 text-sm font-medium text-slate-800 break-words">{renderValue(field, record, lookup)}</dd>
                    </div>
                ))}
            </dl>

            {resource.relations.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-5">
                    {resource.relations.map((relation) => (
                        <RelatedList key={relation.resource + relation.foreignKey} relation={relation} parentId={record.id} lookup={lookup} />
                    ))}
                </div>
            )}
        </Modal>
    );
}
