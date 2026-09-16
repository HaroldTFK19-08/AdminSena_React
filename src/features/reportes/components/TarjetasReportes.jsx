const reportes = [
    {
        titulo: "Aprendices por centro",
        valor: "1.240",
        detalle: "+8% respecto al trimestre anterior",
        icono: "bi-people-fill",
    },
    {
        titulo: "Cursos activos",
        valor: "48",
        detalle: "12 fichas próximas a finalizar",
        icono: "bi-mortarboard-fill",
    },
    {
        titulo: "Equipos disponibles",
        valor: "63%",
        detalle: "Inventario operativo en centros",
        icono: "bi-pc-display",
    },
    {
        titulo: "Instructores activos",
        valor: "86",
        detalle: "4 en proceso de vinculación",
        icono: "bi-person-workspace",
    },
];

export default function TarjetasReportes() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reportes.map((reporte) => (
                <article
                    key={reporte.titulo}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500">{reporte.titulo}</p>
                            <p className="mt-2 text-2xl font-bold text-[#172B36]">{reporte.valor}</p>
                            <p className="mt-2 text-sm text-slate-500">{reporte.detalle}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#EAF6E5] flex items-center justify-center">
                            <i className={`bi ${reporte.icono} text-[#5FBF3A]`} />
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
