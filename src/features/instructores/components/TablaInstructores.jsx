import { useState } from "react";

export default function TablaInstructores({ datos = [], onVer }) {
    const [busqueda, setBusqueda] = useState("");

    const datosFiltrados = datos.filter((item) => {
        const query = busqueda.toLowerCase().trim();
        return (
            item.nombre?.toLowerCase().includes(query) ||
            item.documento?.toLowerCase().includes(query) ||
            item.centro?.toLowerCase().includes(query) ||
            item.area?.toLowerCase().includes(query)
        );
    });

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                    <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar por nombre, documento o área..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:border-[#081B2B] focus:outline-none"
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
                            <th className="p-4">Documento</th>
                            <th className="p-4">Nombre Completo</th>
                            <th className="p-4">Área</th>
                            <th className="p-4">Centro</th>
                            <th className="p-4 text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {datosFiltrados.length > 0 ? (
                            datosFiltrados.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-mono font-bold text-[#081B2B]">{item.documento}</td>
                                    <td className="p-4 font-semibold text-slate-800">{item.nombre}</td>
                                    <td className="p-4 font-medium text-slate-600">{item.area}</td>
                                    <td className="p-4 text-slate-600">{item.centro}</td>
                                    <td className="p-4 text-center">
                                        <button 
                                            onClick={() => onVer(item)} 
                                            title="Ver detalles"
                                            className="p-2 rounded-lg bg-slate-100 hover:bg-[#081B2B] hover:text-white text-slate-600 transition-colors"
                                        >
                                            <i className="bi bi-eye-fill" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-8 text-center text-slate-400 font-medium">
                                    No se encontraron instructores.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}