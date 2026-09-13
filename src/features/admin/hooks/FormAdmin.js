import { useForm } from "react-hook-form";

export default function UseFormPerfilAdmin() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const reglas = {
        cargo: {
            required: "El cargo es obligatorio",
            minLength: {
                value: 3,
                message: "El cargo debe tener mínimo 3 caracteres",
            },
            maxLength: {
                value: 100,
                message: "El cargo no puede superar los 100 caracteres",
            },
        },

        fecha_inicio: {
            required: "La fecha de inicio es obligatoria",
        },

        fecha_fin: {
            validate: (value) => {
                if (!value) {
                    return true;
                }

                const fechaInicio = getValues("fecha_inicio");

                if (!fechaInicio) {
                    return "Primero debes seleccionar la fecha de inicio";
                }

                return (
                    value >= fechaInicio ||
                    "La fecha de finalización no puede ser anterior a la fecha de inicio"
                );
            },
        },

        ciudad: {
            required: "La ciudad es obligatoria",
            minLength: {
                value: 3,
                message: "La ciudad debe tener mínimo 3 caracteres",
            },
            maxLength: {
                value: 100,
                message: "La ciudad no puede superar los 100 caracteres",
            },
        },

        departamento: {
            required: "El departamento es obligatorio",
            minLength: {
                value: 3,
                message: "El departamento debe tener mínimo 3 caracteres",
            },
            maxLength: {
                value: 100,
                message: "El departamento no puede superar los 100 caracteres",
            },
        },

        direccion: {
            required: "La dirección es obligatoria",
            minLength: {
                value: 5,
                message: "La dirección debe tener mínimo 5 caracteres",
            },
            maxLength: {
                value: 150,
                message: "La dirección no puede superar los 150 caracteres",
            },
        },

        ubicacion: {
            required: "La ubicación es obligatoria",
            minLength: {
                value: 3,
                message: "La ubicación debe tener mínimo 3 caracteres",
            },
            maxLength: {
                value: 255,
                message: "La ubicación no puede superar los 255 caracteres",
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