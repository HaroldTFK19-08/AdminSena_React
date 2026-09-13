import AsideAprendiz from "../../../layouts/aprendiz/Aside"
import TopBarAprendiz from "../../../layouts/aprendiz/Header"
import BienvenidaAprendiz from "../components/Bienvenido"
import StatsAprendiz from "../components/EstadisticasAprendiz"
import QuickActionsAprendiz from "../components/AccionesRapidas"
import RecentActivityAprendiz from "../components/ActividadesRecientes"

function SectionHeader({ titulo, descripcion, accion }) {
    return (
        <div className="flex items-center justify-between gap-4 mb-4 ml-5">
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

export default function HomeAprendiz(){
    return(
        <>
            <div className="flex min-h-screen bg-[#F8FAFC]">
                <AsideAprendiz/>
                <main className="flex-1 min-w-0 overflow-y-auto">
                    <TopBarAprendiz/>
                    <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                        <BienvenidaAprendiz/>
                        <section className="mt-5">
                            <SectionHeader
                                titulo="Resumen general"
                                descripcion="Información general del sistema."
                            />
                            <StatsAprendiz/>
                        </section>
                        <section className="mt-5">
                            <SectionHeader
                                titulo="Gestión"
                                descripcion="Accesos directos y movimientos recientes del sistema."
                            />
                            <div className="grid grid-cols-1 2xl:grid-cols-[1.15fr_0.85fr] gap-6">
                                <QuickActionsAprendiz/>
                                <RecentActivityAprendiz/>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}