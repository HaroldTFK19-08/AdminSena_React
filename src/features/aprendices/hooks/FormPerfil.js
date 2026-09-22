import { useForm } from "react-hook-form";

export default function UseFormPerfilAprendiz() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const reglas = {
        programa: { required: "El programa de formación es obligatorio" },
        centro: { required: "El centro de formación es obligatorio" },
        ficha: {
            required: "La ficha es obligatoria",
            pattern: { value: /^[0-9]+$/, message: "Solo números" },
            minLength: { value: 5, message: "Mínimo 5 números" },
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
        },
    };

    return { register, handleSubmit, errors, reglas };
}
