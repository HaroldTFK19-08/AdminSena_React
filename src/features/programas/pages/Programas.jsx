import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaTitulo from "../components/TarjetaTitulo";
import TablaProgramas from "../components/TablaProgramas";

// Importación de Modales
import CrearPrograma from "../../../modals/admin/CrearPrograma";
import EditarPrograma from "../../../modals/admin/EditarPrograma";
import VerPrograma from "../../../modals/admin/VerPrograma";

export default function ProgramasAdmin() {
    // Control de visibilidad de los modales
    const [modalCrear, setModalCrear] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalVer, setModalVer] = useState(false);

    // Guardar el registro activo seleccionado de la tabla
    const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

    // Funciones para abrir los modales con sus datos
    const handleAbrirVer = (programa) => {
        setProgramaSeleccionado(programa);
        setModalVer(true);
    };

    const handleAbrirEditar = (programa) => {
        setProgramaSeleccionado(programa);
        setModalEditar(true);
    };

    return (
        <LayoutAdmin titulo="Gestión de Programas">
            <div className="space-y-6">
                
                {/* Encabezado con botón dinámico */}
                <TarjetaTitulo 
                    titulo="Programas de Formación"
                    descripcion="Administra la oferta académica y programas del SENA"
                    textoBoton="Nuevo Programa"
                    onAccion={() => setModalCrear(true)}
                />

                {/* Tabla de registros */}
                <TablaProgramas 
                    onVer={handleAbrirVer}
                    onEditar={handleAbrirEditar}
                />

                {/* Modales de la vista */}
                <CrearPrograma 
                    abrir={modalCrear} 
                    cerrar={() => setModalCrear(false)} 
                />

                <EditarPrograma 
                    abrir={modalEditar} 
                    cerrar={() => setModalEditar(false)} 
                    programa={programaSeleccionado}
                />

                <VerPrograma 
                    abrir={modalVer} 
                    cerrar={() => setModalVer(false)} 
                    programa={programaSeleccionado}
                />

            </div>
        </LayoutAdmin>
    );
}