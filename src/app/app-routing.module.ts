import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Personas2Component } from './personas2/personas2.component';
import { FormularioComponent } from './personas2/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  { path: '', component:Personas2Component },
  { path: 'personas', component:Personas2Component },
  { path: 'personas/agregar', component:FormularioComponent },
  { path: 'personas/:id', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
