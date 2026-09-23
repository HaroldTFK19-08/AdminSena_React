import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaTituloAreas from "../components/AreaTitulo";
import TablaAreas from "../components/TablaAreas";
import CrearArea from "../../../modals/admin/CrearArea";
import VerArea from "../../../modals/admin/VerArea";
import EditarArea from "../../../modals/admin/EditarArea";
import { areas } from "../../../data/admin/Areas";

export default function AreasAdmin() {
    const [modalCrear, setModalCrear] = useState(false);
    const [modalVer, setModalVer] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [areaSeleccionada, setAreaSeleccionada] = useState(null);

    const handleVer = (area) => {
        setAreaSeleccionada(area);
        setModalVer(true);
    };

    const handleEditar = (area) => {
        setAreaSeleccionada(area);
        setModalEditar(true);
    };

    return (
        <LayoutAdmin titulo="Gestión de Áreas">
            <div className="p-6 sm:p-10 space-y-6 bg-slate-50 min-h-screen">
                <TarjetaTituloAreas 
                    accion={
                        <button 
                            onClick={() => setModalCrear(true)}
                            className="bg-[#8AFD5D] hover:bg-[#72e04d] text-[#081B2B] font-bold px-5 py-3 rounded-xl transition-all shadow-md shadow-[#8AFD5D]/20 flex items-center justify-center gap-2 text-sm"
                        >
                            <i className="bi bi-plus-lg text-lg" />
                            <span>Nueva Área</span>
                        </button>
                    }
                />

                <TablaAreas 
                    datos={areas} 
                    onVer={handleVer} 
                    onEditar={handleEditar} 
                />

                <CrearArea abrir={modalCrear} cerrar={() => setModalCrear(false)} />
                <VerArea abrir={modalVer} cerrar={() => setModalVer(false)} area={areaSeleccionada} />
                <EditarArea abrir={modalEditar} cerrar={() => setModalEditar(false)} area={areaSeleccionada} />
            </div>
        </LayoutAdmin>
    );
}