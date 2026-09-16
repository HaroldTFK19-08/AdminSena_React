import { useMemo, useState } from "react";

export default function useListaGestion({ filas, columnas, buscarPor, titulo }) {
    const [busqueda, setBusqueda] = useState("");
    const [registros, setRegistros] = useState(filas);
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [filaEditada, setFilaEditada] = useState(null);
    const [datosFormulario, setDatosFormulario] = useState({});
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const filtradas = useMemo(() => {
        const consulta = busqueda.trim().toLowerCase();
        if (!consulta) return registros;

        return registros.filter((fila) =>
            buscarPor.some((campo) =>
                String(fila[campo] ?? "").toLowerCase().includes(consulta)
            )
        );
    }, [busqueda, registros, buscarPor]);

    const abrirRegistro = () => {
        setFilaEditada(null);
        setDatosFormulario(
            Object.fromEntries(columnas.map((columna) => [columna.clave, ""]))
        );
        setMostrarFormulario(true);
    };

    const abrirEdicion = (fila) => {
        setFilaSeleccionada(null);
        setFilaEditada(fila);
        setDatosFormulario({ ...fila });
        setMostrarFormulario(true);
    };

    const cerrarFormulario = () => {
        setMostrarFormulario(false);
        setFilaEditada(null);
    };

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
