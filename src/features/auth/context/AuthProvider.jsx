import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext";
import { authService } from "../api/auth.service";
import { tokenStorage } from "../../../shared/api/tokenStorage";
import { UNAUTHORIZED_EVENT } from "../../../shared/api/httpClient";

/**
 * Sesión global: usuario autenticado, login, registro y logout.
 * Si el backend responde 401 en cualquier petición, la sesión se cierra automáticamente.
 */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => (tokenStorage.getToken() ? tokenStorage.getUser() : null));

    // Refresca el usuario desde el backend al cargar la app (si hay token).
    useEffect(() => {
        if (!tokenStorage.getToken()) return;
        authService
            .me()
            .then((fresh) => {
                if (!fresh) return;
                setUser(fresh);
                tokenStorage.saveUser(fresh);
            })
            .catch(() => {
                /* el 401 lo maneja el listener */
            });
    }, []);

    useEffect(() => {
        const onUnauthorized = () => setUser(null);
        window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
        return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
    }, []);

    const login = useCallback(async (credentials, remember = false) => {
        const session = await authService.login(credentials);
        tokenStorage.save(session, remember);
        setUser(session.user);
        return session.user;
    }, []);

    const register = useCallback(async (data) => {
        const session = await authService.register(data);
        if (session.token) {
            tokenStorage.save(session, false);
            setUser(session.user);
        }
        return session.user;
    }, []);

    const logout = useCallback(async () => {
        await authService.logout();
        tokenStorage.clear();
        setUser(null);
    }, []);

    /** Actualiza los datos del usuario en sesión (p. ej. tras editar el perfil). */
    const updateUser = useCallback((changes) => {
        setUser((prev) => {
            const next = { ...prev, ...changes };
            tokenStorage.saveUser(next);
            return next;
        });
    }, []);

    const value = useMemo(
        () => ({ user, isAuthenticated: Boolean(user), login, register, logout, updateUser }),
        [user, login, register, logout, updateUser],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
