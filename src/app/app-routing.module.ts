import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AExperienciaComponent} from './componentesEdicion/edicionExperiencia/a-experiencia/a-experiencia.component';

import { EExperienciaComponent } from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';

const routes: Routes = [

  {path: 'experienciaEditar/:id', component: EExperienciaComponent},
  { path: 'experienciaAgregar', component: AExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
