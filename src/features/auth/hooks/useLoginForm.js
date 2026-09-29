import { useForm } from "react-hook-form";

/** Formulario de login. Los nombres coinciden con las columnas de `users`. */
export default function useLoginForm() {
    const { register, handleSubmit, setValue, setError, formState } = useForm({
        defaultValues: { email: "", password: "", remember: false },
    });

    const reglas = {
        email: {
            required: "El correo electrónico es obligatorio",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Ingresa un correo válido" },
        },
        password: {
            required: "La contraseña es obligatoria",
            minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" },
        },
    };

    return { register, handleSubmit, setValue, setError, errors: formState.errors, isSubmitting: formState.isSubmitting, reglas };
}
