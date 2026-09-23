// Recibimos la lista de datos a renderizar y las funciones manejadoras (callbacks) como props
export default function TablaCentros({ datos, onVer, onEditar, onEliminar }) {
    return (
        /* Contenedor principal con desbordamiento horizontal (scroll) para diseño responsivo */
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-600">
                
                {/* Encabezado fijo de la tabla */}
                <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400 border-b border-slate-200">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Nombre</th>
                        <th className="p-4">Ubicación</th>
                        <th className="p-4">Dirección</th>
                        <th className="p-4">Estado</th>
                        {/* Alineamos la cabecera de acciones al centro para equilibrar los botones */}
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                </thead>

                {/* Cuerpo de la tabla */}
                <tbody className="divide-y divide-slate-100">
                    {/* Iteramos sobre el arreglo de 'datos' pasado desde el componente padre */}
                    {datos.map((centro) => (
                        /* 'key' única obligatoria en React para la optimización del Virtual DOM */
                        <tr key={centro.id} className="hover:bg-slate-50/50 transition-colors">
                            
                            {/* Identificador numérico formateado */}
                            <td className="p-4 font-bold text-slate-400">#{centro.id}</td>
                            
                            {/* Nombre del centro con peso de texto destacado */}
                            <td className="p-4 font-semibold text-[#081B2B]">{centro.nombre}</td>
                            
                            {/* Ubicación (Ciudad / Municipio) */}
                            <td className="p-4">{centro.ubicacion}</td>
                            
                            {/* Dirección física */}
                            <td className="p-4">{centro.direccion}</td>
                            
                            {/* Chip o Badge de Estado con renderizado condicional de estilos */}
                            <td className="p-4">
                                <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                                    centro.estado === "Activo" 
                                        ? "bg-emerald-100 text-emerald-700" 
                                        : "bg-amber-100 text-amber-700"
                                }`}>
                                    {centro.estado}
                                </span>
                            </td>

                            {/* Celda de Acciones con eventos onClick configurados */}
                            <td className="p-4">
                                <div className="flex items-center justify-center gap-2">
                                    
                                    {/* Botón Ver: Dispara la función onVer devolviendo todo el objeto 'centro' */}
                                    <button 
                                        onClick={() => onVer(centro)} 
                                        title="Ver detalles"
                                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                                    >
                                        <i className="bi bi-eye-fill" />
                                    </button>

                                    {/* Botón Editar: Dispara la función onEditar devolviendo todo el objeto 'centro' */}
                                    <button 
                                        onClick={() => onEditar(centro)} 
                                        title="Editar"
                                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors cursor-pointer"
                                    >
                                        <i className="bi bi-pencil-fill" />
                                    </button>

                                    {/* Botón Eliminar: Dispara la función onEliminar enviando únicamente el 'id' */}
                                    <button 
                                        onClick={() => onEliminar(centro.id)} 
                                        title="Eliminar"
                                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors cursor-pointer"
                                    >
                                        <i className="bi bi-trash-fill" />
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