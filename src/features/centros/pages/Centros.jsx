import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaTitulo from "../Components/TarjetaTitulo";
import TablaCentros from "../Components/TablaCentros";
// Importación de datos
import { centros } from "../../../data/admin/Centros";
// Importación de Modales
import CrearCentro from "../../../modals/admin/CrearCentro";
import VerCentro from "../../../modals/admin/VerCentro";
import EditarCentro from "../../../modals/admin/EditarCentro";

export default function CentrosAdmin() {
    // Estado para el modal de creación
    const [modalCrear, setModalCrear] = useState(false);
    // Estados para los modales de ver y editar
    const [modalVer, setModalVer] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [centroSeleccionado, setCentroSeleccionado] = useState(null);
    // Manejadores de acciones
    const handleVer = (centro) => {
        setCentroSeleccionado(centro);
        setModalVer(true);
    };
    const handleEditar = (centro) => {
        setCentroSeleccionado(centro);
        setModalEditar(true);
    };
    return (
        <LayoutAdmin titulo="Gestión de Centros">
            <TarjetaTitulo 
                accion={
                    <button 
                        className="bg-[#8AFD5D] hover:bg-[#72e04d] text-[#081B2B] font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-md shadow-[#8AFD5D]/20 flex items-center gap-2 text-sm cursor-pointer" 
                        onClick={() => setModalCrear(true)}
                    >
                        <i className="bi bi-plus-lg text-lg" />
                        Nuevo Centro
                    </button>
                }
            />
            <div className="my-5">
                <TablaCentros 
                    datos={centros} 
                    onVer={handleVer}
                    onEditar={handleEditar}
                />
            </div>
            {/* Modal para Crear Centro */}
            <CrearCentro 
                abrir={modalCrear} 
                cerrar={() => setModalCrear(false)} 
            />
            {/* Modal para Ver Detalle del Centro */}
            <VerCentro 
                abrir={modalVer} 
                cerrar={() => setModalVer(false)} 
                centro={centroSeleccionado}
            />
            {/* Modal para Editar Centro */}
            <EditarCentro 
                abrir={modalEditar} 
                cerrar={() => setModalEditar(false)} 
                centro={centroSeleccionado}
            />
        </LayoutAdmin>
    );
}