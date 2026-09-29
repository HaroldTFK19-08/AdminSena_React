import { useState } from "react";
import PageHeader from "../ui/PageHeader";
import Button from "../ui/Button";
import ConfirmDialog from "../ui/ConfirmDialog";
import { useToast } from "../ui/Toast";
import DataTable from "./DataTable";
import EntityFormModal from "./EntityFormModal";
import EntityDetailModal from "./EntityDetailModal";
import { useResource } from "../../hooks/useResource";
import { useReferenceData } from "../../hooks/useReferenceData";

/**
 * Página CRUD completa generada desde la definición de un recurso.
 * Cada dominio solo declara sus campos; esta página resuelve:
 * listado, búsqueda, ver, crear, editar, eliminar, llaves foráneas y errores.
 *
 * Props opcionales:
 *  - readOnly:    oculta crear/editar/eliminar
 *  - canDelete:   false para ocultar eliminar
 *  - headerExtra: acciones adicionales en el encabezado
 *  - children:    contenido extra debajo de la tabla
 */
export default function CrudPage({ resource, readOnly = false, canDelete = true, headerExtra, children }) {
    const toast = useToast();
    const { items, loading, error, reload, create, update, remove } = useResource(resource);
    const [refVersion, setRefVersion] = useState(0);
    const refs = useReferenceData(resource, refVersion);

    const [modal, setModal] = useState({ type: null, record: null });
    const open = (type, record = null) => setModal({ type, record });
    const close = () => setModal({ type: null, record: null });

    const handleSubmit = async (payload) => {
        if (modal.record) {
            await update(modal.record.id, payload);
            toast.success(`${resource.singular} actualizado correctamente.`);
        } else {
            await create(payload);
            toast.success(`${resource.singular} creado correctamente.`);
        }
        setRefVersion((v) => v + 1);
        close();
    };

    const handleDelete = async () => {
        try {
            await remove(modal.record.id);
            toast.success(`${resource.singular} eliminado.`);
        } catch (err) {
            toast.error(err?.message || "No se pudo eliminar el registro.");
        }
    };

    return (
        <div className="space-y-6">
            <PageHeader
                icon={resource.icon}
                title={resource.plural}
                description={resource.description}
                actions={
                    <>
                        {headerExtra}
                        {!readOnly && (
                            <Button icon="bi-plus-lg" size="lg" onClick={() => open("form")}>
                                Nuevo {resource.singular.toLowerCase()}
                            </Button>
                        )}
                    </>
                }
            />

            {refs.error && (
                <p role="alert" className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3">
                    <i className="bi bi-exclamation-triangle mr-2" />
                    No se pudieron cargar algunos datos relacionados: {refs.error.message}
                </p>
            )}

            <DataTable
                resource={resource}
                rows={items}
                lookup={refs.lookup}
                loading={loading}
                error={error}
                onRetry={reload}
                onView={(row) => open("detail", row)}
                onEdit={readOnly ? undefined : (row) => open("form", row)}
                onDelete={readOnly || !canDelete ? undefined : (row) => open("delete", row)}
            />

            {children}

            <EntityDetailModal
                resource={resource}
                open={modal.type === "detail"}
                record={modal.record}
                lookup={refs.lookup}
                onClose={close}
                onEdit={readOnly ? undefined : (row) => open("form", row)}
            />

            <EntityFormModal
                resource={resource}
                open={modal.type === "form"}
                record={modal.record}
                catalogs={refs.catalogs}
                lookup={refs.lookup}
                loadingRefs={refs.loading}
                onClose={close}
                onSubmit={handleSubmit}
            />

            <ConfirmDialog
                open={modal.type === "delete"}
                title={`Eliminar ${resource.singular.toLowerCase()}`}
                message={
                    modal.record
                        ? `Se eliminará "${resource.display(modal.record, refs.lookup)}". Si tiene registros relacionados, el servidor puede rechazar la operación.`
                        : ""
                }
                onConfirm={handleDelete}
                onClose={close}
            />
        </div>
    );
}
