import { Link } from "react-router-dom";
import UseRegistro from "../hooks/registro/Form";
import Logo from "../../../assets/icons/auth/logoSena.svg";

export default function Registro() {
    // --- LÓGICA DEL FORMULARIO ---
    const { register, handleSubmit, errors, reglas } = UseRegistro();
    
    const manejarRegistro = (data) => {
        console.log("Datos registrados:", data);
    };

    return (
        <div className="min-h-screen bg-[#081B28] text-slate-100 flex flex-col justify-between font-sans antialiased selection:bg-[#8AFD5D] selection:text-[#001E30] relative overflow-x-hidden">
            
            {/* --- FONDO DECORATIVO --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#8AFD5D]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0A2A3F] rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* --- BARRA DE NAVEGACIÓN --- */}
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

            {/* --- CONTENIDO PRINCIPAL --- */}
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <div className="w-full max-w-2xl bg-[#001E30]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                    
                    {/* TÍTULO */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A2A3F] border border-white/10 text-[#8AFD5D] mb-3 shadow-inner">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-wide">Crear Nueva Cuenta</h1>
                        <p className="text-xs text-slate-400 mt-1">Completa el formulario para registrarte en el portal institucional Admin Sena</p>
                    </div>

                    {/* FORMULARIO */}
                    <form onSubmit={handleSubmit(manejarRegistro)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Primer Nombre</label>
                                <input type="text" placeholder="Ej: Juan" {...register("nombre1", reglas.nombre1)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.nombre1 && <p className="text-[#72db4c] text-xs mt-1">{errors.nombre1.message}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Segundo Nombre</label>
                                <input type="text" placeholder="Ej: Alexander" {...register("nombre2", reglas.nombre2)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.nombre2 && <p className="text-[#72db4c] text-xs mt-1">{errors.nombre2.message}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Primer Apellido</label>
                                <input type="text" placeholder="Ej: Adrada" {...register("apellido1", reglas.apellido1)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.apellido1 && <p className="text-[#72db4c] text-xs mt-1">{errors.apellido1.message}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Segundo Apellido</label>
                                <input type="text" placeholder="Ej: Salazar" {...register("apellido2", reglas.apellido2)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.apellido2 && <p className="text-[#72db4c] text-xs mt-1">{errors.apellido2.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Rol</label>
                                <select {...register("rol", reglas.rol)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#8AFD5D] transition-all">
                                    <option value="">Seleccione un rol</option>
                                    <option value="aprendiz">Aprendiz</option>
                                    <option value="instructor">Instructor</option>
                                </select>
                                {errors.rol && <p className="text-[#72db4c] text-xs mt-1">{errors.rol.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Correo Electrónico</label>
                                <input type="email" placeholder="Ej: juan.adrada@outlook.com" {...register("correo", reglas.correo)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.correo && <p className="text-[#72db4c] text-xs mt-1">{errors.correo.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Contraseña</label>
                                <input type="password" placeholder="Ej: ********" {...register("password", reglas.password)} className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all" />
                                {errors.password && <p className="text-[#72db4c] text-xs mt-1">{errors.password.message}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="w-full py-3 px-4 bg-[#8AFD5D] hover:bg-[#72db4c] text-[#001E30] font-bold text-sm rounded-lg shadow-lg hover:shadow-[#8AFD5D]/20 transition-all duration-200 uppercase tracking-wider mt-4">
                                    Registrar Cuenta
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-6 text-center border-t border-white/5 pt-4">
                        <p className="text-xs text-slate-400">
                            ¿Ya tienes una cuenta? <Link to="/login" className="text-[#8AFD5D] font-semibold hover:underline ml-4">Inicia sesión aquí</Link>
                        </p>
                    </div>
                </div>
            </main>
            <footer className="py-4 text-center text-xs text-slate-500">© SENA. Todos los derechos reservados.</footer>
        </div>
    );
}
