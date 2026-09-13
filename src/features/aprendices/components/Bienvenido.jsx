export default function BienvenidaAprendiz({ nombre = "Harold" }) {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                    Bienvenido, Aprendiz {nombre}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
                    Bienvenido a tu espacio en Admin Sena. Desde aquí puedes
                    consultar tus cursos, instructores, computador y revisar
                    la información relacionada con tu formación.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
                        <i className="bi bi-mortarboard-fill text-[#39A900]" />
                        <span className="text-xs font-semibold text-slate-600">
                            En Formación
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute -right-16 -bottom-20 w-56 h-56 rounded-full bg-[#39A900]/5" />
            <div className="absolute right-8 top-8 hidden sm:flex w-20 h-20 rounded-2xl bg-[#39A900]/10 items-center justify-center rotate-3">
                <i className="bi bi-person-workspace text-4xl text-[#39A900]" />
            </div>
        </section>
    );
}

