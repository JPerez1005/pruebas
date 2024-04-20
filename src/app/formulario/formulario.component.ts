import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada=new EventEmitter<Persona>();

  nombreInput="";
  apellidoInput="";

  agregarPersona(){
    let p=new Persona(this.nombreInput,this.apellidoInput);
    // this.personas.push(p);
    // ya que no tenemos acceso a ese arreglo propagamos la informacion de la nueva persona, //por emiter
    this.personaCreada.emit(p);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
