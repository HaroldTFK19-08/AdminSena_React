import Header from "../components/inicio/Header"
import Seccion1 from "../components/inicio/Seccion1"
import Seccion2 from "../components/inicio/Seccion2"
import Seccion3 from "../components/inicio/Seccion3"
import Seccion4 from "../components/inicio/Seccion4"
import Footer from "../components/inicio/Footer"

export default function Inicio(){
    return(
        <>
            <div className="min-h-screen flex flex-col bg-[#081B28] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30]">
                <Header/>
                <main className="flex-1">
                    <Seccion1/>
                    <Seccion2/>
                    <Seccion3/>
                    <Seccion4/>
                </main>
                <Footer/>
            </div>
        </>
    )
}