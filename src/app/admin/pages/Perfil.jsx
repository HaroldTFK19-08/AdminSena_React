import AsideAdmin from "../../../layouts/admin/Aside";
import TopBar from "../../../layouts/admin/Header";
import PerfilUsuario from "../../../components/perfil/PerfilUsuario";

const datosAdmin = [
    { etiqueta: "Cargo", valor: "Administrador", icono: "bi-briefcase" },
    { etiqueta: "Correo electrónico", valor: "admin@sena.edu.co", icono: "bi-envelope" },
    { etiqueta: "Ciudad", valor: "Popayán", icono: "bi-geo-alt" },
    { etiqueta: "Departamento", valor: "Cauca", icono: "bi-map" },
];

export default function PerfilAdmin() {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <AsideAdmin />
            <main className="flex-1 min-w-0 overflow-y-auto">
                <TopBar />
                <div className="w-full max-w-[1600px] mx-auto px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
                    <PerfilUsuario
                        rol="Administrador"
                        nombre="Administrador"
                        correo="admin@sena.edu.co"
                        descripcion="Consulta y actualiza la información de tu cuenta."
                        datos={datosAdmin}
                        completarRuta="/admin/completarPerfil"
                    />
                </div>
            </main>
        </div>
    );
}
