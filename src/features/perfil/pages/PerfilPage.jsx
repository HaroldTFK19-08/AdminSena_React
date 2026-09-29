import { useEffect, useMemo, useState } from "react";
import Button from "../../../shared/components/ui/Button";
import { useToast } from "../../../shared/components/ui/Toast";
import EntityFormModal from "../../../shared/components/crud/EntityFormModal";
import { defineResource } from "../../../shared/resources/registry";
import { findOption, ROLES_OPCIONES, TIPOS_IDENTIFICACION } from "../../../shared/constants/enums";
import { iniciales, nombreCompleto } from "../../../shared/utils/format";
import { useAuth } from "../../auth/hooks/useAuth";
import { usuariosResource } from "../../usuarios/usuarios.resource";
import { administradoresResource } from "../../administradores/administradores.resource";

/** Campos del usuario que la persona puede editar de sí misma (sin rol ni documento). */
const EDITABLES = ["nombre_1", "nombre_2", "apellido_1", "apellido_2", "email", "foto_perfil", "password"];
const perfilResource = defineResource({
    ...usuariosResource,
    singular: "Perfil",
    fields: usuariosResource.fields.filter((f) => EDITABLES.includes(f.name)),
});

function Dato({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50">
            <i className={`bi ${icon} text-sena-navy mt-0.5`} />
            <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-500">{label}</p>
                <p className="text-sm font-medium text-slate-800 break-words">{value || "—"}</p>
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
        const actualizado = await usuariosResource.service.update(user.id, payload);
        updateUser(actualizado ?? payload);
        toast.success("Perfil actualizado.");
        setEditando(false);
    };

    return (
        <div className="space-y-6 max-w-5xl">
            <section className="bg-white rounded-3xl border border-slate-200/70 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                <div className="flex items-center gap-5">
                    {user?.foto_perfil ? (
                        <img src={user.foto_perfil} alt="" className="w-20 h-20 rounded-2xl object-cover" />
                    ) : (
                        <span className="w-20 h-20 rounded-2xl bg-sena-navy text-sena-green text-2xl font-black flex items-center justify-center">{iniciales(user)}</span>
                    )}
                    <div>
                        <h1 className="text-2xl font-black text-sena-navy">{nombreCompleto(user)}</h1>
                        <p className="text-sm text-slate-500">
                            {findOption(ROLES_OPCIONES, user?.rol).label}
                            {admin?.cargo ? ` · ${admin.cargo}` : ""}
                        </p>
                    </div>
                </div>
                <Button variant="dark" icon="bi-pencil" onClick={() => setEditando(true)}>
                    Editar mis datos
                </Button>
            </section>

            <section className="bg-white rounded-3xl border border-slate-200/70 p-6">
                <h2 className="font-bold text-sena-navy mb-4">Cuenta</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Dato icon="bi-envelope" label="Correo electrónico" value={user?.email} />
                    <Dato icon="bi-person-vcard" label={tipoDoc} value={user?.identificacion} />
                </div>
            </section>

            {admin && (
                <section className="bg-white rounded-3xl border border-slate-200/70 p-6">
                    <h2 className="font-bold text-sena-navy mb-4">Información administrativa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
