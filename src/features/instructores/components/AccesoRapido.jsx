import { Link } from "react-router-dom";

const acciones = [
    {
        nombre: "Mis cursos",
        descripcion: "Consultar los cursos a tu cargo",
        ruta: "/instructor/cursos",
        icono: "bi-mortarboard-fill",
    },
    {
        nombre: "Mis aprendices",
        descripcion: "Consultar aprendices de tus cursos",
        ruta: "/instructor/aprendices",
        icono: "bi-people-fill",
    },
    {
        nombre: "Ambientes",
        descripcion: "Consultar ambientes de formación",
        ruta: "/instructor/ambientes",
        icono: "bi-door-open-fill",
    },
    {
        nombre: "Reportes",
        descripcion: "Consultar información de tus cursos",
        ruta: "/instructor/reportes",
        icono: "bi-bar-chart-fill",
    },
];

export default function QuickActionsInstructor() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="mb-5">
                <h2 className="text-lg font-bold text-[#071D2B]">
                    Accesos rápidos
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Accede rápidamente a las funciones principales.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {acciones.map((accion) => (
                    <Link
                        key={accion.ruta}
                        to={accion.ruta}
                        className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4 hover:border-[#8AFD5D]/50 hover:bg-[#8AFD5D]/[0.06] transition-all duration-150"
                    >
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#071D2B]/[0.06] flex items-center justify-center group-hover:bg-[#8AFD5D]/15 transition-colors duration-150">
                            <i
                                className={`bi ${accion.icono} text-[#0F5B3C] group-hover:text-[#0C7A45] text-base transition-colors duration-150`}
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm font-bold text-[#071D2B]">
                                {accion.nombre}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                {accion.descripcion}
                            </p>
                        </div>

                        <i className="bi bi-chevron-right ml-auto text-xs text-slate-300 group-hover:text-[#39A900] transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

