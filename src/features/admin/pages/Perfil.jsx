import { useState } from "react";
import { datosAdmin } from "../../../data/admin/DatosAdmin";
import LayoutAdmin from "../../../layouts/admin/Layout";
import PerfilUsuario from "../../perfil/components/PerfilUsuario";
import ModalEditarDatosAdmin from "../../../modals/admin/EditarDatos";


export default function PerfilAdmin() {
    const [mostrar, setMostrar] = useState(false);
    return (
        <LayoutAdmin titulo="Perfil">
            <PerfilUsuario
                rol="Administrador"
                nombre="Carlos Tejada"
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
