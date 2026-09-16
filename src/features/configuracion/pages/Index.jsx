import LayoutAdmin from "../../../layouts/admin/Layout";
import EncabezadoSeccion from "../../admin/components/EncabezadoSeccion";
import FormConfiguracion from "../components/FormConfiguracion";

export default function IndexConfiguracion() {
    return (
        <LayoutAdmin titulo="Configuración">
            <div className="space-y-6">
                <EncabezadoSeccion
                    etiqueta="Sistema"
                    titulo="Configuración"
                    descripcion="Personaliza las opciones generales del panel administrativo."
                    icono="bi-gear-fill"
                />
                <FormConfiguracion />
            </div>
        </LayoutAdmin>
    );
}
