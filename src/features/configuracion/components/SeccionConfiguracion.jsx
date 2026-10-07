export default function SeccionConfiguracion({ titulo, icono, children }) {
    return (
        <div className="overflow-hidden rounded-[26px] border border-[#D8E6EB] bg-[#F7FBFC] shadow-[0_12px_26px_rgba(15,40,53,0.06)]">
            <div className="flex items-center gap-3 border-b border-[#D8E6EB] p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D8F7CB] text-[#0E6B54]">
                    <i className={`bi ${icono}`} />
                </div>
                <h2 className="font-bold text-[#0A2334]">{titulo}</h2>
            </div>
            <div className="space-y-4 p-5">
                {children}
            </div>
        </div>
    );
}
