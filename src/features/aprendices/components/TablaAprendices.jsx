// Recibe como props la lista de aprendices y la función callback para abrir el modal 'Ver'
export default function TablaAprendices({ datos, onVer }) {
    return (
        /* Envoltorio responsivo con scroll horizontal si la pantalla es muy angosta */
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-600">
                
                {/* Cabecera de la tabla */}
                <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400 border-b border-slate-200">
                    <tr>
                        <th className="p-4">Documento</th>
                        <th className="p-4">Nombre del Aprendiz</th>
                        <th className="p-4">Ficha</th>
                        <th className="p-4">Programa</th>
                        <th className="p-4">Estado</th>
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                </thead>

                {/* Cuerpo de la tabla */}
                <tbody className="divide-y divide-slate-100">
                    {/* Mapeo del arreglo de aprendices */}
                    {datos.map((aprendiz) => (
                        <tr key={aprendiz.id} className="hover:bg-slate-50/50 transition-colors">
                            
                            {/* Documento de identidad con fuente monoespaciada */}
                            <td className="p-4 font-mono text-slate-500 font-medium">{aprendiz.documento}</td>
                            
                            {/* Nombre completo */}
                            <td className="p-4 font-semibold text-[#081B2B]">{aprendiz.nombre}</td>
                            
                            {/* Número de ficha estilizado como Badge */}
                            <td className="p-4">
                                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                                    {aprendiz.ficha}
                                </span>
                            </td>
                            
                            {/* Programa de formación al que pertenece */}
                            <td className="p-4 font-medium text-slate-600">{aprendiz.programa}</td>
                            
                            {/* Estado del aprendiz con colores condicionales según el valor */}
                            <td className="p-4">
                                <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                                    aprendiz.estado === "Activo" 
                                        ? "bg-emerald-100 text-emerald-700" 
                                        : aprendiz.estado === "En formación"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-amber-100 text-amber-700"
                                }`}>
                                    {aprendiz.estado}
                                </span>
                            </td>

                            {/* Columna de Acción única (Ver detalle) */}
                            <td className="p-4">
                                <div className="flex items-center justify-center">
                                    <button 
                                        onClick={() => onVer(aprendiz)} 
                                        title="Ver detalles"
                                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                                    >
                                        <i className="bi bi-eye-fill" />
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