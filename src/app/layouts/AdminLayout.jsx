import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
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
        <div className="flex h-screen w-full overflow-hidden bg-[#F2F7F8]">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} mobileOpen={mobileOpen} onCloseMobile={() => setMenuAbiertoEn(null)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar onOpenMenu={() => setMenuAbiertoEn(pathname)} />
                <main className="admin-scroll flex-1 overflow-y-auto">
                    <div className="mx-auto w-full max-w-[1600px] px-4 py-5 pb-24 sm:px-6 sm:py-7 sm:pb-24 md:px-8 md:py-8 md:pb-24 lg:px-8 lg:pb-8">
                        <div key={pathname} className="page-enter">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
            <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[#D8E6EB] bg-white/95 px-3 py-2 shadow-[0_-8px_24px_rgba(15,40,53,0.12)] backdrop-blur-xl lg:hidden" aria-label="Navegación rápida">
                <div className="flex snap-x gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {[
                        { path: "/admin", label: "Inicio", icon: "bi-house-fill", end: true },
                        { path: "/admin/centros", label: "Centros", icon: "bi-building-fill" },
                        { path: "/admin/programas", label: "Programas", icon: "bi-mortarboard-fill" },
                        { path: "/admin/usuarios", label: "Usuarios", icon: "bi-person-gear" },
                        { path: "/admin/ofertas", label: "Ofertas", icon: "bi-megaphone-fill" },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex min-w-[76px] snap-start flex-col items-center gap-1 rounded-xl px-2 py-2 text-center text-[10px] font-bold transition ${
                                    isActive ? "bg-[#EAF6F4] text-[#0E6B54]" : "text-[#5F7785] hover:bg-[#F1F8F7] hover:text-[#0A2334]"
                                }`
                            }
                        >
                            <i className={`bi ${item.icon} text-base`} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </div>
    );
}
