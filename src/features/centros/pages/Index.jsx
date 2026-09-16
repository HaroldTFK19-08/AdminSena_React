import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../../admin/components/ListaGestion";
import { centros } from "../../../data/admin/Centros";

export default function IndexCentros() {
    return (
        <LayoutAdmin titulo="Centros de formación">
            <ListaGestion
                titulo="Centros de formación"
                descripcion="Consulta y gestiona los centros de formación registrados en el sistema."
                icono="bi-building-fill"
                botonNuevo="Registrar centro"
                placeholderBusqueda="Buscar por nombre, ciudad o regional"
                buscarPor={["nombre", "ciudad", "regional"]}
                columnas={[
                    { clave: "nombre", etiqueta: "Centro" },
                    { clave: "ciudad", etiqueta: "Ciudad" },
                    { clave: "regional", etiqueta: "Regional" },
                    { clave: "programas", etiqueta: "Programas" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={centros}
            />
        </LayoutAdmin>
    );
}
