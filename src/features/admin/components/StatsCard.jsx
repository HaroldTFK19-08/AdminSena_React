

export default function StatsCard({ label, value, icon, color = "text-[#8AFD5D]", bgColor = "bg-[#8AFD5D]/10" }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
                    <p className="text-3xl font-black text-slate-800 group-hover:scale-105 transition-transform duration-200 origin-left">
                        {value}
                    </p>
                </div>
                <div className={`w-14 h-14 ${bgColor} ${color} rounded-2xl flex items-center justify-center text-2xl shadow-inner transform group-hover:rotate-12 transition-transform duration-300`}>
                    <i className={`bi ${icon}`} />
                </div>
            </div>
        </div>
    );
}
