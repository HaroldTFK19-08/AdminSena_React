import UseFormLogin from "../../../hooks/auth/login/FormLogin";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        errors,
        validarCampos,
    } = UseFormLogin();
    const paginas = (data) => {
        if (
            data.correo === "admin123@sena.edu.co" &&
            data.password === "admin123"
        ) {
            navegacion("/admin/completarPerfil");
        } 
        else if (
            data.correo === "instructor@sena.edu.co" &&
            data.password === "instructor123"
        ) {
            navegacion("/instructor/completarPerfil");
        } 
        else if (
            data.correo === "aprendiz@sena.edu.co" &&
            data.password === "aprendiz123"
        ) {
            navegacion("/aprendiz/completarPerfil");
        }
    };
    return (
        <form
            onSubmit={handleSubmit(
                paginas,
                (errors) => console.log("Errores:", errors)
            )}
            className="space-y-5"
        >
            <div>
                <label
                    htmlFor="correo"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                    Correo Electrónico
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
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
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                    </span>
                    <input
                        id="correo"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        {...register("correo", validarCampos.correo)}
                        className={`w-full px-4 py-2.5 pl-10 bg-[#0A2A3F] border rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 ${
                            errors.correo
                                ? "border-[#8AFD5D]/50 hover:border-[#8AFD5D] focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D]"
                                : "border-white/10 hover:border-[#8AFD5D]/40 focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D]"
                        }`}
                    />
                </div>
                {errors.correo && (
                    <p className="mt-1.5 text-xs font-medium text-[#8AFD5D]">
                        {errors.correo.message}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                    Contraseña
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
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
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </span>

                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        {...register("password", validarCampos.password)}
                        className={`w-full pl-10 pr-4 py-2.5 bg-[#0A2A3F] border rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 ${
                            errors.password
                                ? "border-[#8AFD5D]/50 hover:border-[#8AFD5D] focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D]"
                                : "border-white/10 hover:border-[#8AFD5D]/40 focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D]"
                        }`}
                    />
                </div>

                {errors.password && (
                    <p className="mt-1.5 text-xs font-medium text-[#8AFD5D]">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                        type="checkbox"
                        {...register("remember")}
                        className="peer sr-only"
                    />

                    <div className="w-4 h-4 rounded-md border border-white/20 bg-[#0A2A3F] peer-checked:bg-[#8AFD5D] peer-checked:border-[#8AFD5D] transition-all duration-200 flex items-center justify-center">
                        <svg
                            className="w-3 h-3 text-[#001E30] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 12l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-300 select-none">
                        Recordarme
                    </span>
                </label>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#8AFD5D] hover:bg-[#72db4c] text-[#001E30] font-bold text-sm rounded-lg shadow-lg shadow-[#8AFD5D]/10 hover:shadow-[#8AFD5D]/20 transition-all duration-200 uppercase tracking-wider"
                >
                    Iniciar sesión
                </button>
            </div>
        </form>
    );
}

