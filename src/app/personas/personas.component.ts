import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  @Input() persona:Persona;
  @Input() i:number;

  constructor() 
  { }

  ngOnInit(): void {
  }

}
