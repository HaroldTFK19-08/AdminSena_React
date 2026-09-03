import HeaderLogin from "../../../components/auth/login/HeaderLogin";
import TituloLogin from "../../../components/auth/login/TituloLogin";
import FooterRegistro from "../../../components/auth/registro/FooterRegistro";
import FormLogin from "../../../components/auth/login/FormLogin";

export default function Login() {
    return (
        <div className="min-h-screen bg-[#081B28] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30] relative overflow-hidden">
            <div className="relative z-10 min-h-screen flex flex-col">
                <HeaderLogin />
                <main className="flex-1 flex items-center justify-center px-6 py-10">
                    <section className="w-full max-w-md">
                        <div className="bg-[#001E30]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                            <TituloLogin />
                            <div className="mt-8">
                                <FormLogin />
                            </div>
                        </div>
                    </section>
                </main>
                <FooterRegistro />
            </div>
        </div>
    );
}

