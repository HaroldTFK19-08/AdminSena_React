import TituloCompletarPerfil from "../../admin/components/Titulo";
import HeaderCompletarPerfil from "../../admin/components/Header";
import FooterCompletarPerfil from "../../admin/components/Footer";
import FormPerfilInstructor from "../components/FormPerfil";

export default function InformacionInstructor(){
    return(
        <>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#061923] via-[#0B3045] to-[#092536] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#061923]">
                <HeaderCompletarPerfil/>
                <main className="flex-1">
                    <TituloCompletarPerfil/>
                    <FormPerfilInstructor/>
                </main>
                <FooterCompletarPerfil/>
            </div>
        </>
    )
}