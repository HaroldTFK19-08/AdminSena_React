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
            minLength: {
                value: 2,
                message: "Debe tener mínimo 2 caracteres"
            },
            pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        nombre2: {
            pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        apellido1: {
            required: "El primer apellido es obligatorio",
            minLength: {
                value: 2,
                message: "Debe tener mínimo 2 caracteres"
            },
            pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        apellido2: {
            pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras"
            }
        },
        rol: {
            required: "El rol es obligatorio",
            validate: (value) =>
                ["aprendiz", "instructor"].includes(value) ||
                "Seleccione un rol válido"
        },
        correo: {
            required: "El correo es obligatorio",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un correo válido"
            }
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "Debe tener mínimo 8 caracteres"
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