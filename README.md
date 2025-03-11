# SnipSen - Frontend

Este es el frontend de la aplicación SnipSen, que permite a los usuarios generar y almacenar snippets de código de manera eficiente utilizando capacidades de inteligencia artificial.

## Funcionalidades

- **Generación de snippets**: Interfaz para que los usuarios ingresen prompts y generen snippets de código.
- **Visualización de snippets**: Muestra los snippets generados y permite ver detalles de cada uno.
- **Historial de snippets**: Muestra el historial de snippets generados por el usuario.

## Características a agregar

- **Páginas de registro y login**: Permitir a los usuarios crear una cuenta e iniciar sesión en la aplicación.
- **Rutas protegidas**: Asegurar que solo los usuarios autenticados puedan acceder a ciertas rutas y funcionalidades.
- **Visualización de snippets personales**: Permitir a los usuarios ver solo los snippets generados por ellos mismos.
- **Compartir snippets**: Permitir a los usuarios compartir sus snippets con otros usuarios.

## Instalación y configuración

1. Navegar al directorio `Frontend`.
2. Instalar las dependencias:

   ```sh
   npm install
   ```

3. Crear un archivo `.env` en el directorio `Frontend` con el siguiente contenido:

   ```env
   VITE_BASE_URL=http://localhost:4000/api/v1
   ```

4. Iniciar la aplicación:

   ```sh
   npm run dev
   ```

## Estructura de carpetas

```
Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── router.tsx
│   └── styles.css
├── .env
├── package.json
└── README.md
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la licencia ISC. Para más detalles, consulta el archivo [LICENSE](LICENSE).
