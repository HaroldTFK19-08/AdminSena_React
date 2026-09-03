const Titulo = ()=>{
    return(
        <>
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A2A3F] border border-white/10 text-[#8AFD5D] mb-3 shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-wide">Crear Nueva Cuenta</h1>
                <p className="text-xs text-slate-400 mt-1">Completa el formulario para registrarte en el portal institucional Admin Sena</p>
            </div>
        </>
    )
}
export default Titulo