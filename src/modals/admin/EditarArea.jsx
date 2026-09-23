import { useState } from "react";

export default function EditarArea({ abrir, cerrar, area, onGuardar }) {
    // Si no está abierto o no hay área seleccionada, no renderizamos nada
    if (!abrir || !area) return null;

    return (
        <FormularioEditarArea 
            key={area.id} // La clave reinicia los estados automáticamente cuando cambia el área
            area={area} 
            cerrar={cerrar} 
            onGuardar={onGuardar} 
        />
    );
}

// Subcomponente interno con sus propios estados inicializados directamente
function FormularioEditarArea({ area, cerrar, onGuardar }) {
    const [nombre, setNombre] = useState(area.nombre || "");
    const [codigo, setCodigo] = useState(area.codigo || "");
    const [centro, setCentro] = useState(area.centro || "");
    const [estado, setEstado] = useState(area.estado || "Activo");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onGuardar) {
            onGuardar({ ...area, nombre, codigo, centro, estado });
        }
        cerrar();
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#081B2B] text-[#8AFD5D] flex items-center justify-center text-lg font-bold">
                            <i className="bi bi-[#8AFD5D] bi-pencil-square" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#081B2B] text-base">Editar Área</h3>
                            <p className="text-xs text-slate-400">Modifica los detalles del área seleccionada</p>
                        </div>
                    </div>
                    <button 
                        onClick={cerrar}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <i className="bi bi-x-lg text-sm" />
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    
                    {/* Código */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Código del Área
                        </label>
                        <input
                            type="text"
                            required
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                        />
                    </div>

                    {/* Nombre del Área */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Nombre del Área
                        </label>
                        <input
                            type="text"
                            required
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                        />
                    </div>

                    {/* Centro de Formación */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Centro de Formación
                        </label>
                        <input
                            type="text"
                            required
                            value={centro}
                            onChange={(e) => setCentro(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                        />
                    </div>

                    {/* Estado */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Estado
                        </label>
                        <select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all cursor-pointer"
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={cerrar}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-[#081B2B] hover:bg-[#0c273d] text-[#8AFD5D] text-sm font-bold shadow-md transition-all active:scale-95"
                        >
                            Guardar Cambios
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}