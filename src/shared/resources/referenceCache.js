/**
 * Caché en memoria de los catálogos que se usan como llaves foráneas.
 * Evita pedir /users 5 veces cuando varias pantallas necesitan el mismo catálogo.
 */
const cache = new Map();
const TTL = 60_000;

export function loadCatalog(resource) {
    const hit = cache.get(resource.key);
    if (hit && Date.now() - hit.at < TTL) return hit.promise;

    const promise = resource.service.list().catch((error) => {
        cache.delete(resource.key);
        throw error;
    });
    cache.set(resource.key, { promise, at: Date.now() });
    return promise;
}

export function invalidateCatalog(key) {
    if (key) cache.delete(key);
    else cache.clear();
}
