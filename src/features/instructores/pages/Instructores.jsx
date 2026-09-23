import { useState } from "react";
import LayoutAdmin from "../../../layouts/admin/Layout";
import TarjetaTituloInstructores from "../components/TarjetaTitulo";
import TablaInstructores from "../components/TablaInstructores";
import VerInstructor from "../../../modals/admin/VerInstructor";
import { instructores } from "../../../data/admin/Instructores";

export default function InstructoresAdmin() {
    const [modalVer, setModalVer] = useState(false);
    const [instructorVer, setInstructorVer] = useState(null);

    const handleVer = (instructor) => {
        setInstructorVer(instructor);
        setModalVer(true);
    };

    return (
        <LayoutAdmin titulo="Gestión de Instructores">
            <div className="p-6 sm:p-10 space-y-6 bg-slate-50 min-h-screen">
                <TarjetaTituloInstructores />

                <TablaInstructores 
                    datos={instructores} 
                    onVer={handleVer} 
                />

                <VerInstructor 
                    abrir={modalVer} 
                    cerrar={() => setModalVer(false)} 
                    instructor={instructorVer} 
                />
            </div>
        </LayoutAdmin>
    );
}