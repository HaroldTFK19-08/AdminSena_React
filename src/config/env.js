/**
 * Configuración de entorno centralizada.
 * Nunca leas import.meta.env directamente en los componentes: usa este módulo.
 */
const raw = import.meta.env;

export const env = Object.freeze({
    apiUrl: (raw.VITE_API_URL || "http://localhost:8000/api").replace(/\/+$/, ""),
    useMocks: String(raw.VITE_USE_MOCKS ?? "true").toLowerCase() === "true",
    apiTimeout: Number(raw.VITE_API_TIMEOUT || 15000),
    isDev: Boolean(raw.DEV),
});
