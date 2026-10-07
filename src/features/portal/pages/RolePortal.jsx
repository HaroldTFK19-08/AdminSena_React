import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { calificacionesResource } from "../../resultados/calificaciones.resource";
import { ENDPOINTS } from "../../../shared/api/endpoints";
import { createResourceService } from "../../../shared/api/createResourceService";
import CrudPage from "../../../shared/components/crud/CrudPage";
import { defineResource, labelFor, registerResources } from "../../../shared/resources/registry";
import { iniciales, nombreCompleto } from "../../../shared/utils/format";
import { ROLES } from "../../../shared/constants/enums";
import Logo from "../../../assets/icons/auth/logoSena.svg";

const portalApprenticesResource = defineResource({
    key: "portal-apprentices",
    endpoint: ENDPOINTS.apprentices,
    singular: "Aprendiz",
    plural: "Aprendices asignados",
    display: (row) => row.user?.nombre_completo || [row.user?.nombre_1, row.user?.apellido_1].filter(Boolean).join(" ") || `#${row.id}`,
    service: createResourceService(ENDPOINTS.apprentices),
});

const portalResultsResource = defineResource({
    key: "portal-results",
    endpoint: ENDPOINTS.results,
    singular: "Resultado",
    plural: "Resultados asignados",
    display: (row) => row.nombre ?? row.codigo ?? `#${row.id}`,
    service: createResourceService(ENDPOINTS.results),
});

const portalInstructorGradesResource = defineResource({
    ...calificacionesResource,
    key: "portal-instructor-grades",
    fields: calificacionesResource.fields.map((field) => {
        if (field.name === "result_id") return { ...field, ref: "portal-results" };
        if (field.name === "apprentice_id") return { ...field, ref: "portal-apprentices" };
        if (field.name === "teacher_id") return { ...field, type: "text" };
        return field;
    }),
});

const portalApprenticeGradesResource = defineResource({
    ...calificacionesResource,
    key: "portal-apprentice-grades",
    fields: calificacionesResource.fields
        .filter((field) => ["result_id", "estado_resultado", "comentarios"].includes(field.name))
        .map((field) => ({
            ...field,
            ...(field.name === "result_id"
                ? { type: "text", text: (row) => row.result?.nombre ?? `#${row.result_id}` }
                : {}),
            form: false,
        })),
});

const aspiranteOfertasResource = defineResource({
    key: "portal-offers",
    endpoint: ENDPOINTS.offers,
    singular: "Oferta",
    plural: "Ofertas disponibles",
    icon: "bi-megaphone-fill",
    description: "Convocatorias publicadas disponibles para inscripción.",
    display: (row) => row.program?.nombre ?? `Programa #${row.program_id}`,
    fields: [
        {
            name: "program_id",
            label: "Programa",
            type: "text",
            table: true,
            text: (row) => row.program?.nombre ?? `#${row.program_id}`,
        },
        { name: "capacidad", label: "Cupos", type: "number", table: true },
        { name: "fecha_convocatoria", label: "Inicio", type: "date", table: true },
        { name: "fecha_fin_convocatoria", label: "Cierre", type: "date", table: true },
        { name: "publicada", label: "Publicada", type: "checkbox", table: true },
    ],
    service: createResourceService(ENDPOINTS.offers),
});

const aspiranteInscripcionesResource = defineResource({
    key: "portal-registrations",
    endpoint: ENDPOINTS.registrations,
    singular: "Inscripción",
    plural: "Mis inscripciones",
    icon: "bi-journal-check",
    description: "Consulta tus postulaciones y regístrate a una oferta disponible.",
    display: (row, lookup) => labelFor("portal-offers", row.offer_id, lookup, row.offer),
    fields: [
        { name: "offer_id", label: "Oferta", type: "reference", ref: "portal-offers", required: true, table: true, wide: true },
        { name: "estado", label: "Estado", type: "text", form: false, table: true },
        { name: "Fecha_inscripcion", label: "Fecha de inscripción", type: "datetime", form: false, table: true },
    ],
    service: createResourceService(ENDPOINTS.registrations),
});

registerResources([portalApprenticesResource, portalResultsResource, aspiranteOfertasResource]);

function PortalContent({ role }) {
    if (role === ROLES.INSTRUCTOR) {
        return <CrudPage resource={portalInstructorGradesResource} canDelete={false} />;
    }

    if (role === ROLES.APRENDIZ) {
        return <CrudPage resource={portalApprenticeGradesResource} readOnly />;
    }

    return (
        <div className="space-y-8">
            <CrudPage resource={aspiranteOfertasResource} readOnly />
            <CrudPage resource={aspiranteInscripcionesResource} canDelete={false} />
        </div>
    );
}

export default function RolePortal({ role }) {
    const { user, logout } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const roleLabel = useMemo(
        () => ({
            [ROLES.INSTRUCTOR]: "Panel de instructor",
            [ROLES.APRENDIZ]: "Panel de aprendiz",
            [ROLES.ASPIRANTE]: "Panel de aspirante",
        })[role],
        [role],
    );
    const home = {
        [ROLES.INSTRUCTOR]: "/instructor",
        [ROLES.APRENDIZ]: "/aprendiz",
        [ROLES.ASPIRANTE]: "/aspirante",
    }[role];

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F2F7F8]">
            {mobileOpen && <div className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-[2px] lg:hidden" onClick={() => setMobileOpen(false)} aria-hidden="true" />}
            <aside className={`fixed top-0 z-40 flex h-screen w-72 flex-col border-r border-white/[0.08] bg-gradient-to-b from-[#08283B] to-[#041A2A] text-white shadow-2xl transition-transform duration-300 ease-out lg:sticky lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex h-20 shrink-0 items-center border-b border-white/[0.08] px-5">
                    <Link to={home} className="group flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] shadow-inner transition-colors group-hover:border-[#8AFD5D]/40">
                            <img src={Logo} alt="" className="h-7 w-7" />
                        </span>
                        <span>
                            <span className="block text-base font-black uppercase leading-none tracking-wider text-white">{role.replace(/([a-z])([A-Z])/g, "$1 $2")} <span className="text-[#8AFD5D]">SENA</span></span>
                            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">Portal institucional</span>
                        </span>
                    </Link>
                </div>
                <nav className="sidebar-scroll min-h-0 flex-1 overflow-y-auto px-3 py-5" aria-label="Navegación principal">
                    <p className="rounded-lg px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">Principal</p>
                    <NavLink
                        to={home}
                        end
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                            `group relative mt-1 flex min-h-10 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                                isActive ? "bg-[#8AFD5D]/[0.12] text-[#8AFD5D] before:absolute before:inset-y-2 before:left-0 before:w-1 before:rounded-r-full before:bg-[#8AFD5D] before:content-['']" : "text-[#CBD5E1] hover:bg-white/[0.05] hover:text-white"
                            }`
                        }
                    >
                        <i className="bi bi-grid-1x2-fill w-5 text-center" />
                        Inicio
                    </NavLink>
                    <div className="mt-6 border-t border-white/[0.08] pt-4">
                        <div className="rounded-2xl border border-[#8AFD5D]/[0.16] bg-white/[0.04] p-3.5">
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">Estado del sistema</p>
                            <div className="mt-1.5 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#8AFD5D]" />
                                <span className="text-xs font-semibold text-slate-200">Sistema operativo</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="shrink-0 border-t border-white/[0.08] bg-[#061522]/70 p-4">
                    <button type="button" onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] text-slate-300 transition-colors hover:bg-red-500/10 hover:text-red-300">
                        <i className="bi bi-box-arrow-right text-base" />
                        Cerrar sesión
                    </button>
                </div>
            </aside>
            <div className="flex min-w-0 flex-1 flex-col">
                <header className="sticky top-0 z-20 flex h-[4.75rem] shrink-0 items-center justify-between gap-4 border-b border-[#D8E6EB]/80 bg-[#F8FBFC]/90 px-4 shadow-[0_8px_30px_rgba(15,40,53,0.06)] backdrop-blur-xl sm:px-6 lg:px-8">
                    <div className="flex min-w-0 items-center gap-3">
                        <button type="button" onClick={() => setMobileOpen(true)} aria-label="Abrir menú" className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden">
                            <i className="bi bi-list text-xl" />
                        </button>
                        <div>
                            <p className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-[#78909C] sm:block">Panel institucional</p>
                            <h1 className="text-base font-black tracking-tight text-[#0A2334] sm:text-lg">{roleLabel}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-bold text-[#0A2334]">{nombreCompleto(user) || "Usuario"}</p>
                            <p className="text-[11px] font-medium text-[#78909C]">{roleLabel}</p>
                        </div>
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E6B54] text-sm font-black text-white shadow-sm">{iniciales(user)}</span>
                    </div>
                </header>
                <main className="admin-scroll flex-1 overflow-y-auto">
                    <div className="mx-auto w-full max-w-[1600px] space-y-8 px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8">
                        <PortalContent role={role} />
                    </div>
                </main>
            </div>
        </div>
    );
}
