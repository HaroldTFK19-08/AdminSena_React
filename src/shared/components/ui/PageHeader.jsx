/**
 * Encabezado de cada módulo (reemplaza las ~15 TarjetaTitulo duplicadas).
 */
export default function PageHeader({ icon, title, description, actions }) {
    return (
        <section className="bg-sena-navy text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute -right-16 -bottom-20 w-72 h-72 rounded-full bg-sena-green/10 blur-3xl pointer-events-none" />
            <div className="relative flex items-start gap-4 max-w-2xl">
                {icon && (
                    <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-2xl bg-white/10 border border-white/10 text-sena-green items-center justify-center text-xl">
                        <i className={`bi ${icon}`} />
                    </div>
                )}
                <div className="space-y-1.5">
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h1>
                    {description && <p className="text-slate-300 text-sm leading-relaxed">{description}</p>}
                </div>
            </div>
            {actions && <div className="relative flex flex-wrap gap-3">{actions}</div>}
        </section>
    );
}
