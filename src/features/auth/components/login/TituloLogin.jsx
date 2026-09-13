const TituloLogin = () =>{
    return(
        <>
            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A2A3F] border border-white/10 text-[#8AFD5D] mb-3 shadow-inner">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h1 class="text-2xl font-bold text-white tracking-wide">Inicio de Sesion</h1>
                <p class="text-xs text-slate-400 mt-1">Ingresa tus credenciales para acceder al panel</p>
            </div>
        </>
    )
}
export default TituloLogin;