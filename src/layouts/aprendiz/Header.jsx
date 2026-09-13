import { useNavigate } from "react-router-dom";

export default function TopBarAprendiz() {
    const navigate = useNavigate()
    return (
        <header className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex justify-center items-center space-x-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
                    >
                        <i className="bi bi-arrow-left text-base transition-transform duration-200 group-hover:-translate-x-1"></i>
                    </button>
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            Aprendiz
                        </p>
                        <h1 className="text-base font-bold text-slate-800 leading-none mt-0.5">
                            Panel del aprendiz
                        </h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Notificaciones"
                        className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                    >
                        <i className="bi bi-bell text-sm" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white" />
                    </button>
                </div>
            </div>
        </header>
    );
}