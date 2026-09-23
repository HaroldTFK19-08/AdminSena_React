import { useState } from "react";

export default function TablaAreas({ datos = [], onVer, onEditar }) {
    const [busqueda, setBusqueda] = useState("");

    const datosFiltrados = datos.filter((item) =>
        item.nombre?.toLowerCase().includes(busqueda.toLowerCase().trim()) ||
        item.codigo?.toLowerCase().includes(busqueda.toLowerCase().trim())
    );

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                    <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar por código o nombre..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:border-[#081B2B] focus:outline-none"
                    />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Total: <strong className="text-[#081B2B]">{datosFiltrados.length}</strong>
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400 border-b border-slate-200">
                        <tr>
                            <th className="p-4">Código</th>
                            <th className="p-4">Nombre del Área</th>
                            <th className="p-4">Programas Asociados</th>
                            <th className="p-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {datosFiltrados.length > 0 ? (
                            datosFiltrados.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-mono font-bold text-[#081B2B]">{item.codigo}</td>
                                    <td className="p-4 font-semibold text-slate-800">{item.nombre}</td>
                                    <td className="p-4 font-medium text-slate-600">{item.totalProgramas || 0}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button 
                                                onClick={() => onVer(item)} 
                                                title="Ver"
                                                className="p-2 rounded-lg bg-slate-100 hover:bg-[#081B2B] hover:text-white text-slate-600 transition-colors"
                                            >
                                                <i className="bi bi-eye-fill" />
                                            </button>
                                            <button 
                                                onClick={() => onEditar(item)} 
                                                title="Editar"
                                                className="p-2 rounded-lg bg-amber-50 hover:bg-amber-500 hover:text-white text-amber-600 transition-colors"
                                            >
                                                <i className="bi bi-pencil-fill" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-8 text-center text-slate-400 font-medium">
                                    No se encontraron áreas.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}