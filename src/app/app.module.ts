
/*Modulos angular*/
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


/*Componentes Angular */
import { AppComponent } from './app.component';
import { CartelInicioComponent } from './home/cartel-inicio/cartel-inicio.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TarjetaPresentacionComponent } from './componentes-port/tarjeta-presentacion/tarjeta-presentacion.component';
import { SoftSkillsComponent } from './componentes-port/soft-skills/soft-skills.component';
import { ExperienciaComponent } from './componentes-port/experiencia/experiencia.component';
import { CertificadosComponent } from './componentes-port/certificados/certificados.component';
import { ProyectosComponent } from './componentes-port/proyectos/proyectos.component';
import { DescripcionSenkuComponent } from './componentes-port/proyectos/descripcion-senku/descripcion-senku.component';
import { DescripcionPortafolioComponent } from './componentes-port/proyectos/descripcion-portafolio/descripcion-portafolio.component';
import { DescripcionAnubisComponent } from './componentes-port/proyectos/descripcion-anubis/descripcion-anubis.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EExperienciaComponent } from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';
import { AExperienciaComponent } from './componentesEdicion/edicionExperiencia/a-experiencia/a-experiencia.component';


/* Componentes Ng Prime*/
import {ProgressBarModule} from 'primeng/progressbar';
import {RatingModule} from 'primeng/rating';
import {KnobModule} from 'primeng/knob';
import { RippleModule } from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {TimelineModule} from 'primeng/timeline';
import {PrimeIcons} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";

import { EBannerPrincipalComponent } from './componentesEdicion/edicionBannerPrincipal/e-banner-principal/e-banner-principal.component';






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
    ContactoComponent,
    EExperienciaComponent,
    AExperienciaComponent,
    EBannerPrincipalComponent
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
    RatingModule,
    ProgressBarModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
    ColorPickerModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    ToastModule,

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
