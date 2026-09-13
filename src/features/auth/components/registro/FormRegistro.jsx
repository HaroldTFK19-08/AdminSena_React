import UseRegistro from "../../hooks/registro/Form";

export default function FormRegistro() {
    const {
        register,
        handleSubmit,
        errors,
        reglas
    } = UseRegistro();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primer Nombre
                    </label>
                    <input
                        type="text"
                        placeholder="Ej: Juan"
                        {...register("nombre1", reglas.nombre1)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.nombre1 && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.nombre1.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Segundo Nombre
                    </label>
                    <input
                        type="text"
                        placeholder="Ej: Alexander"
                        {...register("nombre2", reglas.nombre2)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.nombre2 && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.nombre2.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primer Apellido
                    </label>
                    <input
                        type="text"
                        placeholder="Ej: Adrada"
                        {...register("apellido1", reglas.apellido1)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.apellido1 && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.apellido1.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Segundo Apellido
                    </label>
                    <input
                        type="text"
                        placeholder="Ej: Salazar"
                        {...register("apellido2", reglas.apellido2)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.apellido2 && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.apellido2.message}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Rol
                    </label>
                    <select
                        {...register("rol", reglas.rol)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    >
                        <option value="">
                            Seleccione un rol
                        </option>
                        <option value="aprendiz">
                            Aprendiz
                        </option>
                        <option value="instructor">
                            Instructor
                        </option>
                    </select>
                    {errors.rol && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.rol.message}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        placeholder="Ej: juan.adrada@outlook.com"
                        {...register("correo", reglas.correo)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.correo && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.correo.message}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Ej: ********"
                        {...register("password", reglas.password)}
                        className="w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"
                    />
                    {errors.password && (
                        <p className="text-[#72db4c] text-xs mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#8AFD5D] hover:bg-[#72db4c] text-[#001E30] font-bold text-sm rounded-lg shadow-lg shadow-[#8AFD5D]/10 hover:shadow-[#8AFD5D]/20 transition-all duration-200 uppercase tracking-wider mt-4"
                    >
                        Registrar Cuenta
                    </button>
                </div>
            </div>
        </form>
    );
}