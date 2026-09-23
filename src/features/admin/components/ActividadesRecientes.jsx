import React from "react";
import { actividades } from "../../../data/admin/Actividades";

export default function RecentActivity({ abrirActividades }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            {/* Encabezado */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="bi bi-clock-history text-lg" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-800 leading-none">Actividad Reciente</h2>
                        <p className="text-xs text-slate-400 mt-1">Movimientos últimos del sistema</p>
                    </div>
                </div>
                
                <button 
                    onClick={abrirActividades}
                    className="text-xs font-bold text-[#8AFD5D] hover:text-emerald-600 transition-colors flex items-center gap-1 group"
                >
                    Ver todo 
                    <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Lista de Actividades usando la DATA real */}
            <div className="space-y-4">
                {actividades.map((actividad, index) => (
                    <div
                        key={actividad.id || index}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-200 group border border-transparent hover:border-slate-200"
                    >
                        <div className="flex items-center gap-4">
                            {/* Icono Dinámico según la data */}
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#8AFD5D] transition-colors border border-slate-100">
                                <i className={`bi ${actividad.icono}`} />
                            </div>
                            
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                    {actividad.texto}
                                </span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                    <i className="bi bi-person text-[10px]" /> {actividad.usuario}
                                </span>
                            </div>
                        </div>
                        
                        <span className="text-[11px] font-medium text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100">
                            {actividad.tiempo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
