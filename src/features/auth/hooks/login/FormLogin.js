import { useForm } from "react-hook-form";

/**
 * Hook personalizado para la gestión del formulario de Login.
 * Centraliza la lógica de validación y el estado del formulario utilizando react-hook-form.
 */
export default function UseFormLogin() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    /**
     * Reglas de validación para los campos del formulario.
     * Se utilizan expresiones regulares para el correo y longitud mínima para la contraseña.
     */
    const validarCampos = {
        correo: {
            required: "El correo electrónico es obligatorio",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor, ingresa un correo institucional válido",
            },
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
            },
        },
    };

    return {
        register,
        handleSubmit,
        setValue,
        errors,
        validarCampos,
    };
}
