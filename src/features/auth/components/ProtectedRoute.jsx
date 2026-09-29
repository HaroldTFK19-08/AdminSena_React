import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { homeFor } from "../roleHome";

/**
 * Protege rutas por sesión y, opcionalmente, por rol.
 *   <Route element={<ProtectedRoute roles={["admin"]} />}> ... </Route>
 */
export default function ProtectedRoute({ roles }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
    if (roles && !roles.includes(user.rol)) return <Navigate to={homeFor(user)} replace />;
    return <Outlet />;
}
