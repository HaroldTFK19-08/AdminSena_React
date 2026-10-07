import { useState } from "react";
import PageHeader from "../../../shared/components/ui/PageHeader";
import StatCard from "../../../shared/components/ui/StatCard";
import Button from "../../../shared/components/ui/Button";
import { useToast } from "../../../shared/components/ui/Toast";
import { exportResourceCsv } from "../../../shared/utils/exportCsv";
import { useConteos } from "../../dashboard/hooks/useConteos";
import { REPORTES } from "../reportes.config";

export default function ReportesPage() {
    const toast = useToast();
    const { conteos, loading } = useConteos(["apprentices", "teachers", "trainingcenters", "programs", "course_groups"]);
    const [generando, setGenerando] = useState(null);

    const generar = async (reporte) => {
        setGenerando(reporte.id);
        try {
            const total = await exportResourceCsv(reporte.resource, `reporte-${reporte.id}`);
            toast.success(`Reporte generado con ${total} registros.`);
        } catch (error) {
            toast.error(error?.message || "No se pudo generar el reporte.");
        } finally {
            setGenerando(null);
        }
    };

    return (
        <div className="space-y-8">
            <PageHeader icon="bi-bar-chart-fill" title="Reportes" description="Indicadores generales y exportación a CSV (Excel) con los datos actuales del sistema." />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <StatCard label="Aprendices" value={conteos.apprentices} icon="bi-people-fill" tone="green" loading={loading} />
                <StatCard label="Instructores" value={conteos.teachers} icon="bi-person-workspace" tone="blue" loading={loading} />
                <StatCard label="Centros" value={conteos.trainingcenters} icon="bi-building-fill" tone="amber" loading={loading} />
                <StatCard label="Programas" value={conteos.programs} icon="bi-mortarboard-fill" tone="violet" loading={loading} />
                <StatCard label="Fichas" value={conteos.course_groups} icon="bi-card-checklist" tone="rose" loading={loading} />
            </div>

            <section className="rounded-[26px] border border-[#D8E6EB] bg-[#F7FBFC] p-5 shadow-[0_12px_26px_rgba(15,40,53,0.06)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7785]">Exportación</p>
                <h2 className="mb-4 mt-2 text-xl font-extrabold text-[#0A2334]">Reportes disponibles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {REPORTES.map((reporte) => (
                        <article key={reporte.id} className="flex gap-4 rounded-2xl border border-[#D8E6EB] bg-white p-5 shadow-sm">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D8F7CB] text-xl text-[#0E6B54]">
                                <i className={`bi ${reporte.icono}`} />
                            </div>
                            <div className="flex-1 space-y-3">
                                <div>
                                    <h3 className="font-bold text-sena-navy">{reporte.nombre}</h3>
                                    <p className="text-sm text-slate-500">{reporte.descripcion}</p>
                                </div>
                                <Button variant="secondary" size="sm" icon="bi-filetype-csv" loading={generando === reporte.id} onClick={() => generar(reporte)}>
                                    Descargar CSV
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
