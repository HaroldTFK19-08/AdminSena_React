import HeaderRegistro from "../../../components/auth/registro/HeaderRegistro";
import Titulo from "../../../components/auth/registro/Titulo";
import FooterRegistro from "../../../components/auth/registro/FooterRegistro";
import FormRegistro from "../../../components/auth/registro/FormRegistro";
import FooterForm from "../../../components/auth/registro/FooterForm";

export default function Registro(){
    return(
        <>
            <div className="min-h-screen bg-[#081B28] text-slate-100 flex flex-col justify-between font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30] relative overflow-x-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#8AFD5D]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0A2A3F] rounded-full blur-3xl pointer-events-none -z-10"></div>
                <HeaderRegistro/>
                <main className="flex-1 flex items-center justify-center px-4 py-8 mt-0">
                    <div className="w-full max-w-2xl bg-[#001E30]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                        <Titulo/>
                        <FormRegistro/>
                        <FooterForm/>
                    </div>
                </main>
                <FooterRegistro/>
            </div> 
        </>
    )
}