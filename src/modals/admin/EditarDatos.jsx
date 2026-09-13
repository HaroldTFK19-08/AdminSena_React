export default function ModalEditarDatosAdmin({ cerrar, abrir }) {
    if (!abrir) {
        return null;
    }
    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="bg-[#071D2B] px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="font-nunito text-2xl font-semibold text-white">
                            Editar Perfil
                        </h1>
                        <button
                            type="button"
                            onClick={cerrar}
                            className="text-2xl text-white hover:text-gray-300"
                        >
                            &times;
                        </button>
                    </div>
                </div>
                <form className="space-y-5 px-6 py-6">
                    <div>
                        <label
                            htmlFor="nombre"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            defaultValue="Administrador"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="correo"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            defaultValue="admin@sena.edu.co"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="ciudad"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Ciudad
                        </label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            defaultValue="Popayán"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="departamento"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Departamento
                        </label>
                        <input
                            type="text"
                            id="departamento"
                            name="departamento"
                            defaultValue="Cauca"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-3">
                        <button
                            type="button"
                            onClick={cerrar}
                            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
                        >
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}