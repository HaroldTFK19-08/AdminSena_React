import { useEffect, useMemo, useState } from "react";
import { getResource } from "../../../shared/resources/registry";
import { loadCatalog } from "../../../shared/resources/referenceCache";

/**
 * Carga varios catálogos y devuelve sus filas y conteos.
 * TODO backend: si las tablas crecen, reemplazar por un endpoint /dashboard/stats con COUNT(*).
 */
export function useConteos(keys) {
    const keysId = keys.join(",");
    const [state, setState] = useState({ data: {}, loading: true, error: null });

    useEffect(() => {
        let active = true;
        const list = keysId.split(",");
        Promise.all(list.map((k) => loadCatalog(getResource(k))))
            .then((results) => active && setState({ data: Object.fromEntries(list.map((k, i) => [k, results[i]])), loading: false, error: null }))
            .catch((error) => active && setState({ data: {}, loading: false, error }));
        return () => {
            active = false;
        };
    }, [keysId]);

    const conteos = useMemo(() => Object.fromEntries(Object.entries(state.data).map(([k, rows]) => [k, rows.length])), [state.data]);
    return { ...state, conteos };
}
