import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonasService } from '../PersonasService.service';
import { Router } from '@angular/router';
import { LogginService } from '../login/login.service';

@Component({
  selector: 'app-personas2',
  templateUrl: './personas2.component.html',
  styleUrls: ['./personas2.component.css']
})
export class Personas2Component implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private logginService:LogginService
  ) { }

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe({
      next: (value: any) => {
        // Supón que el valor es de tipo Persona[]
        const personas: Persona[] = value;
        this.personas = personas;
        this.personasService.setPersonas(personas);
      },
      error: (err) => {
        // Maneja el error
        console.error('Error al obtener las personas:', err);
      },
      complete: () => {
        // Maneja la finalización
        console.log('Se completó la obtención de personas.');
      }
    });
  }


  agregar() {
    this.router.navigate(['personas/agregar']);
  }

  isAutenticado(){
    return this.logginService.isAutenticado();
  }

}
