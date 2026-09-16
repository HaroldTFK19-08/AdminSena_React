import LayoutAdmin from "../../../layouts/admin/Layout";
import EncabezadoSeccion from "../../admin/components/EncabezadoSeccion";
import TarjetasReportes from "../components/TarjetasReportes";

export default function IndexReportes() {
    return (
        <LayoutAdmin titulo="Reportes">
            <div className="space-y-6">
                <EncabezadoSeccion
                    etiqueta="Sistema"
                    titulo="Reportes"
                    descripcion="Resumen de indicadores del sistema administrativo."
                    icono="bi-bar-chart-fill"
                />
                <TarjetasReportes />
            </div>
        </LayoutAdmin>
    );
}
