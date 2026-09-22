import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UseFormLogin from "../../hooks/login/FormLogin";

/**
 * Componente de Formulario de Login
 * Renderiza la interfaz de entrada de credenciales y maneja la interactividad
 * del proceso de inicio de sesión.
 */
export default function FormLogin() {
    const navegacion = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorCredenciales, setErrorCredenciales] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    // Integración con el hook de validación
    const {
        register,
        handleSubmit,
        setValue,
        errors,
        validarCampos,
    } = UseFormLogin();

    /**
     * Procesa la autenticación y redirige al usuario según su rol
     * @param {Object} data - Datos recolectados del formulario
     */
    const paginas = (data) => {
        setErrorCredenciales(null);
        setSubmitting(true);

        setTimeout(() => {
            if (
                data.correo === "admin123@sena.edu.co" &&
                data.password === "admin123"
            ) {
                navegacion("/admin/completarPerfil");
            } else if (
                data.correo === "instructor@sena.edu.co" &&
                data.password === "instructor123"
            ) {
                navegacion("/instructor/completarPerfil");
            } else if (
                data.correo === "aprendiz@sena.edu.co" &&
                data.password === "aprendiz123"
            ) {
                navegacion("/aprendiz/completarPerfil");
            } else {
                setSubmitting(false);
                setErrorCredenciales(
                    "Credenciales no válidas. Puedes usar los accesos de prueba rápidos a continuación."
                );
            }
        }, 300);
    };

    /**
     * Función auxiliar para llenar campos rápidamente durante el desarrollo/pruebas
     */
    const llenarCredencialesPrueba = (correo, password) => {
        setValue("correo", correo, { shouldValidate: true });
        setValue("password", password, { shouldValidate: true });
        setErrorCredenciales(null);
    };

    return (
        <form
            onSubmit={handleSubmit(paginas)}
            className="space-y-5"
        >
            {/* Alerta de credenciales inválidas */}
            {errorCredenciales && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs animate-fadeIn">
                    <svg
                        className="w-4 h-4 text-rose-400 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{errorCredenciales}</span>
                </div>
            )}

            {/* Campo Correo */}
            <div>
                <label
                    htmlFor="correo"
                    className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5"
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
                        placeholder="ejemplo@sena.edu.co"
                        {...register("correo", validarCampos.correo)}
                        className={`w-full px-4 py-2.5 pl-10 bg-[#071926]/90 border rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 ${
                            errors.correo
                                ? "border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                                : "border-slate-700/60 hover:border-slate-500 focus:border-[#39A900] focus:ring-2 focus:ring-[#39A900]/20"
                        }`}
                    />
                </div>
                {errors.correo && (
                    <p className="mt-1.5 text-xs font-medium text-rose-400 flex items-center gap-1.5">
                        <svg
                            className="w-3.5 h-3.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>{errors.correo.message}</span>
                    </p>
                )}
            </div>

            {/* Campo Contraseña */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5"
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
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...register("password", validarCampos.password)}
                        className={`w-full pl-10 pr-11 py-2.5 bg-[#071926]/90 border rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 ${
                            errors.password
                                ? "border-rose-500/70 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                                : "border-slate-700/60 hover:border-slate-500 focus:border-[#39A900] focus:ring-2 focus:ring-[#39A900]/20"
                        }`}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-200 transition-colors"
                    >
                        {showPassword ? (
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
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                                />
                            </svg>
                        ) : (
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
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                        </svg>
                    </button>
                </div>

                {errors.password && (
                    <p className="mt-1.5 text-xs font-medium text-rose-400 flex items-center gap-1.5">
                        <svg
                            className="w-3.5 h-3.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>{errors.password.message}</span>
                    </p>
                )}
            </div>

            {/* Recordarme */}
            <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                        type="checkbox"
                        {...register("remember")}
                        className="peer sr-only"
                    />
                    <div className="w-4 h-4 rounded-md border border-slate-600 bg-[#071926] peer-checked:bg-[#39A900] peer-checked:border-[#39A900] transition-all duration-200 flex items-center justify-center">
                        <svg
                            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
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
                        Recordarme en este equipo
                    </span>
                </label>
            </div>

            {/* Botón Principal */}
            <div>
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#39A900] via-[#43B80B] to-[#5CD824] hover:from-[#329600] hover:to-[#4EC41A] text-[#031520] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#39A900]/20 hover:shadow-[#39A900]/35 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                    {submitting ? (
                        <>
                            <svg
                                className="w-4 h-4 animate-spin text-[#031520]"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                />
                            </svg>
                            <span>Iniciando sesión...</span>
                        </>
                    ) : (
                        <span>Iniciar Sesión</span>
                    )}
                </button>
            </div>

            {/* Accesos rápidos de prueba */}
            <div className="pt-2 border-t border-white/5">
                <p className="text-[10px] text-center uppercase tracking-wider text-slate-400 mb-2">
                    Accesos rápidos de prueba
                </p>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        type="button"
                        onClick={() =>
                            llenarCredencialesPrueba(
                                "admin123@sena.edu.co",
                                "admin123"
                            )
                        }
                        className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8AFD5D]/40 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all"
                    >
                        Admin
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            llenarCredencialesPrueba(
                                "instructor@sena.edu.co",
                                "instructor123"
                            )
                        }
                        className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8AFD5D]/40 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all"
                    >
                        Instructor
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            llenarCredencialesPrueba(
                                "aprendiz@sena.edu.co",
                                "aprendiz123"
                            )
                        }
                        className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8AFD5D]/40 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all"
                    >
                        Admin
                    </button>
                </div>
            </div>

            {/* Enlace a Registro */}
            <div className="text-center pt-2">
                <p className="text-xs text-slate-400">
                    ¿No tienes una cuenta?{" "}
                    <Link
                        to="/register"
                        className="text-[#8AFD5D] hover:text-[#a6ff84] font-semibold hover:underline ml-1 transition-colors"
                    >
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </form>
    );
}
