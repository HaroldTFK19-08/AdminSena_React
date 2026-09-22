export default function TituloLogin() {
    return (
        <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#39A900]/20 via-[#0A2A3F] to-[#0A2A3F] border border-[#8AFD5D]/30 text-[#8AFD5D] mb-4 shadow-[0_0_25px_rgba(57,169,0,0.18)]">
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                </svg>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
                Iniciar Sesión
            </h1>
            <p className="text-xs text-slate-400 mt-1.5 max-w-xs mx-auto leading-relaxed">
                Ingresa tus credenciales institucionales para acceder a la plataforma
            </p>
        </div>
    );
}