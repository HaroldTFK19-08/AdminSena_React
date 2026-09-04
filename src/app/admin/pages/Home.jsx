import AsideAdmin from "../../../layouts/admin/Aside";
import BienvenidoAdmin from "../../../components/admin/Bienvenido";
import StatsAdmin from "../../../components/admin/Estadisticas";
import QuickActions from "../../../components/admin/AccionesRapidas";
import RecentActivity from "../../../components/admin/ActividadesRecientes";
import TopBar from "../../../layouts/admin/Header";

function SectionHeader({ titulo, descripcion, accion }) {
    return (
        <div className="flex items-center justify-between gap-4 mb-4">
            <div>
                <h2 className="text-lg font-bold text-[#071D2B]">{titulo}</h2>
                {descripcion && (
                    <p className="text-sm text-slate-500 mt-1">{descripcion}</p>
                )}
            </div>
            {accion}
        </div>
    );
}

export default function HomeAdmin() {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <AsideAdmin />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBar/>
                <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
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
                                <RecentActivity />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}