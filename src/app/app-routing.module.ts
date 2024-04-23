import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Personas2Component } from './personas2/personas2.component';
import { FormularioComponent } from './personas2/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes=[
  { path: '', component:Personas2Component, canActivate:[LoginGuardian] },
  { path: 'personas', component:Personas2Component, canActivate:[LoginGuardian] },
  { path: 'personas/agregar', component:FormularioComponent, canActivate:[LoginGuardian] },
  { path: 'personas/:id', component: FormularioComponent, canActivate:[LoginGuardian] },
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
