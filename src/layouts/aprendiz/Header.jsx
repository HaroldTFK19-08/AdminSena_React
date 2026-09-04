export default function TopBarAprendiz() {
    return (
        <header className="sticky top-0 z-10 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Aprendiz / Inicio
                    </p>
                    <h1 className="text-base font-bold text-slate-800 leading-none mt-0.5">
                        Panel del aprendiz
                    </h1>
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