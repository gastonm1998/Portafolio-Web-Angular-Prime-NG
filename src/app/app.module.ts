
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
import {SliderModule} from 'primeng/slider';

import { EBannerPrincipalComponent } from './componentesEdicion/edicionBannerPrincipal/e-banner-principal/e-banner-principal.component';
import { ELenguajesComponent } from './componentesEdicion/edicionLenguajes/e-lenguajes/e-lenguajes.component';
import { ALenguajesComponent } from './componentesEdicion/edicionLenguajes/a-lenguajes/a-lenguajes.component';
import { ASoftSkillComponent } from './componentesEdicion/edicionSoftSkills/a-soft-skill/a-soft-skill.component';
import { ESoftSkillComponent } from './componentesEdicion/edicionSoftSkills/e-soft-skill/e-soft-skill.component';
import { EEducacionComponent } from './componentesEdicion/edicionEducacion/e-educacion/e-educacion.component';
import { AEducacionComponent } from './componentesEdicion/edicionEducacion/a-educacion/a-educacion.component';
import { AJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/a-java-script/a-java-script.component';
import { EJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/e-java-script/e-java-script.component';
import { EPhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/e-phyton/e-phyton.component';
import { APhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/a-phyton/a-phyton.component';
import { AHtmlCssComponent } from './componentesEdicion/edicionCertificadoHtmlCss/a-html-css/a-html-css.component';
import { EHtmlCssComponent } from './componentesEdicion/edicionCertificadoHtmlCss/e-html-css/e-html-css.component';
import { AIoTComponent } from './componentesEdicion/edicionCertificadoIoT/a-io-t/a-io-t.component';
import { EIoTComponent } from './componentesEdicion/edicionCertificadoIoT/e-io-t/e-io-t.component';
import { EDataBaseComponent } from './componentesEdicion/edicionCertificadoDataBase/e-data-base/e-data-base.component';
import { ADataBaseComponent } from './componentesEdicion/edicionCertificadoDataBase/a-data-base/a-data-base.component';
import { AComplementosComponent } from './componentesEdicion/edicionCertificadoComplementos/a-complementos/a-complementos.component';
import { EComplementosComponent } from './componentesEdicion/edicionCertificadoComplementos/e-complementos/e-complementos.component';
import { EInformacionComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion/e-informacion.component';
import { EInformacionEmailComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-email/e-informacion-email.component';
import { EInformacionTelefonoComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-telefono/e-informacion-telefono.component';
import { EInformacionDireccionComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-direccion/e-informacion-direccion.component';
import { EInformacionLinkedInComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-linked-in/e-informacion-linked-in.component';







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
    EBannerPrincipalComponent,
    ELenguajesComponent,
    ALenguajesComponent,
    ASoftSkillComponent,
    ESoftSkillComponent,
    EEducacionComponent,
    AEducacionComponent,
    AJavaScriptComponent,
    EJavaScriptComponent,
    EPhytonComponent,
    APhytonComponent,
    AHtmlCssComponent,
    EHtmlCssComponent,
    AIoTComponent,
    EIoTComponent,
    EDataBaseComponent,
    ADataBaseComponent,
    AComplementosComponent,
    EComplementosComponent,
    EInformacionComponent,
    EInformacionEmailComponent,
    EInformacionTelefonoComponent,
    EInformacionDireccionComponent,
    EInformacionLinkedInComponent,

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
    SliderModule

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
