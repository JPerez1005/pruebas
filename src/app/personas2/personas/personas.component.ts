import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona/persona.model';
import { PersonasService } from '../../PersonasService.service';
import { LogginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  @Input() persona:Persona;
  @Input() i:number;

  constructor(
    private personasService:PersonasService,
    private logginService:LogginService
  ) 
  { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.i);
  }

  isAutenticado(){
    return this.logginService.isAutenticado();
  }

}
