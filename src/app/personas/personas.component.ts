import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonasService } from '../PersonasService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  @Input() persona:Persona;
  @Input() i:number;

  constructor(
    private personasService:PersonasService
  ) 
  { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.i);
  }

}
