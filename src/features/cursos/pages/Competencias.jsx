import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";

// Componentes
import TarjetaTitulo from "../components/Titulo";
import TablaCompetencias from "../components/TablaCompetencias";

// Modales y Datos
import { competencias } from "../../../data/admin/Cursos";
import VerCompetencia from "../../../modals/admin/VerCompetencia";
import EditarCompetencia from "../../../modals/admin/EditarCompetencia";

export default function CompetenciasAdmin() {
    // Estado para el modal "Ver"
    const [modalVer, setModalVer] = useState(false);
    const [competenciaVer, setCompetenciaVer] = useState(null);
    // Estado para el modal "Editar"
    const [modalEditar, setModalEditar] = useState(false);
    const [competenciaEditar, setCompetenciaEditar] = useState(null);
    // Abrir modal de detalles
    const handleVer = (competencia) => {
        setCompetenciaVer(competencia);
        setModalVer(true);
    };
    // Abrir modal de edición
    const handleEditar = (competencia) => {
        setCompetenciaEditar(competencia);
        setModalEditar(true);
    };
    return (
        <LayoutAdmin titulo="Gestión de Competencias">
            <div className="p-6 sm:p-10 space-y-6 bg-slate-50 min-h-screen">               
                {/* Header de la sección */}
                <TarjetaTitulo />
                {/* Tabla de datos con filtro, búsqueda y acciones */}
                <TablaCompetencias 
                    datos={competencias} 
                    onVer={handleVer}
                    onEditar={handleEditar}
                />
                {/* Modal de Detalle (Solo lectura) */}
                <VerCompetencia 
                    abrir={modalVer} 
                    cerrar={() => setModalVer(false)} 
                    competencia={competenciaVer} 
                />
                {/* Modal de Edición */}
                <EditarCompetencia 
                    abrir={modalEditar} 
                    cerrar={() => setModalEditar(false)} 
                    competencia={competenciaEditar} 
                />
            </div>
        </LayoutAdmin>
    );
}