# OnlineAll Kiosk Backend

Este es el backend extraído listos para producción para el sistema de OnlineAll Kiosk.

## ¿Qué incluye?
- Toda la configuración `Firebase Admin` (`src/config/firebase.ts`).
- Middleware de Autorización (`src/middleware/auth.middleware.ts`).
- Los Controladores del catálogo, venta, y AI (`src/controllers`).
- Rutas separadas e Index.
- Compilación a JavaScript bajo la carpeta `dist`.
- Documentación detallada (`docs`).

## Despliegue en Entornos Node.js Tradicionales (Render, Railway, DigitalOcean, Heroku)
Si deseas desplegarlo como un servidor Node en una plataforma tradicional:
1. Define las variables de entorno en la plataforma, copiando las llaves del archivo `.env.example`:
   - `PORT`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
   - `GEMINI_API_KEY`
2. Ejecuta la instalación:
   ```bash
   npm install
   ```
3. Ejecuta el build:
   ```bash
   npm run build
   ```
4. El comando "Start Content" / Inicio de Producción debería ser:
   ```bash
   npm run start
   ```

## Despliegue en Serveless (Vercel, Netlify)
Se incluye un archivo preconfigurado `vercel.json` para facilitar el deploy sin servidor. Vercel se encarga de servir las peticiones interceptando la directiva de exportación por defecto de `src/index.ts`. No es necesario ejecutar ningún comando de build ya que Vercel usa `@vercel/node`.
Solo debes arrastrar la carpeta o conectarla vía GitHub y setear allí las Environment Variables.
