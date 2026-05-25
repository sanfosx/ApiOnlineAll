
import * as admin from 'firebase-admin';

// Esta configuración permite la inicialización dual:
// 1. Para Vercel: Lee las credenciales de una variable de entorno que contiene el JSON.
// 2. Para Desarrollo Local: Usa la variable de entorno GOOGLE_APPLICATION_CREDENTIALS que apunta a un archivo.

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

try {
    if (admin.apps.length === 0) {
        if (serviceAccountJson && serviceAccountJson.trim().length > 0) {
            // Entorno de producción/Vercel: las credenciales están en una variable de entorno.
            console.log('Initializing Firebase Admin with FIREBASE_SERVICE_ACCOUNT_JSON');
            const serviceAccount = JSON.parse(serviceAccountJson);
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        } else {
            // Entorno de desarrollo local: el SDK busca el archivo a través de GOOGLE_APPLICATION_CREDENTIALS.
            console.log('Initializing Firebase Admin with default credentials (local file)');
            admin.initializeApp();
        }
    }
} catch (error: any) {
    if (error.code !== 'app/duplicate-app') {
        console.error('CRITICAL: Error en la inicialización de Firebase Admin:', error);
    }
}


const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
