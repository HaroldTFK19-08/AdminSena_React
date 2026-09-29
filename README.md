# Admin SENA — Panel administrativo (React + Vite)

Panel de administración organizado **por dominios del modelo relacional** y listo para conectarse a un backend REST (pensado para Laravel + Sanctum, pero sirve con cualquier API JSON).

## Inicio rápido

```bash
npm install
cp .env.example .env        # o usa .env.development
npm run dev
```

Con `VITE_USE_MOCKS=true` la app funciona **sin backend** usando datos simulados en memoria. Cuentas de prueba:

| Rol        | Correo                   | Contraseña     |
|------------|--------------------------|----------------|
| Admin      | admin123@sena.edu.co     | admin123       |
| Instructor | instructor@sena.edu.co   | instructor123  |
| Aprendiz   | aprendiz@sena.edu.co     | aprendiz123    |

Los cambios del modo simulado se guardan en el navegador. Para reiniciarlos: `window.__resetMockDb()` en la consola.

## Conectar el backend

1. En `.env`: `VITE_USE_MOCKS=false` y `VITE_API_URL=http://localhost:8000/api`.
2. Si tus rutas no coinciden, cámbialas **solo** en `src/shared/api/endpoints.js`.
3. Verifica los valores de los enums en `src/shared/constants/enums.js` (sobre todo `users.rol` y `users.tipo_identificacion`).
4. Habilita CORS en el backend para el origen de Vite (`http://localhost:5173`).

### Contrato que espera el frontend

**Autenticación**

| Método | Ruta        | Envía                                          | Responde                          |
|--------|-------------|------------------------------------------------|-----------------------------------|
| POST   | `/login`    | `{ email, password }`                          | `{ token, user }`                 |
| POST   | `/register` | columnas de `users` + `password_confirmation`  | `{ token, user }` (o sin token)   |
| POST   | `/logout`   | —                                              | 204                               |
| GET    | `/me`       | —                                              | `user` (opcional: `user.admin`)   |

El token se envía como `Authorization: Bearer <token>`. Si cualquier petición responde **401**, la sesión se cierra y se redirige al login. `user.rol` decide a qué panel entra la persona.

**CRUD** (igual para cada tabla):

```
GET    /recurso            lista   -> [ ... ]  o  { data: [ ... ] }
GET    /recurso/{id}       detalle -> { ... }  o  { data: { ... } }
POST   /recurso            crear
PUT    /recurso/{id}       editar
DELETE /recurso/{id}       eliminar (204)
```

| Tabla                  | Ruta por defecto         | Módulo del panel              |
|------------------------|--------------------------|-------------------------------|
| users                  | `/users`                 | Usuarios                      |
| admins                 | `/admins`                | Administradores               |
| teachers               | `/teachers`              | Instructores                  |
| apprentices            | `/apprentices`           | Aprendices                    |
| aspirants              | `/aspirants`             | Aspirantes                    |
| trainingcenters        | `/trainingcenters`       | Centros                       |
| areas                  | `/areas`                 | Áreas                         |
| programs               | `/programs`              | Programas                     |
| competencies           | `/competencies`          | Competencias                  |
| course_groups          | `/course-groups`         | Fichas                        |
| course_group_teacher   | `/course-group-teacher`  | Instructores por ficha        |
| competency_teacher     | `/competency-teacher`    | Competencias por instructor   |
| results                | `/results`               | Resultados                    |
| environments           | `/environments`          | Ambientes                     |
| equipment              | `/equipment`             | Equipos                       |
| assignments            | `/assignments`           | Asignaciones                  |
| offers                 | `/offers`                | Ofertas                       |
| registrations          | `/registrations`         | Inscripciones                 |
| news                   | `/news`                  | Noticias                      |

- Los cuerpos usan **exactamente los nombres de columna** de la BD (`nombre_1`, `trainingcenter_id`, `codigo_programa`…). Las FK se envían como número, los vacíos como `null`, las fechas como `YYYY-MM-DD` y los timestamps como `YYYY-MM-DD HH:mm:ss`.
- Al editar un usuario, `password` solo se envía si se escribió una nueva.
- **Errores de validación:** responde 422 con `{ message, errors: { campo: ["mensaje"] } }` (formato por defecto de Laravel) y cada mensaje aparece bajo su campo en el formulario.
- **Borrado con dependencias:** responde 409 (o 422) con `{ message }`; se muestra al usuario.
- **Filtros (opcional):** el detalle de un registro pide sus hijos con `?llave_foranea=id` (p. ej. `/apprentices?course_group_id=3`). Si el backend ignora el filtro, el frontend filtra igual.
- **Relaciones cargadas (opcional):** si el backend devuelve la relación (p. ej. `program` junto a `program_id`, o `user` en `teachers`), se usa directamente; si no, se resuelve con los catálogos.
- **Paginación:** las listas se cargan completas y se paginan en el cliente. Si una tabla crece mucho, conviene paginar en el servidor (ver `createResourceService.js`).

## Estructura

```
src/
├── app/                    # Arranque de la aplicación
│   ├── App.jsx             # Proveedores (router, sesión, notificaciones)
│   ├── router/AppRoutes.jsx# Rutas públicas y protegidas por rol (carga diferida)
│   ├── layouts/            # AdminLayout (Sidebar + Topbar + <Outlet/>)
│   └── navigation.js       # Menú agrupado por dominio
├── config/env.js           # Variables de entorno (único lugar que lee import.meta.env)
├── shared/                 # Código reutilizable, sin lógica de negocio
│   ├── api/                # httpClient, endpoints, ApiError, tokenStorage, createResourceService
│   ├── resources/          # Registro de dominios, resolución de llaves foráneas, caché de catálogos
│   ├── components/ui/      # Modal, Button, Badge, Toast, PageHeader, StatCard…
│   ├── components/crud/    # CrudPage, DataTable, EntityFormModal, EntityDetailModal, formLogic
│   ├── hooks/              # useResource, useReferenceData, useDebounce
│   ├── constants/enums.js  # Valores cerrados (roles, estados, tipos)
│   └── utils/              # Formato de fechas/nombres, exportación CSV
├── features/               # Un dominio por tabla del modelo relacional
│   ├── resources.js        # Registro de todos los dominios
│   ├── <dominio>/<dominio>.resource.js   # Campos, FK y relaciones de la tabla
│   ├── <dominio>/pages/<Dominio>Page.jsx # Página (CRUD genérico o personalizada)
│   ├── auth/               # Landing, login, registro, sesión, guardas de ruta
│   ├── dashboard/  perfil/  reportes/  configuracion/
└── mocks/                  # Backend simulado (seed coherente con el modelo relacional)
```

### Agregar o modificar un dominio

Cada archivo `*.resource.js` describe una tabla. Ejemplo (`features/areas/areas.resource.js`):

```js
export const areasResource = defineResource({
    key: "areas",                      // nombre de la tabla
    endpoint: ENDPOINTS.areas,
    singular: "Área", plural: "Áreas", icon: "bi-diagram-3-fill",
    display: (row) => row.nombre,      // cómo se ve en selects de otras tablas
    fields: [
        { name: "nombre", label: "Nombre", required: true, maxLength: 255, table: true },
        { name: "trainingcenter_id", label: "Centro", type: "reference", ref: "trainingcenters", required: true, table: true },
    ],
    relations: [{ resource: "programs", foreignKey: "area_id" }], // hijos que se ven en el detalle
});
```

Tipos de campo: `text`, `textarea`, `number`, `email`, `password`, `date`, `datetime`, `url`, `select` (con `options`) y `reference` (llave foránea, con `ref` y opcional `refFilter`). Opciones útiles: `table` (columna en la tabla), `form: false` (columna calculada), `required: "create"` (obligatorio solo al crear), `badge` (estado con color).

Para un dominio nuevo: crea el `.resource.js`, regístralo en `features/resources.js`, agrega su ruta en `endpoints.js`, la página en `AppRoutes.jsx` y el enlace en `navigation.js`.

## Pendiente / decisiones a validar

- **Enums:** los valores de `users.rol`, `tipo_identificacion` y los estados guardados como varchar son supuestos; ajústalos en `enums.js`.
- **Archivos** (`foto_perfil`, `imagen`, `certificado_*`): hoy se capturan como URL. Para subir archivos, envía `FormData`; el cliente ya convierte `PUT` en `POST` + `_method` como exige Laravel.
- **Configuración:** el modelo relacional no tiene tabla para esto, así que la pantalla aún no guarda en el servidor.
- **Paneles de instructor, aprendiz y aspirante:** tienen ruta protegida pero muestran una página "en construcción".

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (con `VITE_USE_MOCKS=false` los mocks no se incluyen en la carga inicial)
- `npm run lint` — ESLint
