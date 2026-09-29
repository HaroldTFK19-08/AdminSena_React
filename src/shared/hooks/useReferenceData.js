import { useEffect, useMemo, useState } from "react";
import { collectDependencies, getResource } from "../resources/registry";
import { loadCatalog } from "../resources/referenceCache";

/**
 * Carga los catálogos relacionados (FK) de un recurso y los expone como:
 *   catalogs: { programs: [...], users: [...] }
 *   lookup:   { programs: Map(id -> fila), ... }
 *
 * `loading` se deriva comparando la petición en curso con la última respondida,
 * así el efecto solo actualiza estado cuando llega la respuesta.
 */
export function useReferenceData(resource, version = 0) {
    const keys = useMemo(() => [...collectDependencies(resource, new Set(), { withRelations: true })].sort(), [resource]);
    const requestId = `${keys.join(",")}#${version}`;
    const [state, setState] = useState({ requestId: null, catalogs: {}, error: null });

    useEffect(() => {
        if (keys.length === 0) return undefined;
        let active = true;
        Promise.all(keys.map((key) => loadCatalog(getResource(key))))
            .then((lists) => {
                if (!active) return;
                setState({ requestId, catalogs: Object.fromEntries(keys.map((key, i) => [key, lists[i]])), error: null });
            })
            .catch((error) => active && setState((prev) => ({ ...prev, requestId, error })));
        return () => {
            active = false;
        };
    }, [keys, requestId]);

    const loading = keys.length > 0 && state.requestId !== requestId;

    const lookup = useMemo(
        () =>
            Object.fromEntries(
                Object.entries(state.catalogs).map(([key, rows]) => [key, new Map(rows.map((r) => [String(r.id), r]))]),
            ),
        [state.catalogs],
    );

    return { catalogs: state.catalogs, lookup, loading, error: state.error };
}
