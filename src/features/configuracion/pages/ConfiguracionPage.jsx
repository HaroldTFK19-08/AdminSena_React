import { useState } from "react";
import PageHeader from "../../../shared/components/ui/PageHeader";
import { useToast } from "../../../shared/components/ui/Toast";
import SeccionConfiguracion from "../components/SeccionConfiguracion";
import InterruptorConfiguracion from "../components/InterruptorConfiguracion";

/**
 * Preferencias de la plataforma.
 * ⚠️ El modelo relacional no tiene tabla de configuración: estos valores aún no se persisten en el backend.
 */
export default function ConfiguracionPage() {
    const toast = useToast();
    // Preferencias generales de la plataforma
    const [nombreCentro, setNombreCentro] = useState("Centro Teleinformático y de Producción Industrial (CTPI)");
    const [idioma, setIdioma] = useState("Español");
    const [zonaHoraria, setZonaHoraria] = useState("America/Bogota");

    // Notificaciones
    const [notificarCorreo, setNotificarCorreo] = useState(true);
    const [notificarFichas, setNotificarFichas] = useState(true);
    const [notificarOfertas, setNotificarOfertas] = useState(false);

    // Seguridad
    const [autenticacionDoble, setAutenticacionDoble] = useState(false);
    const [cierreSesionAutomatico, setCierreSesionAutomatico] = useState(true);

    const handleGuardar = (e) => {
        e.preventDefault();
        // TODO backend: crear endpoint de configuración (no existe en el modelo relacional actual).
        toast.info("Preferencias aplicadas en esta sesión. Aún no se guardan en el servidor.");
    };

    return (
        <form onSubmit={handleGuardar} className="space-y-6">
                <PageHeader icon="bi-gear-fill" title="Configuración" description="Preferencias generales, notificaciones y seguridad de la plataforma." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SeccionConfiguracion titulo="Preferencias Generales" icono="bi-sliders">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nombre del Centro</label>
                            <input
                                type="text"
                                value={nombreCentro}
                                onChange={(e) => setNombreCentro(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Idioma</label>
                            <select
                                value={idioma}
                                onChange={(e) => setIdioma(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all cursor-pointer"
                            >
                                <option value="Español">Español</option>
                                <option value="Inglés">Inglés</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Zona Horaria</label>
                            <select
                                value={zonaHoraria}
                                onChange={(e) => setZonaHoraria(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:border-[#081B2B] focus:bg-white transition-all cursor-pointer"
                            >
                                <option value="America/Bogota">América/Bogotá (GMT-5)</option>
                                <option value="America/Mexico_City">América/Ciudad de México (GMT-6)</option>
                            </select>
                        </div>
                    </SeccionConfiguracion>

                    <SeccionConfiguracion titulo="Notificaciones" icono="bi-bell-fill">
                        <InterruptorConfiguracion
                            etiqueta="Notificaciones por correo"
                            descripcion="Recibe alertas importantes en tu correo institucional"
                            activo={notificarCorreo}
                            onCambiar={() => setNotificarCorreo(!notificarCorreo)}
                        />
                        <InterruptorConfiguracion
                            etiqueta="Cambios en fichas"
                            descripcion="Notifica cuando una ficha cambie de estado"
                            activo={notificarFichas}
                            onCambiar={() => setNotificarFichas(!notificarFichas)}
                        />
                        <InterruptorConfiguracion
                            etiqueta="Nuevas ofertas"
                            descripcion="Notifica cuando se publique una nueva oferta"
                            activo={notificarOfertas}
                            onCambiar={() => setNotificarOfertas(!notificarOfertas)}
                        />
                    </SeccionConfiguracion>

                    <SeccionConfiguracion titulo="Seguridad" icono="bi-shield-lock-fill">
                        <InterruptorConfiguracion
                            etiqueta="Autenticación en dos pasos"
                            descripcion="Añade una capa extra de seguridad al iniciar sesión"
                            activo={autenticacionDoble}
                            onCambiar={() => setAutenticacionDoble(!autenticacionDoble)}
                        />
                        <InterruptorConfiguracion
                            etiqueta="Cierre de sesión automático"
                            descripcion="Cierra la sesión tras un periodo de inactividad"
                            activo={cierreSesionAutomatico}
                            onCambiar={() => setCierreSesionAutomatico(!cierreSesionAutomatico)}
                        />
                    </SeccionConfiguracion>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-[#8AFD5D] text-[#081B2B] font-bold shadow-md shadow-[#8AFD5D]/20 flex items-center gap-2"
                    >
                        <i className="bi bi-check-lg" />
                        Guardar Cambios
                    </button>
                </div>
            </form>
    );
}
