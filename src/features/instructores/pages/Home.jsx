import TopBarInstructor from "../../../layouts/instructor/TopBar";
import AsideInstructor from "../../../layouts/instructor/Aside";

import BienvenidaInstructor from "../components/Bienvenida";
import StatsInstructor from "../components/Estadisticas";
import QuickActionsInstructor from "../components/AccesoRapido";
import RecentActivityInstructor from "../components/ActividadesRecientes";

export default function HomeInstructor() {
    return (
        <div className="h-screen bg-slate-50 flex overflow-hidden">
            <AsideInstructor />

            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBarInstructor
                    seccion="Inicio"
                    titulo="Panel del instructor"
                />

                <div className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    <div className="space-y-8">
                        <BienvenidaInstructor nombre="Carlos" />

                        <StatsInstructor />
                        <div className="grid grid-cols-1 2xl:grid-cols-[1.15fr_0.85fr] gap-6">
                            <QuickActionsInstructor />
                            <RecentActivityInstructor />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}