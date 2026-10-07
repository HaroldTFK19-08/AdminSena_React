export default function StatCard({ label, value, icon, loading = false, hint }) {
    return (
        <div className="group flex items-center justify-between gap-4 rounded-[26px] border border-[#D8E6EB] bg-[#F7FBFC] p-5 shadow-[0_12px_26px_rgba(15,40,53,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#BFD5DC]">
            <div className="space-y-1 min-w-0">
                <p className="text-sm text-[#4B6473]">{label}</p>
                <p className="mt-5 text-3xl font-black tracking-tight text-[#0A2334] tabular-nums">
                    {loading ? <span className="inline-block h-8 w-12 animate-pulse rounded-lg bg-slate-100" /> : value}
                </p>
                {hint && <p className="mt-2 truncate text-xs text-[#5F7785]">{hint}</p>}
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D8F7CB] p-2 text-[#0E6B54] transition-transform duration-200 group-hover:scale-105">
                <i className={`bi ${icon}`} />
            </div>
        </div>
    );
}
