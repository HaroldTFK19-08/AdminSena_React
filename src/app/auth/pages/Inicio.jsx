import Header from "../../../components/auth/Header"
import Seccion1 from "../../../components/auth/Seccion1"
import Seccion2 from "../../../components/auth/Seccion2"

export default function Inicio(){
    return(
        <>
            <Header/>
            <main className="flex-1">
                <Seccion1/>
                <Seccion2/>
            </main>
        </>
    )
}