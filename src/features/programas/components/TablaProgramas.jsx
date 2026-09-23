import { programas } from "../../../data/admin/Programas";

export default function TablaProgramas() {
    return (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400 border-b border-slate-200">
                    <tr>
                        <th className="p-4">Código / Nombre</th>
                        <th className="p-4">Nivel</th>
                        <th className="p-4">Duración</th>
                        <th className="p-4">Área / Centro</th>
                        <th className="p-4">Estado</th>
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {programas.map((programa) => (
                        <tr key={programa.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4">
                                <div className="font-bold text-[#081B2B]">{programa.nombre}</div>
                                <span className="text-xs text-slate-400 font-mono">Cód: {programa.codigo}</span>
                            </td>
                            <td className="p-4">
                                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                                    {programa.nivel}
                                </span>
                            </td>
                            <td className="p-4 font-medium text-slate-700">{programa.duracion}</td>
                            <td className="p-4">
                                <div className="font-semibold text-slate-700">{programa.area}</div>
                                <div className="text-xs text-slate-400 truncate max-w-xs">{programa.centro}</div>
                            </td>
                            <td className="p-4">
                                <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                                    programa.estado === "Activo" 
                                        ? "bg-emerald-100 text-emerald-700" 
                                        : "bg-amber-100 text-amber-700"
                                }`}>
                                    {programa.estado}
                                </span>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center justify-center gap-2">
                                    <button 
                                        type="button"
                                        title="Ver detalles"
                                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                                    >
                                        <i className="bi bi-eye-fill" />
                                    </button>
                                    <button 
                                        type="button"
                                        title="Editar"
                                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                                    >
                                        <i className="bi bi-pencil-fill" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}