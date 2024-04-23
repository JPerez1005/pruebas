import { EventEmitter, Injectable } from "@angular/core";
import { Persona } from "./persona/persona.model";
import { LoggingService } from "./LoggingService.service";
import { DataServices } from "./data.services";

@Injectable()
export class PersonasService{
    personas: Persona[]=[];

    saludar=new EventEmitter<number>();

    constructor(
        private loggingService:LoggingService,
        private dataServices:DataServices    
    ){ }

    setPersonas(personas:Persona[]){
        this.personas=personas;
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        if (this.personas==null) {
            this.personas=[];
        }
        this.personas.push(persona);
        this.loggingService.enviaMensajeAConsola("Persona agregada en el arreglo: "+persona.nombre);
        this.dataServices.guardarPersonas(this.personas);
    }

    modificarPersona(index:number,persona: Persona){
        let p=this.personas[index];
        p.nombre=persona.nombre;
        p.apellido=persona.apellido;
        this.dataServices.guardarPersonas(this.personas);
    }

    buscarPorId(index:number){
        let persona: Persona=this.personas[index];
        return persona;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataServices.guardarPersonas(this.personas);
    }


}