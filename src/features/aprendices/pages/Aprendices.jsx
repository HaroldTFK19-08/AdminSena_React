import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaTitulo from "../Components/TarjetaTitulo";
import TablaAprendices from "../components/TablaAprendices";

import { aprendices } from "../../../data/admin/Aprendices";
import VerAprendiz from "../../../modals/admin/VerAprendiz";

export default function AprendicesAdmin() {
    // Estado booleano para controlar si el modal está visible u oculto
    const [modalVer, setModalVer] = useState(false);
    
    // Estado para almacenar los datos del aprendiz seleccionado al hacer clic en 'Ver'
    const [aprendizSeleccionado, setAprendizSeleccionado] = useState(null);

    // Handler ejecutado desde el componente hijo TablaAprendices
    const handleVer = (aprendiz) => {
        setAprendizSeleccionado(aprendiz);
        setModalVer(true);
    };

    return (
        <LayoutAdmin titulo="Gestión de Aprendices">
            {/* Tarjeta decorativa de título de módulo (sin botón de acción ya que es de solo consulta) */}
            <TarjetaTitulo />
            {/* Contenedor de la tabla pasándole la data importada y la función disparadora */}
            <div className="my-5">
                <TablaAprendices 
                    datos={aprendices} 
                    onVer={handleVer}
                />
            </div>
            {/* Inyección del modal controlado vía state */}
            <VerAprendiz 
                abrir={modalVer} 
                cerrar={() => setModalVer(false)} 
                aprendiz={aprendizSeleccionado} 
            />
        </LayoutAdmin>
    );
}