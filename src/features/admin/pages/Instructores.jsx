import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../components/ListaGestion";
import { instructores } from "../../../data/admin/Instructores";

export default function InstructoresAdmin() {
    return (
        <LayoutAdmin titulo="Instructores">
            <ListaGestion
                titulo="Instructores"
                descripcion="Consulta el personal instructor y su asignación a centros."
                icono="bi-person-workspace"
                botonNuevo="Registrar instructor"
                placeholderBusqueda="Buscar por nombre, especialidad o centro"
                buscarPor={["nombre", "especialidad", "centro", "correo"]}
                columnas={[
                    { clave: "nombre", etiqueta: "Nombre" },
                    { clave: "especialidad", etiqueta: "Especialidad" },
                    { clave: "centro", etiqueta: "Centro" },
                    { clave: "correo", etiqueta: "Correo" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={instructores}
            />
        </LayoutAdmin>
    );
}
