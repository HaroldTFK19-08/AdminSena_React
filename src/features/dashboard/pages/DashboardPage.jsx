import { Link } from "react-router-dom";
import StatCard from "../../../shared/components/ui/StatCard";
import Badge from "../../../shared/components/ui/Badge";
import { ErrorState } from "../../../shared/components/ui/Feedback";
import { useConteos } from "../hooks/useConteos";
import { useAuth } from "../../auth/hooks/useAuth";
import { labelFor } from "../../../shared/resources/registry";
import { ESTADOS_NOTICIA, findOption } from "../../../shared/constants/enums";
import { formatFecha } from "../../../shared/utils/format";

const ACCESOS = [
    { label: "Fichas", path: "/admin/fichas", icon: "bi-card-checklist" },
    { label: "Aprendices", path: "/admin/aprendices", icon: "bi-people-fill" },
    { label: "Resultados", path: "/admin/resultados", icon: "bi-clipboard2-check-fill" },
    { label: "Ofertas", path: "/admin/ofertas", icon: "bi-megaphone-fill" },
];

const hoy = () => new Date().toISOString().slice(0, 10);

export default function DashboardPage() {
    const { user } = useAuth();
    const { data, conteos, loading, error } = useConteos([
        "apprentices",
        "teachers",
        "course_groups",
        "programs",
        "offers",
        "registrations",
        "news",
        "trainingcenters",
    ]);

    const lookup = {
        programs: new Map((data.programs ?? []).map((p) => [String(p.id), p])),
        trainingcenters: new Map((data.trainingcenters ?? []).map((c) => [String(c.id), c])),
    };

    const convocatoriasAbiertas = (data.offers ?? []).filter((o) => o.fecha_convocatoria <= hoy() && o.fecha_fin_convocatoria >= hoy());
    const inscritosPorOferta = (id) => (data.registrations ?? []).filter((r) => String(r.offer_id) === String(id)).length;
    const noticias = [...(data.news ?? [])].sort((a, b) => b.id - a.id).slice(0, 4);

    return (
        <div className="space-y-8">
            <section className="bg-sena-navy text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute -right-20 -top-24 w-80 h-80 rounded-full bg-sena-green/10 blur-3xl pointer-events-none" />
                <p className="relative text-sm text-slate-300">{new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(new Date())}</p>
                <h1 className="relative text-2xl sm:text-3xl font-black tracking-tight mt-1">Hola, {user?.nombre_1 ?? "administrador"}</h1>
                <p className="relative text-slate-300 mt-2 max-w-2xl">
                    {loading
                        ? "Cargando el resumen institucional…"
                        : `Hay ${conteos.apprentices ?? 0} aprendices en ${conteos.course_groups ?? 0} fichas y ${convocatoriasAbiertas.length} convocatorias abiertas.`}
                </p>
            </section>

            {error && <ErrorState error={error} />}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Aprendices" value={conteos.apprentices} icon="bi-people-fill" tone="green" loading={loading} />
                <StatCard label="Instructores" value={conteos.teachers} icon="bi-person-workspace" tone="blue" loading={loading} />
                <StatCard label="Fichas" value={conteos.course_groups} icon="bi-card-checklist" tone="amber" loading={loading} />
                <StatCard label="Inscripciones" value={conteos.registrations} icon="bi-journal-check" tone="violet" loading={loading} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <section className="xl:col-span-2 bg-white rounded-3xl border border-slate-200/70 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-sena-navy">Convocatorias abiertas</h2>
                        <Link to="/admin/ofertas" className="text-sm font-semibold text-sky-700 hover:underline">
                            Ver ofertas
                        </Link>
                    </div>
                    {convocatoriasAbiertas.length === 0 ? (
                        <p className="text-sm text-slate-400 py-6">{loading ? "Cargando…" : "No hay convocatorias abiertas hoy."}</p>
                    ) : (
                        <ul className="divide-y divide-slate-100">
                            {convocatoriasAbiertas.map((o) => {
                                const inscritos = inscritosPorOferta(o.id);
                                const pct = Math.min(100, Math.round((inscritos / (o.capacidad || 1)) * 100));
                                return (
                                    <li key={o.id} className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                                        <div className="min-w-0">
                                            <p className="font-semibold text-slate-800 truncate">{labelFor("programs", o.program_id, lookup)}</p>
                                            <p className="text-xs text-slate-500">Cierra el {formatFecha(o.fecha_fin_convocatoria)}</p>
                                        </div>
                                        <div className="sm:w-56">
                                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                                <span>Inscritos</span>
                                                <span className="tabular-nums">
                                                    {inscritos} / {o.capacidad}
                                                </span>
                                            </div>
                                            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                                                <div className="h-full bg-sena-green-strong rounded-full" style={{ width: `${pct}%` }} />
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </section>

                <section className="bg-white rounded-3xl border border-slate-200/70 p-6">
                    <h2 className="text-lg font-bold text-sena-navy mb-4">Accesos rápidos</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {ACCESOS.map((a) => (
                            <Link
                                key={a.path}
                                to={a.path}
                                className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-sena-navy/30 hover:bg-white flex flex-col gap-2 text-sm font-semibold text-slate-700"
                            >
                                <i className={`bi ${a.icon} text-lg text-sena-navy`} />
                                {a.label}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            <section className="bg-white rounded-3xl border border-slate-200/70 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-sena-navy">Últimas noticias</h2>
                    <Link to="/admin/noticias" className="text-sm font-semibold text-sky-700 hover:underline">
                        Gestionar
                    </Link>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {noticias.map((n) => {
                        const estado = findOption(ESTADOS_NOTICIA, n.estado);
                        return (
                            <li key={n.id} className="p-4 rounded-2xl bg-slate-50 flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="font-semibold text-slate-800">{n.titulo}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{labelFor("trainingcenters", n.trainingcenter_id, lookup)}</p>
                                </div>
                                <Badge tone={estado.tone}>{estado.label}</Badge>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
