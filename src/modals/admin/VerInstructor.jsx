export default function VerInstructor({ abrir, cerrar, instructor }) {
    if (!abrir || !instructor) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between border-b pb-4">
                    <h3 className="font-extrabold text-[#081B2B] text-lg">Detalles del Instructor</h3>
                    <button onClick={cerrar} className="p-2 rounded-lg text-slate-400 hover:bg-slate-100"><i className="bi bi-x-lg" /></button>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Nombre Completo</span> <p className="font-semibold text-slate-800">{instructor.nombre}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Documento de Identidad</span> <p className="font-semibold font-mono text-[#081B2B]">{instructor.documento}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Correo Electrónico</span> <p className="font-semibold text-slate-800">{instructor.correo}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Área Temática</span> <p className="font-semibold text-slate-800">{instructor.area}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl"><span className="text-slate-400 text-xs font-bold uppercase block">Centro de Formación</span> <p className="font-semibold text-slate-800">{instructor.centro}</p></div>
                </div>

                <div className="flex justify-end pt-2">
                    <button onClick={cerrar} className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200">Cerrar</button>
                </div>
            </div>
        </div>
    );
}