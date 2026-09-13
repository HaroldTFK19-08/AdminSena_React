import {Link} from "react-router-dom";

export default function FooterForm(){
    return(
        <>
            <div class="mt-6 text-center border-t border-white/5 pt-4">
                <p class="text-xs text-slate-400">
                    ¿Ya tienes una cuenta? 
                    <Link to="/login" class="text-[#8AFD5D] font-semibold hover:underline ml-4">Inicia sesión aquí</Link>
                </p>
            </div>
        </>
    )
}