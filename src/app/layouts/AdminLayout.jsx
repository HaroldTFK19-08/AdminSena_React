import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { tituloDeRuta } from "../navigation";

/**
 * Layout del panel administrativo.
 * Se monta UNA sola vez como ruta padre; las páginas se renderizan en <Outlet />
 * (antes cada página envolvía su contenido en LayoutAdmin y el menú se re-montaba al navegar).
 */
export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    // El menú móvil queda abierto solo en la ruta donde se abrió: al navegar se cierra solo.
    const [menuAbiertoEn, setMenuAbiertoEn] = useState(null);
    const mobileOpen = menuAbiertoEn === pathname;
    const titulo = tituloDeRuta(pathname);

    useEffect(() => {
        document.title = `${titulo} · Admin SENA`;
    }, [titulo]);

    return (
        <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} mobileOpen={mobileOpen} onCloseMobile={() => setMenuAbiertoEn(null)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar titulo={titulo} onOpenMenu={() => setMenuAbiertoEn(pathname)} />
                <main className="flex-1 overflow-y-auto">
                    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
