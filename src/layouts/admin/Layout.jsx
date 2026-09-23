import { useState } from "react";
import AsideAdmin from "./Aside";
import HeaderAdmin from "./Header";

/**
 * Layout Maestro del Administrador
 * Define la arquitectura visual de todo el panel administrativo.
 * Estructura: [ Aside (Lateral) ] [ Main Container [ Header (Top) / Content (Center) ] ]
 */
export default function LayoutAdmin({ children, titulo = "Panel Administrativo" }) {
    // Estado global para controlar si el menú lateral está expandido o contraído
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans">
            
            {/* 1. MENÚ LATERAL: Posición fija a la izquierda */}
            <AsideAdmin 
                collapsed={collapsed} 
                setCollapsed={setCollapsed} 
            />
            {/* 2. CONTENEDOR PRINCIPAL: Ocupa el resto del espacio */}
            <div className="flex-1 flex flex-col min-w-0 h-full relative">
                {/* 3. BARRA SUPERIOR: Siempre arriba, fija */}
                <HeaderAdmin titulo={titulo} />
                {/* 4. ÁREA DE CONTENIDO: Scroll independiente */}
                <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
                    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-[1600px] mx-auto">
                        {/* Aquí se renderizan las páginas (Aprendices, Instructores, etc.) */}
                        <div className="animate-fadeIn">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
