import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona/persona.model";
import { LoggingService } from "./LoggingService.service";

@Injectable()
export class PersonasService{
    personas: Persona[]=[
        new Persona("Julián","Pérez"),
        new Persona("Laura","Perez")
    ];

    saludar=new EventEmitter<number>();

    constructor(private loggingService:LoggingService){ }

    agregarPersona(persona: Persona){
        this.personas.push(persona);
        this.loggingService.enviaMensajeAConsola("Persona agregada en el arreglo: "+persona.nombre);
    }
}