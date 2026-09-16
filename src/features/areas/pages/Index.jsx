import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../../admin/components/ListaGestion";
import { areas } from "../../../data/admin/Areas";

export default function IndexAreas() {
    return (
        <LayoutAdmin titulo="Áreas">
            <ListaGestion
                titulo="Áreas"
                descripcion="Administra las áreas de formación asociadas a cada centro."
                icono="bi-diagram-3-fill"
                botonNuevo="Nueva área"
                placeholderBusqueda="Buscar por nombre, centro o coordinador"
                buscarPor={["nombre", "centro", "coordinador"]}
                columnas={[
                    { clave: "nombre", etiqueta: "Área" },
                    { clave: "centro", etiqueta: "Centro" },
                    { clave: "coordinador", etiqueta: "Coordinador" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={areas}
            />
        </LayoutAdmin>
    );
}
