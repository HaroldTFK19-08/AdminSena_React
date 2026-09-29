import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../features/auth/context/AuthProvider";
import { ToastProvider } from "../shared/components/ui/Toast";
import AppRoutes from "./router/AppRoutes";

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ToastProvider>
                    <AppRoutes />
                </ToastProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}
