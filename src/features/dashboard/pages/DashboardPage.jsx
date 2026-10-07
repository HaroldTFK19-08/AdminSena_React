import { Link } from "react-router-dom";
import StatCard from "../../../shared/components/ui/StatCard";
import { ErrorState } from "../../../shared/components/ui/Feedback";
import { useConteos } from "../hooks/useConteos";
import { useAuth } from "../../auth/hooks/useAuth";

const ACCESOS = [
    { label: "Centros", title: "Administrar centros", description: "Gestión de sedes, ubicaciones y configuración institucional.", path: "/admin/centros", icon: "bi-building-fill" },
    { label: "Áreas", title: "Áreas académicas", description: "Organiza las áreas vinculadas a cada centro.", path: "/admin/areas", icon: "bi-diagram-3-fill" },
    { label: "Ambientes", title: "Ambientes de formación", description: "Administra capacidad, tipo y centro asignado.", path: "/admin/ambientes", icon: "bi-door-open-fill" },
    { label: "Equipos", title: "Inventario de equipos", description: "Consulta y administra equipos por ambiente.", path: "/admin/equipos", icon: "bi-cpu-fill" },
];

const INDICADORES = [
    { label: "Cobertura", value: 86 },
    { label: "Asignaciones", value: 72 },
    { label: "Procesos completados", value: 94 },
];

const hoy = () =>
    new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric" })
        .format(new Date())
        .replace(/ de /g, " de ");

export default function DashboardPage() {
    const { user } = useAuth();
    const { conteos, loading, error } = useConteos(["trainingcenters", "apprentices"]);
    const fechaActual = hoy();

    return (
        <div className="space-y-8">
            <section className="relative overflow-hidden rounded-[30px] border border-[#D6E6EA] bg-gradient-to-r from-[#DFF2EE] via-[#EAF6F4] to-[#E4EEF6] p-6 shadow-[0_20px_45px_rgba(15,40,53,0.08)] md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(138,253,93,0.18),_transparent_35%)]" />
                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1B5E6A]">Dashboard</p>
                    <h1 className="mt-3 text-3xl font-black leading-tight text-[#0A2334] md:text-4xl">Hola, {user?.nombre_1 ?? "Administrador"}</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3B5D6E] md:text-base">
                        Aquí tienes un resumen general del estado del sistema, la actividad institucional y los accesos principales del administrador.
                    </p>
                </div>
            </section>

            {error && <ErrorState error={error} />}

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatCard label="Total Centros" value={conteos.trainingcenters ?? 0} icon="bi-building-fill" loading={loading} hint="Centros registrados en el sistema" />
                <StatCard label="Total Aprendices" value={conteos.apprentices ?? 0} icon="bi-people-fill" loading={loading} hint="Aprendices activos en la plataforma" />
                <StatCard label="Módulos activos" value="07" icon="bi-grid-3x3-gap-fill" hint="Módulos del sistema disponibles" />
                <StatCard label="Estado del sistema" value="100%" icon="bi-check2-circle" hint="Servicios operando correctamente" />
            </section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">
                <div className="rounded-[30px] border border-[#D8E6EB] bg-[#F7FBFC] p-6 shadow-[0_12px_26px_rgba(15,40,53,0.06)]">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7785]">Accesos rápidos</p>
                            <h2 className="mt-2 text-xl font-extrabold text-[#0A2334]">Gestión institucional</h2>
                        </div>
                        <span className="text-xs font-semibold text-[#0E6B54]">Hoy · {fechaActual}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {ACCESOS.map((acceso) => (
                            <Link
                                key={acceso.path}
                                to={acceso.path}
                                className="group rounded-2xl border border-[#D8E6EB] bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#8AFD5D]/50 hover:bg-[#F4FFF1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E6B54]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#D8F7CB] text-[#0E6B54] transition-transform group-hover:scale-105">
                                        <i className={`bi ${acceso.icon} text-lg`} />
                                    </span>
                                    <span className="text-xs font-semibold text-[#4B6473] group-hover:text-[#0E6B54]">{acceso.label}</span>
                                </div>
                                <p className="mt-4 text-lg font-bold text-[#0A2334]">{acceso.title}</p>
                                <p className="mt-1 text-sm text-[#5F7785]">{acceso.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="rounded-[30px] border border-[#D8E6EB] bg-[#F7FBFC] p-6 shadow-[0_12px_26px_rgba(15,40,53,0.06)]">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7785]">Resumen</p>
                    <h2 className="mt-2 text-xl font-extrabold text-[#0A2334]">Indicadores clave</h2>
                    <div className="mt-6 space-y-5">
                        {INDICADORES.map(({ label, value }) => (
                            <div key={label}>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-[#456073]">{label}</span>
                                    <span className="font-semibold text-[#0E6B54]">{value}%</span>
                                </div>
                                <div className="h-2.5 overflow-hidden rounded-full bg-[#DDEAF0]">
                                    <div className="h-full rounded-full bg-[#8AFD5D]" style={{ width: `${value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-2xl border border-[#CBE4D5] bg-[#EAFBF0] p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-[#0E6B54]">Última actualización</p>
                        <p className="mt-2 text-sm text-[#466371]">Los datos se sincronizan de forma automática cada 15 minutos.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
