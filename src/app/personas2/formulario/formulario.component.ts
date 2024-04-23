import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../../persona/persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../PersonasService.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  index:number;
  
  constructor(
    private personaService:PersonasService,
    private router:Router,
    private route: ActivatedRoute
  ){
    this.personaService.saludar.subscribe(
      (i:number) =>alert("El indice es: "+i)
    );
  }

  onGuardarPersona(){
    let p=new Persona(this.nombreInput,this.apellidoInput);
    // this.personas.push(p);
    // ya que no tenemos acceso a ese arreglo propagamos la informacion de la nueva persona, 
    //por emiter, esto es cuando se trabaja con modulacion
    // this.personaCreada.emit(p);

    if (this.index) {
      this.personaService.modificarPersona(this.index,p);
    } else {
      //cuando trabajamos con servicios lo podemos mandar al service principal
      this.personaService.agregarPersona(p);
    }
    this.router.navigate(['personas']);
  }

  onEliminarPersona(){
    this.personaService.eliminarPersona(this.index);
    this.router.navigate(['personas']);
  }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    if (this.index) {//si el indice es distinto de nulo
      let persona:Persona=this.personaService.buscarPorId(this.index);
      this.nombreInput=persona.nombre;
      this.apellidoInput=persona.apellido;
    }
  }

}
