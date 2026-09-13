import { useState } from "react";

export default function Carrusel(totalPosiciones) {
    const [indice, setIndice] = useState(0);
    const moverCarrusel = (direccion) => {
        setIndice((actual) => {
            const nuevoIndice = actual + direccion;
            if (nuevoIndice < 0) {
                return 0;
            }
            if (nuevoIndice >= totalPosiciones) {
                return totalPosiciones - 1;
            }
            return nuevoIndice;
        });
    };
    return {
        indice,
        moverCarrusel,
        setIndice
    };
}