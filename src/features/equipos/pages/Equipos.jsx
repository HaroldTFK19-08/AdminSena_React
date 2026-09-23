import LayoutAdmin from "../../../layouts/admin/Layout"
import TarjetaEquipos from "../components/TarjetaEquipos"

export default function EquiposAdmin(){
    return(
        <>
            <LayoutAdmin titulo="Gestion de Equipos">
                <TarjetaEquipos/>
            </LayoutAdmin>
        </>
    )
}