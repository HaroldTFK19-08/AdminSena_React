import { collectDependencies, getResource } from "../resources/registry";
import { loadCatalog } from "../resources/referenceCache";
import { textValue } from "../components/crud/fieldValue";

const escape = (v) => {
    const s = String(v ?? "");
    return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/**
 * Exporta un recurso a CSV (compatible con Excel: separador ';' y BOM UTF-8).
 * Las llaves foráneas se exportan con su nombre legible, no con el id.
 */
export async function exportResourceCsv(resourceKey, filename) {
    const resource = getResource(resourceKey);
    const deps = [...collectDependencies(resource)];
    const [rows, ...catalogs] = await Promise.all([resource.service.list(), ...deps.map((k) => loadCatalog(getResource(k)))]);
    const lookup = Object.fromEntries(deps.map((k, i) => [k, new Map(catalogs[i].map((r) => [String(r.id), r]))]));

    const fields = resource.fields.filter((f) => f.type !== "password" && (f.table || f.detail));
    const header = ["ID", ...fields.map((f) => f.label)];
    const lines = rows.map((row) => [row.id, ...fields.map((f) => textValue(f, row, lookup))].map(escape).join(";"));
    const csv = "\uFEFF" + [header.map(escape).join(";"), ...lines].join("\n");

    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename ?? resource.key}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    return rows.length;
}
