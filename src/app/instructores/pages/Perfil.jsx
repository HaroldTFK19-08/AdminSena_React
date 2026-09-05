import AsideInstructor from "../../../layouts/instructor/Aside";
import TopBarInstructor from "../../../layouts/instructor/TopBar";
import PerfilUsuario from "../../../components/perfil/PerfilUsuario";

const datosInstructor = [
    { etiqueta: "Área", valor: "Análisis y desarrollo de software", icono: "bi-diagram-3" },
    { etiqueta: "Centro de formación", valor: "Centro de Teleinformática", icono: "bi-building" },
    { etiqueta: "Vocación", valor: "Formación profesional", icono: "bi-person-hearts" },
    { etiqueta: "Correo electrónico", valor: "instructor@sena.edu.co", icono: "bi-envelope" },
];

export default function PerfilInstructor() {
    return (
        <div className="h-screen bg-slate-50 flex overflow-hidden">
            <AsideInstructor />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBarInstructor seccion="Perfil" titulo="Mi perfil" />
                <div className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    <PerfilUsuario
                        rol="Instructor"
                        nombre="Instructor"
                        correo="instructor@sena.edu.co"
                        descripcion="Consulta y actualiza la información de tu cuenta."
                        datos={datosInstructor}
                        completarRuta="/instructor/completarPerfil"
                    />
                </div>
            </main>
        </div>
    );
}
