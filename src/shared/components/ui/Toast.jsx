import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ToastContext = createContext(null);

const STYLES = {
    success: { icon: "bi-check-circle-fill", cls: "border-emerald-200 text-emerald-800" },
    error: { icon: "bi-x-octagon-fill", cls: "border-red-200 text-red-700" },
    info: { icon: "bi-info-circle-fill", cls: "border-sky-200 text-sky-800" },
};

/** Notificaciones breves tras crear / editar / eliminar. */
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const dismiss = useCallback((id) => setToasts((prev) => prev.filter((t) => t.id !== id)), []);

    const push = useCallback(
        (type, message) => {
            const id = Math.random().toString(36).slice(2);
            setToasts((prev) => [...prev, { id, type, message }]);
            setTimeout(() => dismiss(id), 4000);
        },
        [dismiss],
    );

    const api = useMemo(
        () => ({
            success: (m) => push("success", m),
            error: (m) => push("error", m),
            info: (m) => push("info", m),
        }),
        [push],
    );

    return (
        <ToastContext.Provider value={api}>
            {children}
            <div aria-live="polite" className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2 w-[min(22rem,calc(100vw-2.5rem))]">
                {toasts.map((t) => (
                    <div key={t.id} className={`flex items-start gap-3 p-4 rounded-2xl bg-white border shadow-lg text-sm font-medium animate-pop ${STYLES[t.type].cls}`}>
                        <i className={`bi ${STYLES[t.type].icon} mt-0.5`} />
                        <span className="flex-1">{t.message}</span>
                        <button type="button" onClick={() => dismiss(t.id)} aria-label="Cerrar notificación" className="opacity-60 hover:opacity-100 cursor-pointer">
                            <i className="bi bi-x" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast debe usarse dentro de <ToastProvider>");
    return ctx;
}
