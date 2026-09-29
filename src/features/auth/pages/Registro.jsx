import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import useRegistroForm from "../hooks/useRegistroForm";
import { useAuth } from "../hooks/useAuth";
import { homeFor } from "../roleHome";
import { ROLES, TIPOS_IDENTIFICACION } from "../../../shared/constants/enums";

/** Roles que se pueden autoasignar en el registro público (el backend debe validarlo también). */
const ROLES_REGISTRO = [
    { value: ROLES.ASPIRANTE, label: "Aspirante" },
    { value: ROLES.APRENDIZ, label: "Aprendiz" },
    { value: ROLES.INSTRUCTOR, label: "Instructor" },
];

const inputCls =
    "w-full px-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] transition-all";

function Campo({ label, error, className = "", children }) {
    return (
        <div className={className}>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">{label}</label>
            {children}
            {error && <p className="text-rose-300 text-xs mt-1">{error.message}</p>}
        </div>
    );
}

/**
 * Registro de una nueva cuenta (tabla `users`).
 * Envía POST /register con las columnas del modelo: nombre_1, apellido_1, tipo_identificacion, identificacion, rol, email, password.
 */
export default function Registro() {
    const navigate = useNavigate();
    const { register: registrarCuenta } = useAuth();
    const { register, handleSubmit, setError, errors, isSubmitting, reglas } = useRegistroForm();
    const [errorGeneral, setErrorGeneral] = useState(null);

    const manejarRegistro = async (data) => {
        setErrorGeneral(null);
        try {
            const user = await registrarCuenta(data);
            navigate(user ? homeFor(user) : "/login", { replace: true });
        } catch (error) {
            if (error?.errors) {
                Object.entries(error.errors).forEach(([campo, mensajes]) => setError(campo, { type: "server", message: [].concat(mensajes)[0] }));
            }
            setErrorGeneral(error?.message || "No fue posible crear la cuenta.");
        }
    };

    return (
        <AuthShell>
            <div className="w-full max-w-2xl bg-[#001E30]/85 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 sm:p-9 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A2A3F] border border-white/10 text-[#8AFD5D] mb-3 text-xl">
                        <i className="bi bi-person-plus" />
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-wide">Crear nueva cuenta</h1>
                    <p className="text-xs text-slate-400 mt-1">Completa el formulario para registrarte en el portal institucional Admin SENA</p>
                </div>

                <form onSubmit={handleSubmit(manejarRegistro)} noValidate className="space-y-4">
                    {errorGeneral && (
                        <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                            <i className="bi bi-exclamation-circle" />
                            <span>{errorGeneral}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Campo label="Primer nombre" error={errors.nombre_1}>
                            <input type="text" placeholder="Ej: Juan" className={inputCls} {...register("nombre_1", reglas.nombre_1)} />
                        </Campo>
                        <Campo label="Segundo nombre" error={errors.nombre_2}>
                            <input type="text" placeholder="Ej: Alexander" className={inputCls} {...register("nombre_2", reglas.nombre_2)} />
                        </Campo>
                        <Campo label="Primer apellido" error={errors.apellido_1}>
                            <input type="text" placeholder="Ej: Adrada" className={inputCls} {...register("apellido_1", reglas.apellido_1)} />
                        </Campo>
                        <Campo label="Segundo apellido" error={errors.apellido_2}>
                            <input type="text" placeholder="Ej: Salazar" className={inputCls} {...register("apellido_2", reglas.apellido_2)} />
                        </Campo>
                        <Campo label="Tipo de documento" error={errors.tipo_identificacion}>
                            <select className={inputCls} {...register("tipo_identificacion", reglas.tipo_identificacion)}>
                                <option value="">Selecciona</option>
                                {TIPOS_IDENTIFICACION.map((t) => (
                                    <option key={t.value} value={t.value}>
                                        {t.label}
                                    </option>
                                ))}
                            </select>
                        </Campo>
                        <Campo label="Número de documento" error={errors.identificacion}>
                            <input type="text" inputMode="numeric" placeholder="Ej: 1061234567" className={inputCls} {...register("identificacion", reglas.identificacion)} />
                        </Campo>
                        <Campo label="Rol" error={errors.rol} className="md:col-span-2">
                            <select className={inputCls} {...register("rol", reglas.rol)}>
                                <option value="">Selecciona un rol</option>
                                {ROLES_REGISTRO.map((r) => (
                                    <option key={r.value} value={r.value}>
                                        {r.label}
                                    </option>
                                ))}
                            </select>
                        </Campo>
                        <Campo label="Correo electrónico" error={errors.email} className="md:col-span-2">
                            <input type="email" autoComplete="email" placeholder="Ej: juan.adrada@outlook.com" className={inputCls} {...register("email", reglas.email)} />
                        </Campo>
                        <Campo label="Contraseña" error={errors.password}>
                            <input type="password" autoComplete="new-password" placeholder="Mínimo 8 caracteres" className={inputCls} {...register("password", reglas.password)} />
                        </Campo>
                        <Campo label="Confirmar contraseña" error={errors.password_confirmation}>
                            <input type="password" autoComplete="new-password" placeholder="Repite la contraseña" className={inputCls} {...register("password_confirmation", reglas.password_confirmation)} />
                        </Campo>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-[#8AFD5D] hover:bg-[#72db4c] text-[#001E30] font-bold text-sm rounded-lg shadow-lg transition-all uppercase tracking-wider mt-4 disabled:opacity-70 cursor-pointer"
                    >
                        {isSubmitting ? "Registrando..." : "Registrar cuenta"}
                    </button>
                </form>

                <div className="mt-6 text-center border-t border-white/5 pt-4">
                    <p className="text-xs text-slate-400">
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="text-[#8AFD5D] font-semibold hover:underline ml-2">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </AuthShell>
    );
}
