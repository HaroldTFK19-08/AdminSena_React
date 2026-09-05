import AsideAprendiz from "../../../layouts/aprendiz/Aside";
import TopBarAprendiz from "../../../layouts/aprendiz/Header";
import PerfilUsuario from "../../../components/perfil/PerfilUsuario";

const datosAprendiz = [
    { etiqueta: "Programa de formación", valor: "Análisis y Desarrollo de Software", icono: "bi-mortarboard" },
    { etiqueta: "Ficha", valor: "2975634", icono: "bi-card-text" },
    { etiqueta: "Centro de formación", valor: "Centro de Teleinformática", icono: "bi-building" },
    { etiqueta: "Correo electrónico", valor: "aprendiz@sena.edu.co", icono: "bi-envelope" },
];

export default function PerfilAprendiz() {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <AsideAprendiz />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBarAprendiz />
                <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                    <PerfilUsuario
                        rol="Aprendiz"
                        nombre="Aprendiz"
                        correo="aprendiz@sena.edu.co"
                        descripcion="Consulta y actualiza la información de tu cuenta."
                        datos={datosAprendiz}
                        completarRuta="/aprendiz/completarPerfil"
                    />
                </div>
            </main>
        </div>
    );
}
