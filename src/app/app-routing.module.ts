/*Modulo para el manejo de las rutas del proyecto */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AExperienciaComponent} from './componentesEdicion/edicionExperiencia/a-experiencia/a-experiencia.component';
import { EExperienciaComponent } from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';
import { CartelInicioComponent } from './home/cartel-inicio/cartel-inicio.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [

  {path:'', component:CartelInicioComponent},
  {path: 'experienciaEditar/:id', component: EExperienciaComponent},
  { path: 'experienciaAgregar', component: AExperienciaComponent},
  {path:'lobby', component:LobbyComponent},
  {path:'editarExperiencia', component:EExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
