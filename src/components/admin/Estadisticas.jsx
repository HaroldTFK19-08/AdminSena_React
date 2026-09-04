export default function StatsAdmin() {
    const estadisticas = [
        {
            nombre: "Centros de formación",
            valor: "12",
            icono: "bi-building",
        },
        {
            nombre: "Cursos activos",
            valor: "48",
            icono: "bi-mortarboard",
        },
        {
            nombre: "Instructores",
            valor: "86",
            icono: "bi-person-workspace",
        },
        {
            nombre: "Aprendices",
            valor: "1.240",
            icono: "bi-people",
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
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                {estadistica.nombre}
                            </p>

                            <p className="mt-2 text-2xl font-bold text-[#172B36]">
                                {estadistica.valor}
                            </p>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-[#EAF6E5] flex items-center justify-center">
                            <i
                                className={`${estadistica.icono} text-[#5FBF3A]`}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}