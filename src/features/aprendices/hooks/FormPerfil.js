import { useForm } from "react-hook-form";

export default function UseFormPerfilAprendiz() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const reglas = {
        programa: {
            required: "El programa de formación es obligatorio",
        },
        centro: {
            required: "El centro de formación es obligatorio",
        },
        ficha: {
            required: "La ficha es obligatoria",
            pattern: {
                value: /^[0-9]+$/,
                message: "La ficha solo debe contener números",
            },
            minLength: {
                value: 5,
                message: "La ficha debe tener mínimo 5 números",
            },
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
        },
    };
    return {
        register,
        handleSubmit,
        errors,
        reglas,
    };
}