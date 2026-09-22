import { useState } from "react";

import LayoutAdmin from "../../../layouts/admin/Layout";
import PerfilUsuario from "../../perfil/components/PerfilUsuario";
import ModalEditarDatosAdmin from "../../../modals/admin/EditarDatos";

/**
 * Datos estáticos del administrador para visualización en el perfil.
 */
const datosAdmin = [
    { etiqueta: "Cargo", valor: "Administrador", icono: "bi-briefcase" },
    { etiqueta: "Correo electrónico", valor: "admin@sena.edu.co", icono: "bi-envelope" },
    { etiqueta: "Ciudad", valor: "Popayán", icono: "bi-geo-alt" },
    { etiqueta: "Departamento", valor: "Cauca", icono: "bi-map" },
];

/**
 * Página de Perfil del Administrador
 * Muestra la información personal del usuario administrador y permite
 * la edición de sus datos a través de un modal.
 */
export default function PerfilAdmin() {
    const [mostrar, setMostrar] = useState(false);
    return (
        <LayoutAdmin titulo="Perfil">
            <PerfilUsuario
                rol="Administrador"
                nombre="Administrador"
                correo="admin@sena.edu.co"
                descripcion="Consulta y actualiza la información de tu cuenta."
                datos={datosAdmin}
                modal={() => setMostrar(true)}
            />
            {mostrar && (
                <ModalEditarDatosAdmin
                    abrir={mostrar}
                    cerrar={() => setMostrar(false)}
                />
            )}
        </LayoutAdmin>
    );
}
