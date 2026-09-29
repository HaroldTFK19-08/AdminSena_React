import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

const SIZES = { sm: "max-w-md", md: "max-w-lg", lg: "max-w-2xl", xl: "max-w-4xl" };

/**
 * Modal accesible y reutilizable (reemplaza los ~37 modales duplicados).
 * Cierra con Esc o clic en el fondo; bloquea el scroll de la página.
 */
export default function Modal({ open, onClose, title, subtitle, icon, size = "md", children, footer }) {
    const titleId = useId();
    const panelRef = useRef(null);
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === "Escape" && onCloseRef.current?.();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);
        const firstInput = panelRef.current?.querySelector("input, select, textarea, button:not([data-close])");
        firstInput?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
        >
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className={`bg-white w-full ${SIZES[size]} rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] animate-pop`}
            >
                <header className="flex items-center justify-between gap-4 p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3 min-w-0">
                        {icon && (
                            <div className="w-10 h-10 shrink-0 rounded-xl bg-sena-navy text-sena-green flex items-center justify-center text-lg">
                                <i className={`bi ${icon}`} />
                            </div>
                        )}
                        <div className="min-w-0">
                            <h2 id={titleId} className="font-extrabold text-sena-navy text-base truncate">
                                {title}
                            </h2>
                            {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
                        </div>
                    </div>
                    <button
                        type="button"
                        data-close
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </header>

                <div className="p-6 overflow-y-auto">{children}</div>

                {footer && <footer className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100">{footer}</footer>}
            </div>
        </div>,
        document.body,
    );
}
