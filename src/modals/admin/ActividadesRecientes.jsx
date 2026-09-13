import Actividades from "../../data/admin/Actividades";

export default function ModalActividades({ cerrar, abrir }) {
    if (!abrir) {
        return null;
    }
    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Encabezado */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 bg-[#071D2B]">
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Historial de actividades
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Actividades recientes realizadas en el sistema
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={cerrar}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                    >
                        <i className="bi bi-x-lg text-lg"></i>
                    </button>
                </div>
                {/* Lista de actividades */}
                <div className="max-h-[450px] overflow-y-auto">
                    {Actividades.map((actividad) => (
                        <div
                            key={actividad.id}
                            className="flex gap-4 border-b border-slate-100 px-6 py-4 transition hover:bg-slate-50"
                        >
                            {/* Icono */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F7E1] text-[#39A900]">
                                <i
                                    className={`bi ${actividad.icono} text-lg`}
                                ></i>
                            </div>
                            {/* Información */}
                            <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {actividad.titulo}
                                    </h3>
                                    <span className="whitespace-nowrap text-xs text-slate-400">
                                        {actividad.fecha}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm text-slate-500">
                                    {actividad.descripcion}
                                </p>
                                <span className="mt-2 inline-block text-xs font-medium text-[#39A900]">
                                    Administrador
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

