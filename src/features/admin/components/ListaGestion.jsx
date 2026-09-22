import AccionesFila from "./AccionesFila";
import EstadoBadge from "./EstadoBadge";
import useListaGestion from "../hooks/useListaGestion";
import DetalleRegistro from "../../../modals/admin/DetalleRegistro";
import FormularioRegistro from "../../../modals/admin/FormularioRegistro";

/**
 * Componente de Tabla de Gestión Genérica
 * Renderiza una tabla completa con buscador, botón de creación,
 * listado de datos y modales integrados para el CRUD.
 * 
 * @param {Object} props
 * @param {string} props.titulo - Título de la entidad a gestionar
 * @param {string} props.descripcion - Descripción corta de la sección
 * @param {string} props.icono - Clase de icono de Bootstrap (ej: bi-person)
 * @param {string} props.botonNuevo - Etiqueta del botón para añadir registros
 * @param {Array} props.columnas - Definición de columnas [{clave, etiqueta, tipo}]
 * @param {Array} props.filas - Datos iniciales de la tabla
 * @param {Array} props.buscarPor - Campos sobre los cuales se filtrarán los datos
 * @param {string} props.placeholderBusqueda - Texto del placeholder del buscador
 */
export default function ListaGestion({
    titulo,
    descripcion,
    icono,
    botonNuevo,
    columnas,
    filas,
    buscarPor,
    placeholderBusqueda = "Buscar...",
}) {
    // Gestión de estado, filtrado y modales delegada al hook personalizado
    const gestion = useListaGestion({ filas, columnas, buscarPor, titulo });

    return (
        <section className="space-y-5">
            
            {/* --- ENCABEZADO DE LA SECCIÓN --- */}
            <div className="bg-white border border-slate-200 rounded-2xl px-7 py-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#5FBF3A]">Gestión</p>
                        <h1 className="mt-2 text-2xl lg:text-3xl font-bold text-[#172B36]">{titulo}</h1>
                        <p className="mt-2 text-sm text-slate-500">{descripcion}</p>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-xl bg-[#EAF6E5] items-center justify-center">
                        <i className={`bi ${icono} text-xl text-[#5FBF3A]`} />
                    </div>
                </div>
            </div>

            {/* --- CONTENEDOR DE LA TABLA --- */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                
                {/* Barra de Herramientas: Buscador y Botón Nuevo */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-slate-100">
                    <div className="relative w-full sm:max-w-xs">
                        <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        <input
                            type="search"
                            value={gestion.busqueda}
                            onChange={(e) => gestion.setBusqueda(e.target.value)}
                            placeholder={placeholderBusqueda}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-2 focus:ring-[#8AFD5D]/20"
                        />
                    </div>
                    {botonNuevo && (
                        <button
                            type="button"
                            onClick={gestion.abrirRegistro}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#8AFD5D] text-[#071D2B] text-sm font-bold hover:bg-[#9CFF78] transition-colors"
                        >
                            <i className="bi bi-plus-lg" />
                            {botonNuevo}
                        </button>
                    )}
                </div>

                {/* Tabla de Datos */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left">
                        <thead>
                            <tr className="bg-slate-50/80 text-[11px] uppercase tracking-wider text-slate-500">
                                {columnas.map((columna) => (
                                    <th key={columna.clave} className="font-bold px-5 py-3">{columna.etiqueta}</th>
                                ))}
                                <th className="font-bold px-5 py-3 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gestion.filtradas.length === 0 ? (
                                <tr>
                                    <td colSpan={columnas.length + 1} className="px-5 py-10 text-center text-sm text-slate-500">
                                        No se encontraron registros.
                                    </td>
                                </tr>
                            ) : (
                                gestion.filtradas.map((fila) => (
                                    <tr key={fila.id} className="border-t border-slate-100 hover:bg-slate-50/70">
                                        {columnas.map((columna) => (
                                            <td key={columna.clave} className="px-5 py-4 text-sm text-slate-700">
                                                {columna.tipo === "estado" ? (
                                                    <EstadoBadge valor={fila[columna.clave]} />
                                                ) : (
                                                    <span className="font-medium">{fila[columna.clave]}</span>
                                                )}
                                            </td>
                                        ))}
                                        <td className="px-5 py-4">
                                            <AccionesFila
                                                fila={fila}
                                                ver={gestion.setFilaSeleccionada}
                                                editar={gestion.abrirEdicion}
                                                eliminar={gestion.eliminarRegistro}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- MODALES DE GESTIÓN --- */}
            {/* Modal para visualizar el detalle completo de un registro */}
            <DetalleRegistro
                fila={gestion.filaSeleccionada}
                columnas={columnas}
                titulo={titulo}
                cerrar={() => gestion.setFilaSeleccionada(null)}
            />
            {/* Modal para la creación o actualización de datos */}
            <FormularioRegistro
                abierto={gestion.mostrarFormulario}
                editando={gestion.filaEditada}
                titulo={titulo}
                botonNuevo={botonNuevo}
                columnas={columnas}
                registros={gestion.registros}
                datos={gestion.datosFormulario}
                cambiarDato={(clave, valor) => gestion.setDatosFormulario((datos) => ({ ...datos, [clave]: valor }))}
                guardar={gestion.guardarRegistro}
                cerrar={gestion.cerrarFormulario}
            />
        </section>
    );
}
