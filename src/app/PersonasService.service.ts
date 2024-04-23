import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona/persona.model";
import { LoggingService } from "./LoggingService.service";
import { DataServices } from "./data.services";

@Injectable()
export class PersonasService{
    personas: Persona[]=[
        new Persona("Julián","Pérez"),
        new Persona("Laura","Perez")
    ];

    saludar=new EventEmitter<number>();

    constructor(
        private loggingService:LoggingService,
        private dataServices:DataServices    
    ){ }

    agregarPersona(persona: Persona){
        this.personas.push(persona);
        this.loggingService.enviaMensajeAConsola("Persona agregada en el arreglo: "+persona.nombre);
        this.dataServices.guardarPersonas(this.personas);
    }

    buscarPorId(index:number){
        let persona: Persona=this.personas[index];
        return persona;
    }

    modificarPersona(index:number,persona: Persona){
        let p=this.personas[index];
        p.nombre=persona.nombre;
        p.apellido=persona.apellido;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }
}