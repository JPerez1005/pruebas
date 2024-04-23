import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

@Injectable()
export class LogginService {
    // Declarar el tipo de `token` como `string | null` para que pueda ser `null`.
    token: string | null;

    constructor(private router: Router) {
        // Recupera el token de `localStorage` cuando se instancia la clase
        this.token = localStorage.getItem('authToken');
    }

    login(email: string, password: string): void {
        const auth = getAuth(); // Obtiene la instancia de autenticación

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                // Inicio de sesión exitoso
                const user = userCredential.user;
                console.log('Usuario autenticado:', user);
                // Almacenar el token del usuario si es necesario
                user?.getIdToken().then((token: string) => {
                    this.token = token;
                    // Guarda el token en `localStorage`
                    localStorage.setItem('authToken', token);
                });
                // Redirigir al usuario después de un inicio de sesión exitoso
                this.router.navigate(['/']);
            })
            .catch((error) => {
                // Manejar el error de autenticación
                console.error('Error en el inicio de sesión:', error);
            });
    }

    getIdToken(): string | null {
        return this.token;
    }

    isAutenticado(): boolean {
        return this.token !== null;
    }

    isNotAutenticado(): boolean {
        return this.token === null;
    }

    logout(): void {
        const auth = getAuth();
        auth.signOut().then(() => {
            // Al cerrar sesión, limpiar el token
            this.token = null;
            // Elimina el token de `localStorage`
            localStorage.removeItem('authToken');
            // Redirigir al usuario a la página de inicio de sesión
            this.router.navigate(['login']);
        });
    }
}
