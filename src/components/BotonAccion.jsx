
/**
 * Componente Reutilizable: Botón de Acción
 * Botón estandarizado con efectos de transición y soporte para iconos.
 */
export default function BotonAccion({ texto, onClick, icono, variante = "primaria" }) {
    const variantes = {
        primaria: "bg-[#8AFD5D] text-[#081B2B] hover:bg-[#9CFF78] shadow-lg shadow-[#8AFD5D]/20",
        secundaria: "bg-slate-100 text-slate-600 hover:bg-slate-200",
        peligro: "bg-red-50 text-red-600 hover:bg-red-100",
    };

    return (
        <button 
            onClick={onClick}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${variantes[variante]}`}
        >
            {icono && <i className={`bi ${icono}`} />}
            {texto}
        </button>
    );
}
