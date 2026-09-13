import Carrusel from "../../hooks/inicio/Carrusel";

export default function Seccion3() {
    const {
        indice,
        moverCarrusel,
        setIndice
    } = Carrusel(5);
    return (
        <>
            <section className="py-16 px-6 bg-[#081B28]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <span className="text-[#8AFD5D] text-sm font-semibold uppercase tracking-wider">
                                Actualidad
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                                Noticias del{" "}
                                <span className="text-[#8AFD5D]">
                                    SENA
                                </span>
                            </h2>
                            <p className="text-slate-400 mt-2">
                                Conoce las últimas novedades de nuestra institución.
                            </p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={() => moverCarrusel(-1)}
                                className="w-10 h-10 rounded-full bg-[#0A2A3F] border border-white/10 text-white hover:bg-[#8AFD5D] hover:text-[#001E30] transition"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => moverCarrusel(1)}
                                className="w-10 h-10 rounded-full bg-[#0A2A3F] border border-white/10 text-white hover:bg-[#8AFD5D] hover:text-[#001E30] transition"
                            >
                                →
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${indice * 34}%)`
                            }}
                        >
                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                                    className="w-full h-48 object-cover"
                                    alt="Formación SENA"
                                    loading="lazy"
                                />
                                <div className="p-6">
                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Formación
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Nuevas oportunidades de formación
                                    </h3>
                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        El SENA continúa fortaleciendo sus programas de formación para los colombianos.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>
                                </div>
                            </article>
                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                                    className="w-full h-48 object-cover"
                                    alt="Tecnología SENA"
                                    loading="lazy"
                                />
                                <div className="p-6">
                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Tecnología
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Innovación y tecnología
                                    </h3>
                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        El SENA impulsa la innovación y el desarrollo tecnológico en sus centros de formación.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>
                                </div>
                            </article>
                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                                    className="w-full h-48 object-cover"
                                    alt="Aprendices SENA"
                                    loading="lazy"
                                />

                                <div className="p-6">

                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Aprendices
                                    </span>

                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Proyectos de nuestros aprendices
                                    </h3>

                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        Conoce algunos de los proyectos destacados desarrollados por aprendices del SENA.
                                    </p>

                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>

                                </div>

                            </article>

                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">

                                <img
                                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                                    className="w-full h-48 object-cover"
                                    alt="Centros de formación"
                                    loading="lazy"
                                />

                                <div className="p-6">

                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Centros
                                    </span>

                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Mejoramiento de ambientes de formación
                                    </h3>

                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        Nuevos espacios y ambientes fortalecen la experiencia de aprendizaje.
                                    </p>

                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>

                                </div>

                            </article>

                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">

                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                    className="w-full h-48 object-cover"
                                    alt="Trabajo en equipo"
                                    loading="lazy"
                                />

                                <div className="p-6">

                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Empleo
                                    </span>

                                    <h3 className="text-xl font-bold text-white mt-2">
                                        SENA fortalece la empleabilidad
                                    </h3>

                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        Nuevas estrategias buscan conectar a los aprendices con oportunidades laborales.
                                    </p>

                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>

                                </div>

                            </article>

                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">

                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                                    className="w-full h-48 object-cover"
                                    alt="Educación"
                                    loading="lazy"
                                />

                                <div className="p-6">

                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Educación
                                    </span>

                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Nuevas estrategias de aprendizaje
                                    </h3>

                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        Se implementan nuevas metodologías para mejorar el aprendizaje.
                                    </p>

                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>

                                </div>

                            </article>

                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                                    className="w-full h-48 object-cover"
                                    alt="Transformación digital"
                                    loading="lazy"
                                />
                                <div className="p-6">
                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Digital
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Transformación digital en el SENA
                                    </h3>
                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        La tecnología continúa transformando los procesos de formación.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>
                                </div>
                            </article>
                            <article className="min-w-full md:min-w-[48%] lg:min-w-[32%] bg-[#0A2A3F]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-[#8AFD5D]/50 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                    className="w-full h-48 object-cover"
                                    alt="Trabajo colaborativo"
                                    loading="lazy"
                                />
                                <div className="p-6">
                                    <span className="text-xs text-[#8AFD5D] font-semibold uppercase">
                                        Comunidad
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2">
                                        Aprendizaje y trabajo colaborativo
                                    </h3>
                                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                                        Los aprendices fortalecen sus habilidades mediante proyectos colaborativos.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-5 text-sm font-semibold text-[#8AFD5D] hover:underline"
                                    >
                                        Leer más →
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-8">
                        {[0, 1, 2, 3, 4].map((posicion) => (
                            <button
                                key={posicion}
                                onClick={() => setIndice(posicion)}
                                className={`w-3 h-3 rounded-full transition ${
                                    indice === posicion
                                        ? "bg-[#8AFD5D]"
                                        : "bg-slate-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}