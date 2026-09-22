import { useForm } from "react-hook-form";

/**
 * Hook para la gestión del formulario de perfil del Instructor.
 * Implementa validaciones estrictas para asegurar que los datos del instructor
 * (área, centro, vocación) sean coherentes y válidos.
 */
export default function UseFormPerfilInstructor(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /**
     * Reglas de validación.
     * Se utilizan expresiones regulares para evitar caracteres numéricos en campos de texto.
     */
    const validarCampos = {
        area: { 
            required: "Obligatorio", 
            pattern: { value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/, message: "Solo letras" } 
        },
        centro: { 
            required: "Obligatorio", 
            pattern: { value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/, message: "Solo letras" } 
        },
        vocacion: { 
            required: "Obligatorio", 
            pattern: { value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/, message: "Solo letras" } 
        },
        foto: {
            required: "La foto de perfil es obligatoria",
            validate: {
                formato: (files) => {
                    const archivo = files?.[0];
                    return (archivo?.type === "image/jpeg" || archivo?.type === "image/png") || "Solo JPG o PNG";
                },
                tamaño: (files) => {
                    const archivo = files?.[0];
                    return (!archivo || archivo.size <= 2 * 1024 * 1024) || "Máximo 2MB";
                },
            },
        }
    };

    return { register, handleSubmit, errors, validarCampos };
}
