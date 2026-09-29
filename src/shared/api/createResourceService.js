import { http, unwrap } from "./httpClient";

/**
 * Fábrica de servicios REST para un recurso del modelo relacional.
 *
 *   GET    /recurso            -> list(params)
 *   GET    /recurso/:id        -> get(id)
 *   POST   /recurso            -> create(payload)
 *   PUT    /recurso/:id        -> update(id, payload)
 *   DELETE /recurso/:id        -> remove(id)
 *
 * Compatible con respuestas planas ([...]) y con API Resources de Laravel ({ data: [...] }).
 */
export function createResourceService(endpoint) {
    return {
        endpoint,

        async list(params) {
            const payload = await http.get(endpoint, { params });
            const items = unwrap(payload);
            return Array.isArray(items) ? items : [];
        },

        async get(id) {
            return unwrap(await http.get(`${endpoint}/${id}`));
        },

        async create(data) {
            return unwrap(await http.post(endpoint, data));
        },

        async update(id, data) {
            return unwrap(await http.put(`${endpoint}/${id}`, data));
        },

        async remove(id) {
            await http.delete(`${endpoint}/${id}`);
            return id;
        },
    };
}
