import { useNavigate, Link } from "react-router-dom";

export default function HeaderAdmin({ titulo }) {
    const navigate = useNavigate();

    return (
        <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <i className="bi bi-arrow-left" />
                </button>
                <div className="h-6 w-px bg-slate-200 mx-2" />
                <h1 className="text-lg font-black text-slate-800 tracking-tight">{titulo}</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-slate-700 leading-none">Administrador</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">admin@sena.edu.co</p>
                </div>
                <Link 
                    to="/admin/perfil" 
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm ring-1 ring-slate-200 text-slate-600 font-bold transition-all duration-200 hover:ring-[#8AFD5D] hover:bg-emerald-50 hover:text-emerald-600"
                    title="Mi Perfil"
                >
                    AD
                </Link>
            </div>
        </header>
    );
}
