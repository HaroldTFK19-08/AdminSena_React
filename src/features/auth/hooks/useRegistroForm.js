import { useForm } from "react-hook-form";

const SOLO_LETRAS = { value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñÜü\s]+$/, message: "Solo se permiten letras" };

/** Formulario de registro. Los nombres coinciden con las columnas de `users`. */
export default function useRegistroForm() {
    const { register, handleSubmit, setError, formState } = useForm({
        defaultValues: {
            nombre_1: "",
            nombre_2: "",
            apellido_1: "",
            apellido_2: "",
            tipo_identificacion: "",
            identificacion: "",
            rol: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const reglas = {
        nombre_1: { required: "El primer nombre es obligatorio", pattern: SOLO_LETRAS },
        nombre_2: { pattern: SOLO_LETRAS },
        apellido_1: { required: "El primer apellido es obligatorio", pattern: SOLO_LETRAS },
        apellido_2: { pattern: SOLO_LETRAS },
        tipo_identificacion: { required: "Selecciona el tipo de documento" },
        identificacion: {
            required: "El número de documento es obligatorio",
            pattern: { value: /^[0-9A-Za-z]{5,20}$/, message: "Entre 5 y 20 caracteres, sin espacios ni puntos" },
        },
        rol: { required: "Selecciona un rol" },
        email: {
            required: "El correo electrónico es obligatorio",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Ingresa un correo válido" },
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: { value: 8, message: "Mínimo 8 caracteres" },
        },
        password_confirmation: {
            required: "Confirma tu contraseña",
            validate: (value, valores) => value === valores.password || "Las contraseñas no coinciden",
        },
    };

    return { register, handleSubmit, setError, errors: formState.errors, isSubmitting: formState.isSubmitting, reglas };
}
