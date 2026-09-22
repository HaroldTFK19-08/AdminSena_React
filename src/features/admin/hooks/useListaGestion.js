import { useMemo, useState } from "react";

/**
 * Hook genérico para gestionar tablas de datos (CRUD local).
 * Permite filtrar registros, abrir formularios de creación/edición y eliminar elementos.
 * 
 * @param {Object} params - Configuración de la lista
 * @param {Array} params.filas - Datos iniciales de la tabla
 * @param {Array} params.columnas - Definición de columnas (clave y etiqueta)
 * @param {Array} params.buscarPor - Campos sobre los cuales se realizará la búsqueda
 * @param {string} params.titulo - Nombre de la entidad (usado en mensajes de confirmación)
 */
export default function useListaGestion({ filas, columnas, buscarPor, titulo }) {
    const [busqueda, setBusqueda] = useState("");
    const [registros, setRegistros] = useState(filas);
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [filaEditada, setFilaEditada] = useState(null);
    const [datosFormulario, setDatosFormulario] = useState({});
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    /**
     * Registros filtrados basados en la entrada de búsqueda.
     * Utiliza useMemo para evitar recalcular la lista en cada renderizado.
     */
    const filtradas = useMemo(() => {
        const consulta = busqueda.trim().toLowerCase();
        if (!consulta) return registros;

        return registros.filter((fila) =>
            buscarPor.some((campo) =>
                String(fila[campo] ?? "").toLowerCase().includes(consulta)
            )
        );
    }, [busqueda, registros, buscarPor]);

    /**
     * Inicializa el formulario para crear un nuevo registro vacío.
     */
    const abrirRegistro = () => {
        setFilaEditada(null);
        setDatosFormulario(
            Object.fromEntries(columnas.map((columna) => [columna.clave, ""]))
        );
        setMostrarFormulario(true);
    };

    /**
     * Carga los datos de un registro existente en el formulario para su edición.
     */
    const abrirEdicion = (fila) => {
        setFilaSeleccionada(null);
        setFilaEditada(fila);
        setDatosFormulario({ ...fila });
        setMostrarFormulario(true);
    };

    /**
     * Cierra el modal del formulario y limpia el estado de edición.
     */
    const cerrarFormulario = () => {
        setMostrarFormulario(false);
        setFilaEditada(null);
    };

    /**
     * Guarda los cambios del formulario.
     * Si hay una fila editada, actualiza el registro; de lo contrario, crea uno nuevo.
     */
    const guardarRegistro = (evento) => {
        evento.preventDefault();

        if (filaEditada) {
            setRegistros((registrosActuales) =>
                registrosActuales.map((registro) =>
                    registro.id === filaEditada.id
                        ? { ...registro, ...datosFormulario, id: registro.id }
                        : registro
                )
            );
        } else {
            const nuevoRegistro = {
                ...datosFormulario,
                id: Math.max(0, ...registros.map((registro) => registro.id)) + 1,
            };
            setRegistros((registrosActuales) => [...registrosActuales, nuevoRegistro]);
        }

        cerrarFormulario();
    };

    /**
     * Elimina un registro previa confirmación del usuario.
     */
    const eliminarRegistro = (fila) => {
        const confirmado = window.confirm(
            `¿Deseas eliminar este registro de ${titulo.toLowerCase()}?`
        );
        if (!confirmado) return;

        setRegistros((registrosActuales) =>
            registrosActuales.filter((registro) => registro.id !== fila.id)
        );
    };

    return {
        busqueda,
        setBusqueda,
        registros,
        filtradas,
        filaSeleccionada,
        setFilaSeleccionada,
        filaEditada,
        datosFormulario,
        setDatosFormulario,
        mostrarFormulario,
        abrirRegistro,
        abrirEdicion,
        cerrarFormulario,
        guardarRegistro,
        eliminarRegistro,
    };
}
