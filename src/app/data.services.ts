import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona/persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}

    //Guardar Personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put
        ('https://listado-personas-e6e6d-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response=>console.log("resultado de guardar personas" + response),
            error=>console.log("Eror al mandar respuesta"+error)
        );
    }
}