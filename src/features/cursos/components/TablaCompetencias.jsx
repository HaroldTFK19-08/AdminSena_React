import { useState } from "react";

export default function TablaCompetencias({ datos = [], onVer, onEditar }) {
    const [busqueda, setBusqueda] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("Todos");

    // Filtrado local integrado
    const datosFiltrados = datos.filter((competencia) => {
        const query = busqueda.toLowerCase().trim();
        const coincideBusqueda = 
            competencia.codigo.toLowerCase().includes(query) ||
            competencia.nombre.toLowerCase().includes(query) ||
            competencia.programa.toLowerCase().includes(query);
        const coincideEstado = 
            filtroEstado === "Todos" || competencia.estado === filtroEstado;
        return coincideBusqueda && coincideEstado;
    });

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            
            {/* Header de la Tabla: Búsqueda y Filtros */}
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Input de Búsqueda */}
                <div className="relative w-full sm:w-80">
                    <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar por código, nombre o programa..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:border-[#081B2B] focus:outline-none transition-all"
                    />
                </div>

                {/* Filtro de Estado */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <select
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 font-medium focus:border-[#081B2B] focus:outline-none cursor-pointer"
                    >
                        <option value="Todos">Todos los estados</option>
                        <option value="Activa">Activa</option>
                        <option value="Inactiva">Inactiva</option>
                    </select>

                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                        Total: <strong className="text-[#081B2B]">{datosFiltrados.length}</strong>
                    </span>
                </div>
            </div>

            {/* Cuerpo de la Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400 border-b border-slate-200">
                        <tr>
                            <th className="p-4">Código</th>
                            <th className="p-4">Nombre de la Competencia</th>
                            <th className="p-4">Programa</th>
                            <th className="p-4">Horas</th>
                            <th className="p-4">Estado</th>
                            <th className="p-4 text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {datosFiltrados.length > 0 ? (
                            datosFiltrados.map((competencia) => (
                                <tr key={competencia.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-mono font-bold text-[#081B2B]">
                                        {competencia.codigo}
                                    </td>
                                    <td className="p-4 font-semibold text-slate-800">
                                        {competencia.nombre}
                                    </td>
                                    <td className="p-4 font-medium text-slate-600">
                                        {competencia.programa}
                                    </td>
                                    <td className="p-4">
                                        <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                                            {competencia.horas}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                                            competencia.estado === "Activa" 
                                                ? "bg-emerald-100 text-emerald-700" 
                                                : "bg-amber-100 text-amber-700"
                                        }`}>
                                            {competencia.estado}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            {/* Botón Ver */}
                                            <button 
                                                onClick={() => onVer(competencia)} 
                                                title="Ver detalles"
                                                className="p-2 rounded-lg bg-slate-100 hover:bg-[#081B2B] hover:text-white text-slate-600 transition-colors cursor-pointer"
                                            >
                                                <i className="bi bi-eye-fill" />
                                            </button>

                                            {/* Botón Editar */}
                                            <button 
                                                onClick={() => onEditar(competencia)} 
                                                title="Editar competencia"
                                                className="p-2 rounded-lg bg-amber-50 hover:bg-amber-500 hover:text-white text-amber-600 transition-colors cursor-pointer"
                                            >
                                                <i className="bi bi-pencil-fill" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-8 text-center text-slate-400 font-medium">
                                    No se encontraron competencias que coincidan con la búsqueda.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}