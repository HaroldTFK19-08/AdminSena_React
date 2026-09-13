import UseFormPerfilInstructor from "../hooks/FormInstructor";
import { Link } from "react-router-dom";

export default function FormPerfilAprendiz() {
    const {
        register,
        handleSubmit,
        errors,
        reglas,
    } = UseFormPerfilInstructor();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-4xl mx-auto bg-[#0D3A52]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.4)] space-y-8 mb-10"
        >
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#8AFD5D]/10 border border-[#8AFD5D]/20 flex items-center justify-center">
                        <span className="text-[#8AFD5D] font-bold">
                            01
                        </span>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-white">
                            Información del aprendiz
                        </h2>

                        <p className="text-xs text-slate-400">
                            Completa la información relacionada con tu formación
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Programa de formación
                        </label>

                        <select
                            {...register("programa", reglas.programa)}
                            className="w-full px-4 py-3.5 bg-[#082A3D] border border-white/10 rounded-xl text-sm text-white outline-none transition-all duration-200 hover:border-white/20 focus:border-[#8AFD5D]/70 focus:ring-2 focus:ring-[#8AFD5D]/10"
                        >
                            <option value="">
                                Selecciona un programa
                            </option>

                            <option value="software">
                                Análisis y Desarrollo de Software
                            </option>

                            <option value="administracion">
                                Gestión Administrativa
                            </option>

                            <option value="contabilidad">
                                Contabilidad
                            </option>
                        </select>

                        {errors.programa && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.programa.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Centro de formación
                        </label>

                        <select
                            {...register("centro", reglas.centro)}
                            className="w-full px-4 py-3.5 bg-[#082A3D] border border-white/10 rounded-xl text-sm text-white outline-none transition-all duration-200 hover:border-white/20 focus:border-[#8AFD5D]/70 focus:ring-2 focus:ring-[#8AFD5D]/10"
                        >
                            <option value="">
                                Selecciona un centro
                            </option>

                            <option value="comercio-servicios">
                                Centro de Comercio y Servicios
                            </option>

                            <option value="teleinformatica">
                                Centro de Teleinformática
                            </option>
                        </select>

                        {errors.centro && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.centro.message}
                            </p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Número de ficha
                        </label>

                        <input
                            type="text"
                            placeholder="Ej. 2975634"
                            {...register("ficha", reglas.ficha)}
                            className="w-full px-4 py-3.5 bg-[#082A3D] border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 hover:border-white/20 focus:border-[#8AFD5D]/70 focus:ring-2 focus:ring-[#8AFD5D]/10"
                        />

                        {errors.ficha && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.ficha.message}
                            </p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Foto de perfil
                        </label>

                        <label className="relative w-full h-56 bg-[#082A3D] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-[#8AFD5D]/50 hover:bg-[#082A3D]/80 transition-all duration-200">
                            <div className="w-24 h-24 rounded-full bg-[#0D3A52] border-2 border-[#8AFD5D]/30 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-[#8AFD5D]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 7a3 3 0 11-6 0 3 3 0 016 0zM4 21a8 8 0 0116 0"
                                    />
                                </svg>
                            </div>

                            <p className="mt-3 text-sm font-semibold text-white">
                                Seleccionar foto
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                JPG o PNG · Máximo 2 MB
                            </p>

                            <input
                                type="file"
                                accept="image/jpeg,image/png"
                                {...register("foto", reglas.foto)}
                                className="hidden"
                            />
                        </label>
                        {errors.foto && (
                            <p className="mt-2 text-xs text-red-400 text-center">
                                {errors.foto.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-center">
                <Link to="/instructor">
                    <button
                        type="submit"
                        className="group flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#8AFD5D] text-[#061923] rounded-xl text-sm font-bold shadow-lg shadow-[#8AFD5D]/10 hover:bg-[#9CFF78] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Guardar y continuar
                    </button>
                </Link>
            </div>
        </form>
    );
}