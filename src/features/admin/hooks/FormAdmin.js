import { useForm } from "react-hook-form";

/**
 * Hook para la gestión del formulario de perfil del Administrador.
 * Define las reglas de validación específicas para los campos de perfil administrativo.
 */
export default function UseFormPerfilAdmin() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    /**
     * Reglas de validación.
     * Incluye validaciones de formato de imagen (JPG/PNG) y tamaño máximo (2MB).
     */
    const reglas = {
        cargo: {
            required: "El cargo es obligatorio",
            minLength: { value: 3, message: "Mínimo 3 caracteres" },
        },
        fecha_inicio: { required: "La fecha de inicio es obligatoria" },
        fecha_fin: {
            validate: (value) => {
                if (!value) return true;
                const fechaInicio = getValues("fecha_inicio");
                return (!fechaInicio) || (value >= fechaInicio) || "La fecha final no puede ser anterior a la de inicio";
            },
        },
        ciudad: { required: "Obligatorio", minLength: { value: 3, message: "Mínimo 3 caracteres" } },
        departamento: { required: "Obligatorio", minLength: { value: 3, message: "Mínimo 3 caracteres" } },
        direccion: { required: "Obligatorio", minLength: { value: 5, message: "Mínimo 5 caracteres" } },
        ubicacion: { required: "Obligatorio", minLength: { value: 3, message: "Mínimo 3 caracteres" } },
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
        },
    };

    return { register, handleSubmit, errors, reglas };
}
