import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UseFormLogin from "../hooks/login/FormLogin";
import Logo from "../../../assets/icons/auth/logoSena.svg";

/**
 * Página de Inicio de Sesión (Login)
 * Gestiona la autenticación de usuarios y redirige según el rol.
 */
export default function Login() {
    const navegacion = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorCredenciales, setErrorCredenciales] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit, setValue, errors, validarCampos } = UseFormLogin();

    /**
     * Maneja la validación de credenciales y la redirección.
     */
    const manejarLogin = (data) => {
        setErrorCredenciales(null);
        setSubmitting(true);

        // Simulación de validación de credenciales
        setTimeout(() => {
            // CASO ADMINISTRADOR: Redirección directa al Home de Admin
            if (data.correo === "admin123@sena.edu.co" && data.password === "admin123") {
                navegacion("/admin"); 
            } else if (data.correo === "instructor@sena.edu.co" && data.password === "instructor123") {
                navegacion("/instructor/completarPerfil");
            } else if (data.correo === "aprendiz@sena.edu.co" && data.password === "aprendiz123") {
                navegacion("/aprendiz/completarPerfil");
            } else {
                setSubmitting(false);
                setErrorCredenciales("Credenciales no válidas. Prueba los accesos rápidos abajo.");
            }
        }, 300);
    };

    const llenarPrueba = (correo, password) => {
        setValue("correo", correo, { shouldValidate: true });
        setValue("password", password, { shouldValidate: true });
        setErrorCredenciales(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#061521] via-[#081B28] to-[#040E17] text-slate-100 font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#39A900]/15 via-[#0A2A3F]/25 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] bg-[#0A2A3F]/35 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#8AFD5D]/5 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10 min-h-screen flex flex-col justify-between">
                <header className="sticky top-0 z-50 w-full bg-[#081B28]/80 backdrop-blur-md border-b border-white/5">
                    <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src={Logo} alt="Logo SENA" className="h-10 w-10 transition-transform duration-200 group-hover:scale-105" />
                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold text-white tracking-wider uppercase leading-tight">
                                    ADMIN <span className="text-[#8AFD5D]">SENA</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Portal Institucional</span>
                            </div>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            <span>Volver al Inicio</span>
                        </Link>
                    </div>
                </header>

                <main className="flex-1 flex items-center justify-center px-4 py-10">
                    <section className="w-full max-w-md">
                        <div className="bg-[#001E30]/85 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 sm:p-9 shadow-2xl relative">
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8AFD5D]/40 to-transparent" />
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#39A900]/20 via-[#0A2A3F] to-[#0A2A3F] border border-[#8AFD5D]/30 text-[#8AFD5D] mb-4 shadow-lg">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <h1 className="text-2xl font-black text-white tracking-tight">Iniciar Sesión</h1>
                                <p className="text-xs text-slate-400 mt-1.5 max-w-xs mx-auto">Ingresa tus credenciales institucionales para acceder</p>
                            </div>

                            <form onSubmit={handleSubmit(manejarLogin)} className="space-y-5">
                                {errorCredenciales && (
                                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                                        <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{errorCredenciales}</span>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">Correo Electrónico</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                                        </span>
                                        <input type="email" placeholder="ejemplo@sena.edu.co" {...register("correo", validarCampos.correo)} 
                                            className={`w-full px-4 py-2.5 pl-10 bg-[#071926]/90 border rounded-xl text-sm text-white outline-none transition-all ${errors.correo ? "border-rose-500" : "border-slate-700 focus:border-[#39A900]"}`} />
                                    </div>
                                    {errors.correo && <p className="mt-1.5 text-xs text-rose-400">{errors.correo.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">Contraseña</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input type={showPassword ? "text" : "password"} placeholder="••••••••" {...register("password", validarCampos.password)} 
                                            className={`w-full pl-10 pr-11 py-2.5 bg-[#071926]/90 border rounded-xl text-sm text-white outline-none transition-all ${errors.password ? "border-rose-500" : "border-slate-700 focus:border-[#39A900]"}`} />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                                            {showPassword ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && <p className="mt-1.5 text-xs text-rose-400">{errors.password.message}</p>}
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2.5 cursor-pointer">
                                        <input type="checkbox" {...register("remember")} className="peer sr-only" />
                                        <div className="w-4 h-4 rounded-md border border-slate-600 bg-[#071926] peer-checked:bg-[#39A900] peer-checked:border-[#39A900] transition-all flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-xs text-slate-300 select-none">Recordarme</span>
                                    </label>
                                </div>

                                <button type="submit" disabled={submitting} className="w-full py-3 px-4 bg-gradient-to-r from-[#39A900] to-[#5CD824] text-[#031520] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer">
                                    {submitting ? (
                                        <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg><span>Iniciando...</span></>
                                    ) : <span>Iniciar Sesión</span>}
                                </button>

                                <div className="pt-2 border-t border-white/5">
                                    <p className="text-[10px] text-center uppercase text-slate-400 mb-2">Accesos rápidos de prueba</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        <button type="button" onClick={() => llenarPrueba("admin123@sena.edu.co", "admin123")} className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all">Admin</button>
                                        <button type="button" onClick={() => llenarPrueba("instructor@sena.edu.co", "instructor123")} className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all">Instructor</button>
                                        <button type="button" onClick={() => llenarPrueba("aprendiz@sena.edu.co", "aprendiz123")} className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-[#8AFD5D] transition-all">Aprendiz</button>
                                    </div>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-xs text-slate-400">¿No tienes cuenta? <Link to="/register" className="text-[#8AFD5D] font-semibold hover:underline ml-1">Regístrate aquí</Link></p>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

                <footer className="py-4 text-center text-xs text-slate-500">© SENA. Todos los derechos reservados.</footer>
            </div>
        </div>
    );
}
