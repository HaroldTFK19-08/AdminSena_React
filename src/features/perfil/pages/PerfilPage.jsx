import { useEffect, useMemo, useState } from "react";
import Button from "../../../shared/components/ui/Button";
import { useToast } from "../../../shared/components/ui/Toast";
import EntityFormModal from "../../../shared/components/crud/EntityFormModal";
import { defineResource } from "../../../shared/resources/registry";
import { findOption, ROLES_OPCIONES, TIPOS_IDENTIFICACION } from "../../../shared/constants/enums";
import { iniciales, mediaUrl, nombreCompleto } from "../../../shared/utils/format";
import { useAuth } from "../../auth/hooks/useAuth";
import { authService } from "../../auth/api/auth.service";
import { usuariosResource } from "../../usuarios/usuarios.resource";
import { administradoresResource } from "../../administradores/administradores.resource";

/** Campos del usuario que la persona puede editar de sí misma (sin rol). */
const EDITABLES = ["nombre_1", "nombre_2", "apellido_1", "apellido_2", "tipo_identificacion", "identificacion", "email", "foto_perfil", "password", "password_confirmation"];
const perfilResource = defineResource({
    ...usuariosResource,
    singular: "Perfil",
    fields: usuariosResource.fields
        .filter((f) => EDITABLES.includes(f.name))
        .map((field) => (["nombre_1", "nombre_2", "apellido_1", "apellido_2"].includes(field.name) ? { ...field, maxLength: 20 } : field)),
});

function Dato({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-[#D8E6EB] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm">
            <i className={`bi ${icon} mt-0.5 text-[#0E6B54]`} />
            <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5F7785]">{label}</p>
                <p className="mt-2 break-words text-sm font-bold text-[#0A2334]">{value || "—"}</p>
            </div>
        </div>
    );
}

export default function PerfilPage() {
    const { user, updateUser } = useAuth();
    const toast = useToast();
    const [editando, setEditando] = useState(false);
    const [admin, setAdmin] = useState(user?.admin ?? null);

    // Perfil administrativo (tabla admins) asociado al usuario.
    useEffect(() => {
        if (!user?.id || user?.admin) return;
        administradoresResource.service
            .list({ user_id: user.id })
            .then((rows) => setAdmin(rows.find((r) => String(r.user_id) === String(user.id)) ?? null))
            .catch(() => setAdmin(null));
    }, [user?.id, user?.admin]);

    const tipoDoc = useMemo(() => findOption(TIPOS_IDENTIFICACION, user?.tipo_identificacion).label, [user?.tipo_identificacion]);

    const guardar = async (payload) => {
        const actualizado = await authService.updateProfile(payload);
        updateUser(actualizado ?? payload);
        toast.success("Perfil actualizado.");
        setEditando(false);
    };

    return (
        <div className="max-w-5xl space-y-8">
            <section className="flex flex-col justify-between gap-6 rounded-[28px] border border-[#D8E6EB] bg-[#F7FBFC] p-6 shadow-[0_12px_26px_rgba(15,40,53,0.06)] sm:flex-row sm:items-center sm:p-8">
                <div className="flex items-center gap-5">
                    {user?.foto_perfil ? (
                        <img src={mediaUrl(user.foto_perfil)} alt="" className="w-20 h-20 rounded-2xl object-cover" />
                    ) : (
                        <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0E6B54] text-2xl font-black text-white">{iniciales(user)}</span>
                    )}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1B5E6A]">Perfil del administrador</p>
                        <h1 className="mt-2 text-2xl font-black text-[#0A2334]">{nombreCompleto(user)}</h1>
                        <p className="text-sm text-[#5F7785]">
                            {findOption(ROLES_OPCIONES, user?.rol).label}
                            {admin?.cargo ? ` · ${admin.cargo}` : ""}
                        </p>
                    </div>
                </div>
                <Button variant="dark" icon="bi-pencil" onClick={() => setEditando(true)}>
                    Editar mis datos
                </Button>
            </section>

            <section className="rounded-[28px] border border-[#D8E6EB] bg-[#F7FBFC] p-6 shadow-[0_12px_26px_rgba(15,40,53,0.06)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-extrabold text-[#0A2334]">Información personal</h2>
                    <span className="shrink-0 rounded-full bg-[#D8F7CB] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E6B54]">Cuenta</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Dato icon="bi-envelope" label="Correo electrónico" value={user?.email} />
                    <Dato icon="bi-person-vcard" label={tipoDoc} value={user?.identificacion} />
                </div>
            </section>

            {admin && (
                <section className="rounded-[28px] border border-[#D8E6EB] bg-[#F7FBFC] p-6 shadow-[0_12px_26px_rgba(15,40,53,0.06)]">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 className="text-xl font-extrabold text-[#0A2334]">Datos institucionales</h2>
                        <span className="shrink-0 rounded-full bg-[#EAF6F4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B5E6A]">Administración</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <Dato icon="bi-briefcase" label="Cargo" value={admin.cargo} />
                        <Dato icon="bi-door-closed" label="Oficina" value={admin.ubicacion_oficina} />
                        <Dato icon="bi-geo-alt" label="Dirección" value={admin.direccion} />
                    </div>
                </section>
            )}

            <EntityFormModal resource={perfilResource} open={editando} record={user} onClose={() => setEditando(false)} onSubmit={guardar} />
        </div>
    );
}
