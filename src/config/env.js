const raw = import.meta.env;

export const env = Object.freeze({
    apiUrl: (raw.VITE_API_URL || "http://adminsena.com").replace(/\/+$/, ""),
    useMocks: String(raw.VITE_USE_MOCKS ?? "false").toLowerCase() === "true",
    apiTimeout: Number(raw.VITE_API_TIMEOUT || 15000),
    isDev: Boolean(raw.DEV),
});