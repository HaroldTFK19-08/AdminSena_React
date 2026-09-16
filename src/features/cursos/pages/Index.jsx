import LayoutAdmin from "../../../layouts/admin/Layout";
import ListaGestion from "../../admin/components/ListaGestion";
import { cursos } from "../../../data/admin/Cursos";

export default function IndexCursos() {
    return (
        <LayoutAdmin titulo="Cursos">
            <ListaGestion
                titulo="Programas"
                descripcion="Gestiona fichas, programas e instructores asignados."
                icono="bi-mortarboard-fill"
                botonNuevo="Registrar curso"
                placeholderBusqueda="Buscar por ficha, curso o instructor"
                buscarPor={["ficha", "nombre", "instructor"]}
                columnas={[
                    { clave: "ficha", etiqueta: "Ficha" },
                    { clave: "nombre", etiqueta: "Programa" },
                    { clave: "instructor", etiqueta: "Instructor" },
                    { clave: "aprendices", etiqueta: "Aprendices" },
                    { clave: "estado", etiqueta: "Estado", tipo: "estado" },
                ]}
                filas={cursos}
            />
        </LayoutAdmin>
    );
}
