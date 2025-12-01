# DelBono Frontend

Aplicación Angular 8 que actúa como panel administrativo para gestionar entidades del dominio DelBono. El proyecto consume una API REST ubicada en `http://localhost:8000/api` para iniciar sesión y administrar roles, usuarios, choferes y clientes.

## Funcionalidades principales
- **Autenticación:** formulario de inicio de sesión que valida credenciales contra el backend y redirige al inicio al autenticar correctamente. 
- **Panel de inicio:** estructura de cabecera, barra lateral y pie de página reutilizados en las vistas principales.
- **Gestión de roles:** listado con botón para modificar o crear roles a través del formulario dedicado (`/rol/formrol`).
- **Gestión de clientes:** tabla de clientes con acceso rápido al primer teléfono y dirección registrados, más opción para registrar nuevos clientes (`/formcliente`).
- **Gestión de choferes:** CRUD de choferes con formularios para alta y edición (`/formchofer`), consumiendo el endpoint `/api/chofer`.
- **Gestión de usuarios:** creación y edición de usuarios vinculando datos de roles y permisos (`/formusuario`).

## Estructura del proyecto
- `src/app` contiene los componentes principales (`home`, `login`, `rol`, `cliente`, `chofer`, `usuario`) y sus formularios asociados.
- `src/app/services` centraliza la comunicación HTTP con la API (`rol.service.ts`, `cliente.service.ts`, `chofer.service.ts`, `usuario.service.ts`, `login.service.ts`, `permiso.service.ts`).
- `src/app/interfaces` define los contratos de datos intercambiados con el backend.

## Requisitos
- Node.js 12+ y npm.
- Angular CLI ^8.3.19 instalada globalmente (`npm install -g @angular/cli`).
- Backend disponible en `http://localhost:8000/api` con los recursos esperados (`/rol`, `/clientes`, `/chofer`, `/usuario`, `/login`).

## Puesta en marcha
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar el servidor de desarrollo:
   ```bash
   npm start
   ```
   Navega a `http://localhost:4200/`; el servidor recarga la aplicación al detectar cambios.

## Scripts disponibles
- `npm start`: ejecuta `ng serve` para desarrollo.
- `npm run build`: genera la compilación de producción en `dist/`.
- `npm test`: ejecuta las pruebas unitarias con Karma.
- `npm run lint`: analiza el código con TSLint.
- `npm run e2e`: ejecuta pruebas end-to-end con Protractor.

## Convenciones y navegación
- Las rutas están definidas en `app.module.ts` bajo el arreglo `Rutas`.
- Los servicios envían y reciben JSON utilizando `HttpClient` y encabezados `Content-Type: application/json`.
- Los componentes de cabecera (`cabecera`), navegación (`navbar`) y pie (`pie`) encapsulan la plantilla base reutilizable.

## Notas adicionales
- Ajusta los valores `API_ENDPOINT` en los servicios si el backend cambia de host o puerto.
- La aplicación está preparada para funcionar en entornos locales; para despliegues productivos considera configurar variables de entorno y optimizar la compilación con `npm run build -- --prod`.
