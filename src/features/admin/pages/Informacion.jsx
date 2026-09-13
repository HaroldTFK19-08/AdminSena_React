import HeaderCompletarPerfil from "../components/Header"
import FooterCompletarPerfil from "../components/Footer"
import TituloCompletarPerfil from "../components/Titulo"
import FormPerfil from "../components/FormPerfil"

export default function InformacionAdmin(){
    return(
        <>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#061923] via-[#0B3045] to-[#092536] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#061923]">
                <HeaderCompletarPerfil/>
                <main className="flex-1">
                    <TituloCompletarPerfil/>
                    <FormPerfil/>
                </main>
                <FooterCompletarPerfil/>
            </div>
        </>
    )
}