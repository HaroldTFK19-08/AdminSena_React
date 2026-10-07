import { http, unwrap } from "../../../shared/api/httpClient";
import { ENDPOINTS } from "../../../shared/api/endpoints";

/**
 * Normaliza la respuesta de login/registro.
 * Acepta { token, user }, { access_token, user } o { data: { token, user } } (Sanctum / Passport / JWT).
 */
function normalizeSession(payload) {
    const body = unwrap(payload) ?? {};
    return {
        token: body.token ?? body.access_token ?? payload?.token ?? null,
        user: body.user ?? payload?.user ?? null,
    };
}

export const authService = {
    async login({ email, password }) {
        return normalizeSession(await http.post(ENDPOINTS.auth.login, { email, password }));
    },

    /** Crea una cuenta en `users`. */
    async register(data) {
        return normalizeSession(await http.post(ENDPOINTS.auth.register, data));
    },

    async logout() {
        try {
            await http.post(ENDPOINTS.auth.logout);
        } catch {
            /* la sesión local se cierra igual */
        }
    },

    async me() {
        return unwrap(await http.get(ENDPOINTS.auth.me));
    },

    async updateProfile(data) {
        return unwrap(await http.put(ENDPOINTS.auth.profile, data));
    },
};
