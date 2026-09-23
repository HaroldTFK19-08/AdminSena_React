import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/auth/logoSena.svg";
import { MENU_ITEMS } from "../../data/admin/MenuAdmin";

export default function AsideAdmin({ collapsed, setCollapsed }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    };

    const categories = [...new Set(MENU_ITEMS.map(item => item.category))];

    return (
        <aside className={`h-screen sticky top-0 transition-all duration-300 bg-[#081B28] text-white flex flex-col z-20 ${collapsed ? "w-20" : "w-72"} border-r border-white/10 shadow-2xl`}>
            <div className={`p-6 flex items-center border-b border-white/10 ${collapsed ? "flex-col gap-3" : "justify-between gap-2"}`}>
                <NavLink 
                    to="/admin" 
                    className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}
                >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                        <img src={Logo} alt="Logo SENA" className="w-7 h-7" />
                    </div>
                    {!collapsed && (
                        <span className="font-black text-lg tracking-tighter uppercase leading-none">
                            ADMIN <span className="text-[#8AFD5D]">SENA</span>
                        </span>
                    )}
                </NavLink>
                <button 
                    onClick={() => setCollapsed(!collapsed)} 
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                >
                    <i className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`} />
                </button>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-8 overflow-y-auto scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                {categories.map(category => (
                    <div key={category} className="space-y-3">
                        {!collapsed && (
                            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                                {category}
                            </p>
                        )}
                        
                        <ul className="space-y-1">
                            {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                                <NavLink 
                                    key={item.path} 
                                    to={item.path}
                                    end={item.path === "/admin"}
                                    title={collapsed ? item.label : ""}
                                    className={({ isActive }) => 
                                        `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                            isActive 
                                            ? "bg-[#8AFD5D] text-[#081B2B] font-bold shadow-lg shadow-[#8AFD5D]/20" 
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        }`
                                    }
                                >
                                    <i className={`bi ${item.icon} text-lg ${collapsed ? "mx-auto" : ""}`} />
                                    {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="p-6 border-t border-white/10 bg-[#061521]/50">
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 w-full rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all group"
                    title={collapsed ? "Cerrar Sesión" : ""}
                >
                    <i className="bi bi-box-arrow-right text-lg group-hover:scale-110 transition-transform" />
                    {!collapsed && <span className="text-sm font-medium">Cerrar Sesión</span>}
                </button>
            </div>
        </aside>
    );
}