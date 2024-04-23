import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent } from './personas2/personas/personas.component';
import { FormularioComponent } from './personas2/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './PersonasService.service';
import { AppRoutingModule } from './app-routing.module';
import { Personas2Component } from './personas2/personas2.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    PersonasComponent,
    FormularioComponent,
    Personas2Component,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataServices,
    LogginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
