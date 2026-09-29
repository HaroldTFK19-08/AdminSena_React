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

            <section>
                <h2 className="text-lg font-black text-sena-navy mb-4">Reportes disponibles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {REPORTES.map((reporte) => (
                        <article key={reporte.id} className="bg-white p-5 rounded-2xl border border-slate-200/70 flex gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-sena-green/20 text-sena-navy flex items-center justify-center text-xl">
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
