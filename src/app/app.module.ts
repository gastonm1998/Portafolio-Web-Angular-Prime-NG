import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartelInicioComponent } from './home/cartel-inicio/cartel-inicio.component';
import { LobbyComponent } from './lobby/lobby.component';

/* ng prime*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TarjetaPresentacionComponent } from './componentes-port/tarjeta-presentacion/tarjeta-presentacion.component';
import { SoftSkillsComponent } from './componentes-port/soft-skills/soft-skills.component';
import { ExperienciaComponent } from './componentes-port/experiencia/experiencia.component';
import {TimelineModule} from 'primeng/timeline';
import {PrimeIcons} from 'primeng/api';
import { CertificadosComponent } from './componentes-port/certificados/certificados.component';
import {AccordionModule} from 'primeng/accordion';
import { ProyectosComponent } from './componentes-port/proyectos/proyectos.component';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import { DescripcionSenkuComponent } from './componentes-port/proyectos/descripcion-senku/descripcion-senku.component';
import { RippleModule } from 'primeng/ripple';
import { DescripcionPortafolioComponent } from './componentes-port/proyectos/descripcion-portafolio/descripcion-portafolio.component';
import { DescripcionAnubisComponent } from './componentes-port/proyectos/descripcion-anubis/descripcion-anubis.component';
import { ContactoComponent } from './contacto/contacto.component';
import {KnobModule} from 'primeng/knob';
const appRoutes:Routes = [
  {path:'', component:CartelInicioComponent},
  {path:'lobby', component:LobbyComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    CartelInicioComponent,
    LobbyComponent,
    TarjetaPresentacionComponent,
    SoftSkillsComponent,
    ExperienciaComponent,
    CertificadosComponent,
    ProyectosComponent,
    DescripcionSenkuComponent,
    DescripcionPortafolioComponent,
    DescripcionAnubisComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    CardModule,
    AccordionModule,
    TimelineModule,
    CarouselModule,
    KnobModule,
    DialogModule,
    FormsModule,
    CommonModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
