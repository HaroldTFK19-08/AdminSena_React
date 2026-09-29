import { ROLES } from "../../shared/constants/enums";

/** Ruta de inicio según el rol del usuario (users.rol). */
export const ROLE_HOME = {
    [ROLES.ADMIN]: "/admin",
    [ROLES.INSTRUCTOR]: "/instructor",
    [ROLES.APRENDIZ]: "/aprendiz",
    [ROLES.ASPIRANTE]: "/aspirante",
};

export const homeFor = (user) => ROLE_HOME[user?.rol] ?? "/";
