import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../../admin/components/ListaGestion";
import { computadores } from "../../../data/admin/Computadores";

export default function IndexComputadores() {
    return (
        <LayoutAdmin titulo="Computadores">
            <ListaGestion
                titulo="Equipos"
                descripcion="Controla el inventario de equipos y su asignación por ambiente."
                icono="bi-pc-display"
                botonNuevo="Registrar computador"
                placeholderBusqueda="Buscar por serial, marca o ambiente"
                buscarPor={["serial", "marca", "ambiente", "centro"]}
                columnas={[
                    { clave: "serial", etiqueta: "Serial" },
                    { clave: "marca", etiqueta: "Equipo" },
                    { clave: "ambiente", etiqueta: "Ambiente" },
                    { clave: "centro", etiqueta: "Centro" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={computadores}
            />
        </LayoutAdmin>
    );
}
