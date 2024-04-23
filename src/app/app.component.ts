import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';

  // Define una variable para la configuración de Firebase
  firebaseConfig = {
    apiKey: "AIzaSyBWoww0HSZLRKPQZtXxx4_RCub5V6FHIJ8",
    authDomain: "listado-personas-e6e6d.firebaseapp.com",
    // Añade otras configuraciones de Firebase si las tienes
  };

  constructor() {}

  ngOnInit(): void {
    // Inicializa Firebase usando initializeApp
    const app = initializeApp(this.firebaseConfig);
    // Puedes obtener auth y firestore si lo necesitas
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    initializeApp(this.firebaseConfig);
  }
}
