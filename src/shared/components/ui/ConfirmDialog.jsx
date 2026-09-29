import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({ open, title = "¿Estás seguro?", message, confirmText = "Eliminar", onConfirm, onClose }) {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        try {
            await onConfirm?.();
            onClose?.();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={title}
            icon="bi-exclamation-triangle"
            size="sm"
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" icon="bi-trash" loading={loading} onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </>
            }
        >
            <p className="text-sm text-slate-600 leading-relaxed">{message}</p>
        </Modal>
    );
}
