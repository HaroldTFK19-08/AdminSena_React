
export default function FormLogin(){
    return(
        <>
            <form class="space-y-5">
                <div>
                    <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Correo Electrónico
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                        </span>
                        <input type="email" id="email" placeholder="Ingresa tu correo electrónico" class="w-full px-4 py-2.5 pl-10 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"/>
                    </div>
                </div>
                <div>
                    <label for="password" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contraseña
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </span>
                        <input type="password" id="password" placeholder="••••••••" class="w-full pl-10 pr-4 py-2.5 bg-[#0A2A3F] border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8AFD5D] focus:ring-1 focus:ring-[#8AFD5D] transition-all"/>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <label className="relative flex items-center cursor-pointer">
                        <input
                            id="remember"
                            type="checkbox"
                            className="peer sr-only"
                        />
                        <div className="w-4 h-4 rounded-md border border-white/20 bg-[#0A2A3F]
                            peer-checked:bg-[#8AFD5D]
                            peer-checked:border-[#8AFD5D]
                            transition-all duration-200
                            flex items-center justify-center"
                        >
                            <svg
                                className="w-3 h-3 text-[#001E30] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M5 12l4 4L19 7"
                                />
                            </svg>
                        </div>

                        <span className="ml-2 text-xs text-slate-300 select-none">
                            Guardar inicio de sesión
                        </span>
                    </label>
                </div>
                <div>
                    <button class="w-full py-3 px-4 bg-[#8AFD5D] hover:bg-[#72db4c] text-[#001E30] font-bold text-sm rounded-lg shadow-lg shadow-[#8AFD5D]/10 hover:shadow-[#8AFD5D]/20 transition-all duration-200 uppercase tracking-wider">Iniciar Sesion</button>
                </div>
            </form>
        </>
    )
}