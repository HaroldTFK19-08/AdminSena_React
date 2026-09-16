import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../components/ListaGestion";
import { aprendices } from "../../../data/admin/Aprendices";

export default function AprendicesAdmin() {
    return (
        <LayoutAdmin titulo="Aprendices">
            <ListaGestion
                titulo="Aprendices"
                descripcion="Consulta los aprendices registrados y su estado de formación."
                icono="bi-people-fill"
                botonNuevo="Registrar aprendiz"
                placeholderBusqueda="Buscar por nombre, documento o ficha"
                buscarPor={["nombre", "documento", "ficha", "programa"]}
                columnas={[
                    { clave: "nombre", etiqueta: "Nombre" },
                    { clave: "documento", etiqueta: "Documento" },
                    { clave: "ficha", etiqueta: "Ficha" },
                    { clave: "programa", etiqueta: "Programa" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={aprendices}
            />
        </LayoutAdmin>
    );
}
