import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonasService } from '../PersonasService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas2',
  templateUrl: './personas2.component.html',
  styleUrls: ['./personas2.component.css']
})
export class Personas2Component implements OnInit {

  personas: Persona[]=[];

  constructor(
    private personasService:PersonasService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.personas=this.personasService.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}
