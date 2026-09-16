import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import BienvenidoAdmin from "../components/Bienvenido";
import StatsAdmin from "../components/Estadisticas";
import QuickActions from "../components/AccionesRapidas";
import RecentActivity from "../components/ActividadesRecientes";
import ModalActividades from "../../../modals/admin/ActividadesRecientes";

function SectionHeader({ titulo, descripcion, accion }) {
    return (
        <div className="flex items-center justify-between gap-4 mb-4">
            <div>
                <h2 className="text-lg font-bold text-[#071D2B]">
                    {titulo}
                </h2>
                {descripcion && (
                    <p className="text-sm text-slate-500 mt-1">
                        {descripcion}
                    </p>
                )}
            </div>
            {accion}
        </div>
    );
}
export default function HomeAdmin() {
    const [modal, setModal] = useState(false);
    return (
        <LayoutAdmin titulo="Panel principal">
            <div className="space-y-8">
                <BienvenidoAdmin />
                <section>
                    <SectionHeader
                        titulo="Resumen general"
                        descripcion="Información general del sistema."
                    />
                    <StatsAdmin />
                </section>
                <section>
                    <SectionHeader
                        titulo="Gestión"
                        descripcion="Accesos directos y movimientos recientes del sistema."
                    />
                    <div className="grid grid-cols-1 2xl:grid-cols-[1.15fr_0.85fr] gap-6">
                        <QuickActions />
                        <RecentActivity abrirActividades={()=>setModal(true)}/>
                    </div>
                </section>
                <ModalActividades
                    abrir={modal}
                    cerrar={() => setModal(false)}
                />
            </div>
        </LayoutAdmin>
    );
}
