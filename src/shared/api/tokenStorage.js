/**
 * Persistencia de la sesión.
 * "Recordarme" guarda en localStorage; si no, en sessionStorage (se borra al cerrar el navegador).
 */
const TOKEN_KEY = "adminsena.token";
const USER_KEY = "adminsena.user";

const stores = () => [window.localStorage, window.sessionStorage];

function read(key) {
    for (const store of stores()) {
        try {
            const value = store.getItem(key);
            if (value !== null) return value;
        } catch {
            /* almacenamiento no disponible */
        }
    }
    return null;
}

export const tokenStorage = {
    getToken() {
        return read(TOKEN_KEY);
    },

    getUser() {
        const raw = read(USER_KEY);
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    },

    save({ token, user }, remember = false) {
        this.clear();
        const store = remember ? window.localStorage : window.sessionStorage;
        try {
            if (token) store.setItem(TOKEN_KEY, token);
            if (user) store.setItem(USER_KEY, JSON.stringify(user));
        } catch {
            /* almacenamiento no disponible */
        }
    },

    saveUser(user) {
        const store = window.localStorage.getItem(TOKEN_KEY) ? window.localStorage : window.sessionStorage;
        try {
            store.setItem(USER_KEY, JSON.stringify(user));
        } catch {
            /* almacenamiento no disponible */
        }
    },

    clear() {
        for (const store of stores()) {
            try {
                store.removeItem(TOKEN_KEY);
                store.removeItem(USER_KEY);
            } catch {
                /* almacenamiento no disponible */
            }
        }
    },
};
