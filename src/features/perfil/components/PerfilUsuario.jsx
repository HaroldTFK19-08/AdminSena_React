
/**
 * Componente Genérico de Perfil de Usuario
 * Renderiza una vista de perfil adaptable según el rol (Admin, Instructor, Aprendiz).
 */
export default function PerfilUsuario({
    rol,
    nombre,
    correo,
    descripcion,
    datos,
    modal
}) {
    return (
        <section className="max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Encabezado */}
                <div className="bg-[#071D2B] px-6 py-8 sm:px-8 flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-[#8AFD5D]/15 border-2 border-[#8AFD5D]/50 flex items-center justify-center shrink-0">
                        <i className="bi bi-person-fill text-3xl text-[#8AFD5D]" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8AFD5D]">
                            {rol}
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-white">
                            {nombre}
                        </h2>
                        <p className="mt-1 text-sm text-slate-300">
                            {correo}
                        </p>
                    </div>
                </div>
                {/* Información del perfil */}
                <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-xl font-bold text-[#071D2B]">
                                Mi perfil
                            </h1>
                            <p className="mt-1 text-sm text-slate-500">
                                {descripcion}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={modal}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#8AFD5D] text-[#071D2B] text-sm font-bold hover:bg-[#9CFF78] transition-colors"
                        >
                            <i className="bi bi-pencil-square" />
                            Editar información
                        </button>
                    </div>
                    {/* Datos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {datos.map(({ etiqueta, valor, icono }) => (
                            <div
                                key={etiqueta}
                                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div className="flex items-center gap-2 text-slate-400">
                                    <i className={`bi ${icono}`} />
                                    <p className="text-xs font-bold uppercase tracking-wide">
                                        {etiqueta}
                                    </p>
                                </div>
                                <p className="mt-2 text-sm font-semibold text-slate-700">
                                    {valor}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
