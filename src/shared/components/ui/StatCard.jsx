const TONES = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-sky-100 text-sky-700",
    amber: "bg-amber-100 text-amber-700",
    violet: "bg-violet-100 text-violet-700",
    rose: "bg-rose-100 text-rose-700",
};

export default function StatCard({ label, value, icon, tone = "green", loading = false, hint }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200/70 flex items-center justify-between gap-4">
            <div className="space-y-1 min-w-0">
                <p className="text-sm font-semibold text-slate-500">{label}</p>
                <p className="text-3xl font-black text-sena-navy tabular-nums">
                    {loading ? <span className="inline-block w-12 h-8 rounded-lg bg-slate-100 animate-pulse" /> : value}
                </p>
                {hint && <p className="text-xs text-slate-400 truncate">{hint}</p>}
            </div>
            <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-xl ${TONES[tone]}`}>
                <i className={`bi ${icon}`} />
            </div>
        </div>
    );
}
