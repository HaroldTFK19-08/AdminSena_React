import React from "react";

/**
 * Componente de Acciones de Fila
 * Proporciona los botones de acción rápida (Ver, Editar, Eliminar) para cada registro de la tabla.
 * 
 * @param {Object} props
 * @param {Object} props.fila - El objeto de datos de la fila actual
 * @param {Function} props.ver - Callback para seleccionar la fila para vista de detalle
 * @param {Function} props.editar - Callback para abrir el formulario de edición
 * @param {Function} props.eliminar - Callback para ejecutar la acción de borrado
 */
export default function AccionesFila({ fila, ver, editar, eliminar }) {
    return (
        <div className="flex items-center justify-end gap-1">
            <button
                type="button"
                aria-label="Ver"
                onClick={() => ver(fila)}
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-[#0C7A45] hover:bg-[#8AFD5D]/15 transition-colors"
            >
                <i className="bi bi-eye" />
            </button>
            <button
                type="button"
                aria-label="Editar"
                onClick={() => editar(fila)}
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-[#0C7A45] hover:bg-[#8AFD5D]/15 transition-colors"
            >
                <i className="bi bi-pencil-square" />
            </button>
            <button
                type="button"
                aria-label="Eliminar"
                onClick={() => eliminar(fila)}
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
                <i className="bi bi-trash" />
            </button>
        </div>
    );
}
