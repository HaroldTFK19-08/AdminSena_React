export default function BienvenidoAdmin() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl px-7 py-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5FBF3A]">
                        Panel administrativo
                    </p>

                    <h1 className="mt-2 text-2xl lg:text-3xl font-bold text-[#172B36]">
                        Bienvenido, Administrador
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Gestiona y supervisa la información del sistema administrativo del SENA.
                    </p>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-xl bg-[#EAF6E5] items-center justify-center">
                    <i className="bi bi-grid-1x2-fill text-xl text-[#5FBF3A]" />
                </div>
            </div>
        </div>
    );
}