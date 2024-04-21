import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../PersonasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]//agregacion de un nuevo provedor creado
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada=new EventEmitter<Persona>();

  nombreInput="";
  apellidoInput="";
  
  constructor(
    private personaService:PersonasService
  ) {
    this.personaService.saludar.subscribe(
      (i:number) =>alert("El indice es: "+i)
    );
   }

  agregarPersona(){
    let p=new Persona(this.nombreInput,this.apellidoInput);
    // this.personas.push(p);
    // ya que no tenemos acceso a ese arreglo propagamos la informacion de la nueva persona, 
    //por emiter, esto es cuando se trabaja con modulacion
    // this.personaCreada.emit(p);
    //cuando trabajamos con servicios lo podemos mandar al service principal
    this.personaService.agregarPersona(p);
  }

  

  ngOnInit(): void {
  }

}
