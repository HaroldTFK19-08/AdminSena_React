import { useCallback, useEffect, useState } from "react";
import { invalidateCatalog } from "../resources/referenceCache";

/**
 * Estado + operaciones CRUD de un recurso.
 * Cada mutación actualiza la lista local e invalida la caché de catálogos
 * (para que los selects de otras pantallas vean el cambio).
 */
export function useResource(resource, params) {
    const paramsKey = JSON.stringify(params ?? {});
    const [version, setVersion] = useState(0);
    const requestId = `${resource.key}|${paramsKey}|${version}`;
    const [state, setState] = useState({ requestId: null, items: [], error: null });

    useEffect(() => {
        let active = true;
        resource.service
            .list(JSON.parse(paramsKey))
            .then((items) => active && setState({ requestId, items, error: null }))
            .catch((error) => active && setState((prev) => ({ ...prev, requestId, error })));
        return () => {
            active = false;
        };
    }, [resource, paramsKey, requestId]);

    const loading = state.requestId !== requestId;
    const reload = useCallback(() => setVersion((v) => v + 1), []);
    const setItems = (fn) => setState((prev) => ({ ...prev, items: fn(prev.items) }));

    const create = useCallback(
        async (data) => {
            const created = await resource.service.create(data);
            invalidateCatalog(resource.key);
            setItems((items) => [...items, ...(Array.isArray(created) ? created : [created])]);
            return created;
        },
        [resource],
    );

    const update = useCallback(
        async (id, data) => {
            const updated = await resource.service.update(id, data);
            invalidateCatalog(resource.key);
            setItems((items) => items.map((item) => (String(item.id) === String(id) ? { ...item, ...updated } : item)));
            return updated;
        },
        [resource],
    );

    const remove = useCallback(
        async (id) => {
            await resource.service.remove(id);
            invalidateCatalog(resource.key);
            setItems((items) => items.filter((item) => String(item.id) !== String(id)));
        },
        [resource],
    );

    return { items: state.items, loading, error: state.error, reload, create, update, remove };
}
