import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona/persona.model';
import { LogginService } from './login/login.service';

@Injectable()
export class DataServices{
    constructor(
        private httpClient:HttpClient,
        private loginService:LogginService
    ){}

    cargarPersonas(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-e6e6d-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guardar Personas
    guardarPersonas(personas: Persona[]){
        const token=this.loginService.getIdToken();
        this.httpClient.put
        ('https://listado-personas-e6e6d-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response=>console.log("resultado de guardar personas" + response),
            error=>console.log("Eror al mandar respuesta"+error)
        );
    }

    modificarPersona(index:number,persona:Persona){
        let url:string;
        url='https://listado-personas-e6e6d-default-rtdb.firebaseio.com/datos/'+index+'.json';
        this.httpClient.put(url,persona)
            .subscribe(
                response=>console.log("resultado de modificar personas" + response),
                error=>console.log("Eror al modificar respuesta"+error)
            );
    }

    eliminarPersona(index:number){
        let url:string;
        url='https://listado-personas-e6e6d-default-rtdb.firebaseio.com/datos/'+index+'.json';
        this.httpClient.delete(url)
            .subscribe(
                response=>console.log("resultado de eliminar personas" + response),
                error=>console.log("Eror al eliminar respuesta"+error)
            );
    }
}