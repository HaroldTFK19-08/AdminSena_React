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
            const filters = { ...params };
            const perPage = Number(filters.per_page) || 100;
            let page = Number(filters.page) || 1;
            let items = [];
            let hasMore = true;

            while (hasMore) {
                const payload = await http.get(endpoint, {
                    params: { ...filters, per_page: perPage, page },
                });
                const rows = unwrap(payload);
                if (!Array.isArray(rows)) {
                    throw new Error(`La respuesta de ${endpoint} no contiene una lista válida.`);
                }
                items = items.concat(rows);

                const lastPage = Number(payload?.meta?.last_page);
                hasMore = Number.isInteger(lastPage) && lastPage > page;
                page += 1;
            }

            return items;
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
