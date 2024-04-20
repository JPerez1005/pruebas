import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  deshabilitar=false;
  oculto=true;
  mensaje="No se ah agregado ninguna persona.";
  titulo='';
  mostrar=false;

  


  agregarPersona(){
    this.oculto=false;
    this.mostrar=true;
    this.mensaje="Persona agregada";
    this.deshabilitar=true;
  }

  modificarTitulo(event:Event){
    this.titulo=(<HTMLInputElement>event.target).value;
  }

  nombre: string='Julián';
  apellido: string='Perez';
  private edad: number=22;

  constructor() { }


  getEdad():number{
    return this.edad;
  }

  ngOnInit(): void {
  }

}
