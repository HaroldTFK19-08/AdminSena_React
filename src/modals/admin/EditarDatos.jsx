
export default function ModalEditarDatosAdmin({ abrir, cerrar }) {
    if (!abrir) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#081B28]/70 backdrop-blur-md transition-all animate-fadeIn">
            <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-scaleUp border border-white/20">
                
                {/* Header del Modal */}
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#8AFD5D]/20 text-[#081B2B] flex items-center justify-center text-xl shadow-sm">
                            <i className="bi bi-person-gear" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Editar Perfil</h3>
                            <p className="text-sm text-slate-500">Actualiza la información de tu cuenta administrativa</p>
                        </div>
                    </div>
                    <button 
                        onClick={cerrar} 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </div>

                {/* Cuerpo del Modal */}
                <div className="p-8">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Nombre Completo</label>
                            <input 
                                type="text" 
                                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-4 focus:ring-[#8AFD5D]/10 transition-all" 
                                defaultValue="Carlos Tejada" 
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Cargo Institucional</label>
                            <input 
                                type="text" 
                                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-4 focus:ring-[#8AFD5D]/10 transition-all" 
                                defaultValue="Gestor Administrativo" 
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Correo Electrónico</label>
                            <input 
                                type="email" 
                                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-4 focus:ring-[#8AFD5D]/10 transition-all" 
                                defaultValue="admin@sena.edu.co" 
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Ubicación / Sede</label>
                            <input 
                                type="text" 
                                className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-[#8AFD5D] focus:ring-4 focus:ring-[#8AFD5D]/10 transition-all" 
                                defaultValue="Popayán, Cauca" 
                            />
                        </div>
                    </form>
                </div>

                {/* Footer del Modal */}
                <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
                    <button 
                        onClick={cerrar} 
                        className="px-6 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={cerrar} 
                        className="px-8 py-3 bg-[#8AFD5D] text-[#081B2B] rounded-xl text-sm font-black shadow-lg shadow-[#8AFD5D]/20 hover:bg-[#9CFF78] hover:-translate-y-0.5 transition-all active:translate-y-0"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </div>
    );
}
