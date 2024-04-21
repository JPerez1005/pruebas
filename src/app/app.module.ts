import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './PersonasService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    PersonasComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
