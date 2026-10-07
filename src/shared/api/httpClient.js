import { env } from "../../config/env";
import { tokenStorage } from "./tokenStorage";
import { ApiError, defaultMessageFor } from "./ApiError";

const API_BASE_URL = `${env.apiUrl}/v1`;

/** Evento global que se dispara cuando el backend responde 401. */
export const UNAUTHORIZED_EVENT = "adminsena:unauthorized";

function buildQuery(params) {
    if (!params) return "";
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") return;
        if (Array.isArray(value)) value.forEach((v) => search.append(`${key}[]`, v));
        else search.append(key, value);
    });
    const qs = search.toString();
    return qs ? `?${qs}` : "";
}

async function parseBody(response) {
    if (response.status === 204) return null;
    const type = response.headers.get("content-type") || "";
    if (type.includes("application/json")) return response.json();
    const text = await response.text();
    return text || null;
}

async function realRequest(method, path, { params, body, headers = {}, signal } = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), env.apiTimeout);
    if (signal) signal.addEventListener("abort", () => controller.abort(), { once: true });

    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    let httpMethod = method;

    // Laravel no procesa multipart en PUT/PATCH: se envía POST con _method.
    if (isFormData && (method === "PUT" || method === "PATCH")) {
        body.append("_method", method);
        httpMethod = "POST";
    }

    const token = tokenStorage.getToken();
    const finalHeaders = {
        Accept: "application/json",
        ...(isFormData || body === undefined ? {} : { "Content-Type": "application/json" }),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
    };

    let response;
    try {
        response = await fetch(`${API_BASE_URL}${path}${buildQuery(params)}`, {
            method: httpMethod,
            headers: finalHeaders,
            body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body),
            signal: controller.signal,
        });
    } catch (error) {
        const aborted = error?.name === "AbortError";
        throw new ApiError(aborted ? "La solicitud tardó demasiado en responder." : defaultMessageFor(0), {
            status: 0,
        });
    } finally {
        clearTimeout(timeout);
    }

    const data = await parseBody(response);

    if (!response.ok) {
        if (response.status === 401) {
            tokenStorage.clear();
            window.dispatchEvent(new CustomEvent(UNAUTHORIZED_EVENT));
        }
        const message = (data && typeof data === "object" && data.message) || defaultMessageFor(response.status);
        throw new ApiError(message, {
            status: response.status,
            data,
            errors: data && typeof data === "object" ? data.errors ?? null : null,
        });
    }

    return data;
}

async function request(method, path, options = {}) {
    if (env.useMocks) {
        // Carga diferida: en producción con VITE_USE_MOCKS=false los mocks no se descargan.
        const { mockRequest } = await import("../../mocks/mockServer");
        return mockRequest(method, path, options);
    }
    return realRequest(method, path, options);
}

/**
 * Cliente HTTP único de la aplicación.
 * Todas las llamadas al backend pasan por aquí (token, errores, timeout, mocks).
 */
export const http = {
    get: (path, options) => request("GET", path, options),
    post: (path, body, options = {}) => request("POST", path, { ...options, body }),
    put: (path, body, options = {}) => request("PUT", path, { ...options, body }),
    patch: (path, body, options = {}) => request("PATCH", path, { ...options, body }),
    delete: (path, options) => request("DELETE", path, options),
};

/** Laravel API Resources envuelven en { data }. Soporta ambas formas. */
export function unwrap(payload) {
    if (payload && typeof payload === "object" && !Array.isArray(payload) && "data" in payload) {
        return payload.data;
    }
    return payload;
}
