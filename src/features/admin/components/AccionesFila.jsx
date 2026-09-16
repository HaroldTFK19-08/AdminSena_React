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
