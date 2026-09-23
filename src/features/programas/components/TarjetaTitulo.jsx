export default function TarjetaTitulo({ 
    titulo = "Programas de Formación", 
    descripcion = "Gestión de la oferta académica y programas del SENA", 
    textoBoton = "Nuevo Programa", 
    onAccion 
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Título y Descripción */}
            <div className="space-y-1">
                <h1 className="text-2xl font-black text-[#081B2B] tracking-tight">
                    {titulo}
                </h1>
                <p className="text-sm text-slate-500 font-medium">
                    {descripcion}
                </p>
            </div>

            {/* Botón de Acción Principal (Solo se muestra si se pasa la función onAccion) */}
            {onAccion && (
                <button
                    type="button"
                    onClick={onAccion}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#081B2B] hover:bg-[#0c273d] text-[#8AFD5D] rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
                >
                    <i className="bi bi-plus-lg text-lg" />
                    <span>{textoBoton}</span>
                </button>
            )}

        </div>
    );
}