/*Modulo para el manejo de las rutas del proyecto */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBannerPrincipalComponent } from './componentesEdicion/edicionBannerPrincipal/e-banner-principal/e-banner-principal.component';
import { AJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/a-java-script/a-java-script.component';
import { EJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/e-java-script/e-java-script.component';
import { APhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/a-phyton/a-phyton.component';
import { EPhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/e-phyton/e-phyton.component';
import { AEducacionComponent } from './componentesEdicion/edicionEducacion/a-educacion/a-educacion.component';
import { EEducacionComponent } from './componentesEdicion/edicionEducacion/e-educacion/e-educacion.component';
import {AExperienciaComponent} from './componentesEdicion/edicionExperiencia/a-experiencia/a-experiencia.component';
import { EExperienciaComponent } from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';
import { ALenguajesComponent } from './componentesEdicion/edicionLenguajes/a-lenguajes/a-lenguajes.component';
import { ELenguajesComponent } from './componentesEdicion/edicionLenguajes/e-lenguajes/e-lenguajes.component';
import { ASoftSkillComponent } from './componentesEdicion/edicionSoftSkills/a-soft-skill/a-soft-skill.component';
import { ESoftSkillComponent } from './componentesEdicion/edicionSoftSkills/e-soft-skill/e-soft-skill.component';
import { CartelInicioComponent } from './home/cartel-inicio/cartel-inicio.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [

  {path:'', component:CartelInicioComponent},
  {path: 'experienciaEditar/:id', component: EExperienciaComponent},
  { path: 'experienciaAgregar', component: AExperienciaComponent},
  {path:'lobby', component:LobbyComponent},
  {path:'editarExperiencia', component:EExperienciaComponent},
  {path:"editarBannerPrincipal",component:EBannerPrincipalComponent},
  {path:"agregarLenguaje",component:ALenguajesComponent},
  {path:"lobby/editarLenguaje/:id",component:ELenguajesComponent},
  {path:"agregarSoftSkill",component:ASoftSkillComponent},
  {path:"lobby/editarSoftSkill/:id",component:ESoftSkillComponent},
  {path:"agregarEducacion",component:AEducacionComponent},
  {path:"lobby/editarEducacion/:id",component:EEducacionComponent},
  {path:"agregarcertJavaScript",component:AJavaScriptComponent},
  {path:"lobby/editarCertJavaScript/:id",component:EJavaScriptComponent},
  {path:"agregarcertPython",component:APhytonComponent},
  {path:"lobby/editarCertPython/:id",component:EPhytonComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
