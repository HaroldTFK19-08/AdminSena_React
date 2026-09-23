import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaEstadisticas from "../../../components/TarjetaEstadisticas";

export default function HomeAdmin() {
    return (
        <LayoutAdmin titulo="Home">
            <div className="space-y-8">
                {/* Banner de Bienvenida - Color Institucional más suave y moderno */}
                <div className="bg-gradient-to-br from-[#081B28] via-[#0F172A] to-[#020617] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden border border-white/10">
                    <div className="relative z-10">
                        <h1 className="text-3xl font-black tracking-tight">Bienvenido, Administrador 👋</h1>
                        <p className="text-slate-300 mt-2 max-w-2xl text-lg opacity-90 font-//medium">
                            Gestiona la comunidad del SENA con eficiencia. Tienes control total sobre los registros institucionales.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#8AFD5D]/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -ml-10 -mb-10" />
                </div>

                {/* Grid de Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <TarjetaEstadisticas 
                        etiqueta="Aprendices" 
                        valor="1,240" 
                        icono="bi-people-fill" 
                        color="text-emerald-600" 
                        fondoColor="bg-emerald-100" 
                    />
                    <TarjetaEstadisticas 
                        etiqueta="Instructores" 
                        valor="86" 
                        icono="bi-person-workspace" 
                        color="text-blue-600" 
                        fondoColor="bg-blue-100" 
                    />
                    <TarjetaEstadisticas 
                        etiqueta="Centros" 
                        valor="12" 
                        icono="bi-building-fill" 
                        color="text-amber-600" 
                        fondoColor="bg-amber-100" 
                    />
                    <TarjetaEstadisticas 
                        etiqueta="Cursos" 
                        valor="//48" 
                        icono="bi-book-fill" 
                        color="text-purple-600" 
                        fondoColor="bg-purple-100" 
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i className="bi bi-lightning-charge-fill text-emerald-500"></i>
                            Accesos Rápidos
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Gestionar Fichas", "Gestionar Programas", "Gestionar Centros", "Gestionar Ambientes"].map((item) => (
                                <button key={item} className="p-4 text-left rounded-2xl border border-slate-100 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all group flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700">{item}</span>
                                    <i className="bi bi-chevron-right text-slate-300 group-hover:text-emerald-400 transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <i className="bi bi-clock-history text-slate-400"></i>
                            Actividad Reciente
                        </h2>
                        <div className="space-y-4">
                            {[
                                { text: "Nuevo instructor registrado", user: "Carlos Ruiz", time: "Hace 5 min", icon: "bi-person-plus" },
                                { text: "Actualización de centro", user: "Sede Popayán", time: "Hace 20 min", icon: "bi-building-gear" },
                                { text: "Aprendiz inscrito", user: "Ana Lopez", time: "Hace 1 hora", icon: "bi-person-check" },
                            ].map((act, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                                            <i className={`bi ${act.icon}`} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700">{act.text}</span>
                                            <span className="text-xs text-slate-400">{act.user}</span>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-medium text-slate-400">{act.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}
