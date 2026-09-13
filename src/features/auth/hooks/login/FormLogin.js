import { useForm } from "react-hook-form";

export default function UseFormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const validarCampos = {
        correo: {
            required: "El correo es obligatorio",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un correo válido",
            },
        },

        password: {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "Debe tener mínimo 8 caracteres",
            },
        },
    };

    return {
        register,
        handleSubmit,
        errors,
        validarCampos,
    };
}

