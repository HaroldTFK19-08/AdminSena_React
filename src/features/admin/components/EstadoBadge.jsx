const ESTILOS_ESTADO = {
    Activo: "bg-emerald-50 text-emerald-700",
    "En formación": "bg-emerald-50 text-emerald-700",
    Disponible: "bg-emerald-50 text-emerald-700",
    Asignado: "bg-sky-50 text-sky-700",
    Mantenimiento: "bg-amber-50 text-amber-700",
    Inactivo: "bg-slate-100 text-slate-600",
    Finalizado: "bg-slate-100 text-slate-600",
};

export default function EstadoBadge({ valor }) {
    const estilo = ESTILOS_ESTADO[valor] || "bg-slate-100 text-slate-600";

    return (
        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${estilo}`}>
            {valor}
        </span>
    );
}
