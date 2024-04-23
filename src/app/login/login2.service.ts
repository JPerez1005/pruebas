import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable()
export class LogginService{
    token:string;

    constructor(private router:Router){}

    /*login(email:string,password:string){
        const auth=getAuth();
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user; // Puedes obtener el usuario autenticado aquí
            // Realiza cualquier acción adicional si es necesario, por ejemplo, navegar a otra ruta
            console.log('Usuario autenticado:', user);
            // Puedes almacenar el token del usuario si es necesario
            this.token = user?.getIdToken();
            // Por ejemplo, redirigir al usuario
            this.router.navigate(['/']);
        })
        .catch((error) => {
            // Maneja el error de autenticación
            console.error('Error en el inicio de sesión:', error);
            // Puedes mostrar un mensaje de error o realizar otra acción
        });
    }*/

    /*login(email:string,password:string){
        const auth=getAuth();
        auth.signInWithEmailAndPassword(email, password).
        then(
            response=>{
                auth.currentUser?.getIdToken.then(
                    token=>{
                        this.token=token;
                    }
                )
            }
        )
        this.router.navigate(['/']);
    }

    getIdToken(){
        return this.token;
    }*/
}