import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

@Injectable()
export class LogginService {
    token: string | undefined;

    constructor(private router: Router) {}

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
                });
                // Redirigir al usuario después de un inicio de sesión exitoso
                this.router.navigate(['/']);
            })
            .catch((error) => {
                // Manejar el error de autenticación
                console.error('Error en el inicio de sesión:', error);
            });
    }

    getIdToken(): string | undefined {
        return this.token;
    }
}
