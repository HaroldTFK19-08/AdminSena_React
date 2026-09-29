/**
 * Error normalizado de la API.
 * - status: código HTTP (0 si no hubo respuesta: red caída / timeout).
 * - errors: errores por campo, formato Laravel { campo: ["mensaje"] } (HTTP 422).
 */
export class ApiError extends Error {
    constructor(message, { status = 0, data = null, errors = null } = {}) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.data = data;
        this.errors = errors;
    }

    get isValidation() {
        return this.status === 422;
    }

    get isUnauthorized() {
        return this.status === 401;
    }

    get isNetwork() {
        return this.status === 0;
    }
}

const DEFAULT_MESSAGES = {
    0: "No fue posible conectar con el servidor. Verifica tu conexión.",
    400: "La solicitud no es válida.",
    401: "Tu sesión expiró. Inicia sesión de nuevo.",
    403: "No tienes permisos para realizar esta acción.",
    404: "El recurso solicitado no existe.",
    409: "El registro entra en conflicto con otro existente.",
    422: "Revisa los datos del formulario.",
    500: "Ocurrió un error en el servidor.",
};

export function defaultMessageFor(status) {
    return DEFAULT_MESSAGES[status] || DEFAULT_MESSAGES[status >= 500 ? 500 : 400];
}
