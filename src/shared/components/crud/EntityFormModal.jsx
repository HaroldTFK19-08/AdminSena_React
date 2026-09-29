import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import FieldControl from "./FieldControl";
import { initialValues, serialize } from "./formLogic";

/**
 * Formulario genérico de crear/editar (reemplaza CrearX.jsx / EditarX.jsx).
 * Muestra los errores de validación 422 del backend en cada campo.
 */
export default function EntityFormModal({ resource, open, record, onClose, onSubmit, catalogs, lookup, loadingRefs }) {
    if (!open) return null;
    // `key` fuerza a reiniciar el formulario cuando cambia el registro.
    return (
        <FormBody
            key={record?.id ?? "nuevo"}
            resource={resource}
            record={record}
            onClose={onClose}
            onSubmit={onSubmit}
            catalogs={catalogs}
            lookup={lookup}
            loadingRefs={loadingRefs}
        />
    );
}

function FormBody({ resource, record, onClose, onSubmit, catalogs, lookup, loadingRefs }) {
    const isCreate = !record;
    const fields = useMemo(() => resource.fields.filter((f) => f.form && !(f.createOnly && !isCreate)), [resource, isCreate]);
    const [generalError, setGeneralError] = useState(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: initialValues(fields, record) });

    const submit = async (values) => {
        setGeneralError(null);
        try {
            await onSubmit(serialize(fields, values, isCreate));
        } catch (error) {
            if (error?.errors) {
                Object.entries(error.errors).forEach(([name, messages]) => {
                    setError(name, { type: "server", message: [].concat(messages)[0] });
                });
            }
            setGeneralError(error?.message || "No se pudo guardar el registro.");
        }
    };

    return (
        <Modal
            open
            onClose={onClose}
            size={fields.length > 6 ? "lg" : "md"}
            icon={isCreate ? "bi-plus-lg" : "bi-pencil-square"}
            title={isCreate ? `Nuevo ${resource.singular.toLowerCase()}` : `Editar ${resource.singular.toLowerCase()}`}
            subtitle={isCreate ? "Completa los campos obligatorios (*)" : resource.display(record, lookup)}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button type="submit" form="entity-form" variant="dark" icon="bi-check2" loading={isSubmitting}>
                        {isCreate ? "Guardar" : "Guardar cambios"}
                    </Button>
                </>
            }
        >
            <form id="entity-form" noValidate onSubmit={handleSubmit(submit)} className="space-y-5">
                {generalError && (
                    <div role="alert" className="p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-700 flex gap-2">
                        <i className="bi bi-exclamation-circle mt-0.5" />
                        {generalError}
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fields.map((field) => (
                        <FieldControl
                            key={field.name}
                            field={field}
                            register={register}
                            error={errors[field.name]}
                            isCreate={isCreate}
                            catalogs={catalogs}
                            lookup={lookup}
                            loadingRefs={loadingRefs}
                        />
                    ))}
                </div>
            </form>
        </Modal>
    );
}
