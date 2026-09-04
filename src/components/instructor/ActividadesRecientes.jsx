const actividades = [
    {
        texto: "Nuevo aprendiz asignado",
        usuario: "Juan Pérez - ADSO",
        tiempo: "Hace 10 minutos",
        icono: "bi-person-plus-fill",
    },
    {
        texto: "Curso actualizado",
        usuario: "ADSO - Ficha 2854671",
        tiempo: "Hace 35 minutos",
        icono: "bi-mortarboard-fill",
    },
    {
        texto: "Ambiente actualizado",
        usuario: "Ambiente 204",
        tiempo: "Hace 1 hora",
        icono: "bi-door-open-fill",
    },
    {
        texto: "Nueva alerta",
        usuario: "Revisión de inventario",
        tiempo: "Hace 2 horas",
        icono: "bi-bell-fill",
    },
];

export default function RecentActivityInstructor() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg font-bold text-[#071D2B]">
                        Actividad reciente
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Últimos movimientos relacionados con tu formación.
                    </p>
                </div>

                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <i className="bi bi-clock-history text-slate-400" />
                </div>
            </div>

            <div className="relative">
                {actividades.map((actividad, index) => (
                    <div
                        key={index}
                        className="relative flex gap-4 pb-5 last:pb-0"
                    >
                        {index !== actividades.length - 1 && (
                            <span className="absolute left-5 top-10 bottom-0 w-px bg-slate-100" />
                        )}

                        <div className="relative w-10 h-10 shrink-0 rounded-xl bg-[#0F5B3C]/[0.08] flex items-center justify-center">
                            <i
                                className={`bi ${actividad.icono} text-[#0F5B3C] text-sm`}
                            />
                        </div>

                        <div className="min-w-0 flex-1 flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#071D2B]">
                                    {actividad.texto}
                                </p>

                                <p className="text-xs text-slate-500 truncate">
                                    {actividad.usuario}
                                </p>
                            </div>

                            <span className="text-[10px] text-slate-400 whitespace-nowrap pt-0.5">
                                {actividad.tiempo}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

