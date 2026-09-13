export default function StatsAprendiz() {
    const estadisticas = [
        {
            nombre: "Programa actual",
            valor: "ADSO",
            icono: "bi-mortarboard",
        },
        {
            nombre: "Instructor",
            valor: "1",
            icono: "bi-person-workspace",
        },
        {
            nombre: "Computador asignado",
            valor: "PC-024",
            icono: "bi-pc-display",
        },
        {
            nombre: "Alertas pendientes",
            valor: "2",
            icono: "bi-bell",
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {estadisticas.map((estadistica) => (
                <div
                    key={estadistica.nombre}
                    className="bg-white border border-slate-200 rounded-2xl px-5 py-5 shadow-sm"
                >
                    <div className="flex items-start justify-between">
                        <div className="min-w-0">
                            <p className="text-xs font-medium text-slate-500">
                                {estadistica.nombre}
                            </p>
                            <p className="mt-2 text-xl font-bold text-[#172B36] truncate">
                                {estadistica.valor}
                            </p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#EAF6E5] flex items-center justify-center shrink-0">
                            <i
                                className={`bi ${estadistica.icono} text-[#5FBF3A]`}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}