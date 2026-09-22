import { useForm } from "react-hook-form";

export default function UseRegistro() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const reglas = {
        nombre1: {
            required: "El primer nombre es obligatorio",
            pattern: {
                value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        nombre2: {
            pattern: {
                value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        apellido1: {
            required: "El primer apellido es obligatorio",
            pattern: {
                value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        apellido2: {
            pattern: {
                value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        rol: {
            required: "Seleccione un rol obligatorio",
        },
        correo: {
            required: "El correo electrónico es obligatorio",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese un correo válido"
            }
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "Mínimo 8 caracteres"
            }
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        reglas
    };
}
