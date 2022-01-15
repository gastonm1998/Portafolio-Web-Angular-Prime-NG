import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EExperienciaComponent} from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';

const routes: Routes = [
  { path: 'experienciaEdicion', component: EExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
