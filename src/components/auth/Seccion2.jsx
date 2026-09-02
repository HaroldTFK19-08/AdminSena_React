export default function Seccion2(){
    return(
        <>
            <section id="mision-vision" class="relative py-20 px-6 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#001E30] to-[#081B28]">
                <div class="text-center mb-14">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider mb-3">
                        Nuestra <span class="text-[#8AFD5D]">Identidad</span>
                    </h2>
                    <div class="w-16 h-1 bg-[#8AFD5D] mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="relative bg-[#0A2A3F]/60 border border-white/10 rounded-2xl p-8 hover:border-[#8AFD5D]/50 transition-all duration-300 group shadow-xl">
                        <div class="absolute -top-6 left-8 bg-[#001E30] border border-white/10 p-3 rounded-xl group-hover:border-[#8AFD5D] transition-colors">
                            <svg class="w-6 h-6 text-[#8AFD5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white uppercase tracking-wide mt-2 mb-4">
                            Misión del SENA
                        </h3>
                        <p class="text-slate-300 text-sm leading-relaxed">
                            El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
                        </p>
                    </div>
                    <div class="relative bg-[#0A2A3F]/60 border border-white/10 rounded-2xl p-8 hover:border-[#8AFD5D]/50 transition-all duration-300 group shadow-xl">
                        <div class="absolute -top-6 left-8 bg-[#001E30] border border-white/10 p-3 rounded-xl group-hover:border-[#8AFD5D] transition-colors">
                            <svg class="w-6 h-6 text-[#8AFD5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white uppercase tracking-wide mt-2 mb-4">
                            Visión del SENA
                        </h3>
                        <p class="text-slate-300 text-sm leading-relaxed">
                            El SENA será una organización de conocimiento para todos los colombianos, innovadora permanentemente en sus procesos y con estándares internacionales de calidad en su gestión, contribuyendo eficazmente a la productividad del país y a la equidad social.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}