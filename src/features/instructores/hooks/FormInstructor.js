import { useForm } from "react-hook-form";

export default function UseFormPerfilInstructor(){
    const {register,handleSubmit,formState: { errors },} = useForm();
    const validarCampos={
        area:{
            required: "El area es obligatorio",
            pattern:{
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        centro:{
            required: "El centro de formacion es obligatorio",
            pattern:{
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        vocacion:{
            required: "La vocacion es obligatoria",
            pattern:{
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        foto: {
            required: "La foto de perfil es obligatoria",
            validate: {
                formato: (files) => {
                    const archivo = files?.[0];
                    if (!archivo) {
                        return "La foto de perfil es obligatoria";
                    }
                    const formatosPermitidos = [
                        "image/jpeg",
                        "image/png",
                    ];
                    return (
                        formatosPermitidos.includes(archivo.type) ||
                        "Solo se permiten imágenes JPG o PNG"
                    );
                },
                tamaño: (files) => {
                    const archivo = files?.[0];
                    if (!archivo) {
                        return true;
                    }
                    return (
                        archivo.size <= 2 * 1024 * 1024 ||
                        "La imagen no puede superar los 2 MB"
                    );
                },
            },
        }
    }
    return {
        register,
        handleSubmit,
        errors,
        validarCampos,
    };
}