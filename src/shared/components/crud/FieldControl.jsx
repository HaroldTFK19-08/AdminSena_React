import { referenceOptions, rulesFor } from "./formLogic";

const inputCls = (hasError) =>
    `w-full px-4 py-2.5 rounded-xl border bg-slate-50 text-sm text-slate-800 focus:outline-none focus:bg-white transition-colors ${
        hasError ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-sena-navy"
    }`;

const HTML_TYPES = { text: "text", email: "email", password: "password", number: "number", date: "date", datetime: "datetime-local", url: "text", file: "file" };

export default function FieldControl({ field, register, error, isCreate, catalogs, lookup, loadingRefs }) {
    const id = `field-${field.name}`;
    const rules = rulesFor(field, isCreate);
    const required = Boolean(rules.required);

    let control;
    if (field.type === "textarea") {
        control = <textarea id={id} rows={4} className={inputCls(error)} placeholder={field.placeholder} {...register(field.name, rules)} />;
    } else if (field.type === "checkbox") {
        control = (
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input id={id} type="checkbox" className="h-4 w-4 accent-sena-green" {...register(field.name)} />
                {field.label}
            </label>
        );
    } else if (field.type === "select" || field.type === "reference") {
        const options = field.type === "select" ? field.options : referenceOptions(field, catalogs, lookup);
        control = (
            <select id={id} className={`${inputCls(error)} cursor-pointer`} disabled={field.type === "reference" && loadingRefs} {...register(field.name, rules)}>
                <option value="">{field.type === "reference" && loadingRefs ? "Cargando..." : `Selecciona ${field.label.toLowerCase()}`}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        );
    } else {
        control = (
            <input
                id={id}
                type={HTML_TYPES[field.type] ?? "text"}
                accept={field.type === "file" ? field.accept : undefined}
                step={field.type === "number" ? "1" : undefined}
                autoComplete={field.type === "password" ? "new-password" : undefined}
                placeholder={field.placeholder}
                className={inputCls(error)}
                {...register(field.name, rules)}
            />
        );
    }

    return (
        <div className={`space-y-1.5 ${field.type === "textarea" || field.wide ? "sm:col-span-2" : ""}`}>
            <label htmlFor={id} className="text-sm font-semibold text-slate-700">
                {field.label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            {control}
            {error ? (
                <p className="text-xs text-red-600">{error.message}</p>
            ) : (
                field.help && <p className="text-xs text-slate-400">{isCreate ? field.help : field.helpEdit ?? field.help}</p>
            )}
        </div>
    );
}
