/**
 * Encabezado de cada módulo (reemplaza las ~15 TarjetaTitulo duplicadas).
 */
export default function PageHeader({ icon, title, description, actions }) {
    return (
        <section className="relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-[30px] border border-[#D6E6EA] bg-gradient-to-r from-[#DFF2EE] via-[#EAF6F4] to-[#E4EEF6] p-6 shadow-[0_20px_45px_rgba(15,40,53,0.08)] md:p-8 lg:flex-row lg:items-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(138,253,93,0.18),_transparent_35%)]" />
            <div className="relative z-10 flex max-w-3xl items-start gap-4">
                {icon && <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D8E6EB] bg-white/70 text-xl text-[#0E6B54] shadow-sm sm:flex"><i className={`bi ${icon}`} /></div>}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1B5E6A]">Gestión institucional</p>
                    <h1 className="mt-3 text-3xl font-black leading-tight text-[#0A2334] md:text-4xl">{title}</h1>
                    {description && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#3B5D6E] md:text-base">{description}</p>}
                </div>
            </div>
            {actions && <div className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row [&>button]:shadow-lg">{actions}</div>}
        </section>
    );
}
