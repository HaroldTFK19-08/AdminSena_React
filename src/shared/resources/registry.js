import { createResourceService } from "../api/createResourceService";

/**
 * Registro de recursos (dominios) del modelo relacional.
 *
 * Cada dominio describe UNA tabla: sus campos, sus llaves foráneas y cómo se muestra.
 * A partir de esa definición se generan servicio REST, tabla, formularios y detalle.
 */
const registry = new Map();

const FIELD_DEFAULTS = {
    type: "text",
    table: false,
    form: true,
    detail: true,
    searchable: false,
    required: false,
};

export function defineResource(definition) {
    const fields = (definition.fields || []).map((field) => ({ ...FIELD_DEFAULTS, ...field }));

    const references = fields.filter((f) => f.type === "reference").map((f) => f.ref);

    return Object.freeze({
        dependsOn: [],
        relations: [],
        display: (row) => row?.nombre ?? `#${row?.id}`,
        ...definition,
        fields,
        references,
        service: definition.service ?? createResourceService(definition.endpoint),
    });
}

export function registerResources(resources) {
    resources.forEach((resource) => registry.set(resource.key, resource));
}

export function getResource(key) {
    const resource = registry.get(key);
    if (!resource) throw new Error(`Recurso no registrado: "${key}"`);
    return resource;
}

export function hasResource(key) {
    return registry.has(key);
}

/** Todas las llaves de recursos que se necesitan para mostrar `key` (referencias + dependencias, recursivo). */
export function collectDependencies(resource, seen = new Set(), { withRelations = false } = {}) {
    const direct = [...resource.references, ...resource.dependsOn];
    if (withRelations) {
        // Los hijos (relaciones 1:N) se muestran en el detalle: se necesitan sus catálogos.
        for (const relation of resource.relations) {
            if (hasResource(relation.resource)) collectDependencies(getResource(relation.resource), seen);
        }
    }
    for (const key of direct) {
        if (seen.has(key) || !hasResource(key)) continue;
        seen.add(key);
        collectDependencies(getResource(key), seen);
    }
    return seen;
}

/**
 * Texto legible de un registro relacionado.
 * Prioriza la relación que ya venga cargada desde el backend (eager loading)
 * y, si no, la busca en el mapa de catálogos.
 */
export function labelFor(key, id, lookup, embedded) {
    if (id === null || id === undefined || id === "") return "—";
    const resource = hasResource(key) ? getResource(key) : null;
    const row = embedded ?? lookup?.[key]?.get(String(id));
    if (!row || !resource) return `#${id}`;
    return resource.display(row, lookup) || `#${id}`;
}
