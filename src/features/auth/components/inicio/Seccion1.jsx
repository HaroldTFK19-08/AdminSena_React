export default function Seccion1(){
    return(
        <>
            <section class="relative py-20 px-6 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#001E30] to-[#081B28]">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8AFD5D]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div class="max-w-5xl mx-auto text-center relative z-10">
                    <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#8AFD5D] mb-6">
                        <span class="w-2 h-2 rounded-full bg-[#8AFD5D] animate-ping"></span>
                        Formación a nivel nacional para todos los colombianos
                    </span>
                    <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none mb-6">
                        Construyendo futuro a través de la
                        <span class="text-[#8AFD5D] underline decoration-[#8AFD5D]/30 underline-offset-8 ml-5">
                            educación
                        </span>
                    </h1>
                    <p class="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                        Bienvenido al sistema de administración del SENA. Gestiona centros de formación, cursos, instructores y aprendices en una sola plataforma integrada.
                    </p>
                </div>
            </section>
        </>
    )
}