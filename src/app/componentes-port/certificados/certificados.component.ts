import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*implementacion del backend javaScript */

import { CertificadosJavaScriptService } from 'src/app/servicios/api/certificados-java-script.service';
import { JavaScriptModelI } from 'src/app/modelos/javaScriptModel.interface';

/*------------------------------------------ */

/*implementacion del backend python */

import { CertificadosPythonService } from 'src/app/servicios/api/certificados-python.service';
import { PythonModelI } from 'src/app/modelos/pythonModel.interface';
/*------------------------------------------ */

/*implementacion del backend html css */

import { CertificadosHtmlCssService } from 'src/app/servicios/api/certificados-html-css.service';
import { HtmlCssModelI } from 'src/app/modelos/htmlCssModel.interface';
/*------------------------------------------ */

/*implementacion del backend iot */

import { CertificadosIoTService } from 'src/app/servicios/api/certificados-io-t.service';
import { IoTModelI } from 'src/app/modelos/IotModel.Interface';
/*------------------------------------------ */

/*implementacion del backend data base */

import { CertificadosDataBaseService } from 'src/app/servicios/api/certificados-data-base.service';
import { DataBaseModelI } from 'src/app/modelos/dateBaseModel.interface';

/*------------------------------------------ */

/*implementacion del backend complementos */

import { CertificadosComplementariosService } from 'src/app/servicios/api/certificados-complementarios.service';
import { ComplementosModelI } from 'src/app/modelos/complementosModel.interface';
/*------------------------------------------ */

/*---------------control del loggin----------- */
import { TokenService } from 'src/app/jwt/service/token.service';
/*-------------------- ------------------------*/

import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {
   /*implementacion del backend certificacdos javaScript*/

   elementosCertJavaScript:JavaScriptModelI[];

   /*------------------------------------------ */

   /*implementacion del backend certificacdos python*/

   elementosCertPython:PythonModelI[];

   /*------------------------------------------ */

    /*implementacion del backend certificacdos html css*/

    elementosCertHtmlCss:HtmlCssModelI[];

    /*------------------------------------------ */

    /*implementacion del backend certificacdos iot*/

    elementosCertIot:IoTModelI[];

    /*------------------------------------------ */

    /*implementacion del backend certificacdos iot*/

    elementosCertDataBase:IoTModelI[];

    /*------------------------------------------ */

    /*implementacion del backend certificacdos iot*/

    elementosCertComplementos:ComplementosModelI[];

    /*------------------------------------------ */

    isLogged= false;//control de loggin

  constructor(
    private router:Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private certificadoJavaScript:CertificadosJavaScriptService,//backend certificado javaScript
    private certificadoPython:CertificadosPythonService,//backend certificado python
    private certificadoHtmlCss:CertificadosHtmlCssService,//backend certificado html css
    private certificadoIot:CertificadosIoTService,//backend certificado iot
    private certificadoDataBase:CertificadosDataBaseService, //backend certificado data base
    private certificadoComplementos:CertificadosComplementariosService,//backend certificado complementos
    private tokenService:TokenService//control del loggin
  ) {

   }

  ngOnInit(): void {

      /*LLamada Get desde el backend certificado JavaScript*/

      this.certificadoJavaScript.obtenerJavaScript().subscribe(respuesta =>{
        this.elementosCertJavaScript = respuesta;
        console.log(respuesta);
      });

      /*------------------------------------------ */

      /*LLamada Get desde el backend certificado JavaScript*/

      this.certificadoPython.obtenerPython().subscribe(respuesta =>{
        this.elementosCertPython = respuesta;
        console.log(respuesta);
      });

      /*------------------------------------------ */

      /*LLamada Get desde el backend certificado Html Css*/

      this.certificadoHtmlCss.obtenerHtmlCss().subscribe(respuesta =>{
      this.elementosCertHtmlCss = respuesta;
      console.log(respuesta);
      });

      /*------------------------------------------ */

      /*LLamada Get desde el backend certificado iot*/

      this.certificadoIot.obtenerIot().subscribe(respuesta =>{
        this.elementosCertIot = respuesta;
        console.log(respuesta);
      });

      /*------------------------------------------ */

      /*LLamada Get desde el backend certificado data base*/

      this.certificadoDataBase.obtenerDataBase().subscribe(respuesta =>{
      this.elementosCertDataBase = respuesta;
      console.log(respuesta);
      });

      /*------------------------------------------ */

      /*LLamada Get desde el backend certificado complementos*/

      this.certificadoComplementos.obtenerComplementos().subscribe(respuesta =>{
      this.elementosCertComplementos = respuesta;
      console.log(respuesta);
      });

      /*------------------------------------------ */

    /*bloqueo de botones por token*/
    this.primengConfig.ripple = true;

    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    /*------------------------------------ */

  }

  /*metodos de eliminacion backend JavaScript */

  borrarCertificadoJavaScript(id:any){

    this.certificadoJavaScript.eliminarJavaScript(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoJavaScript(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoJavaScript(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }



    /*metodos de eliminacion backend Python */

  borrarCertificadoPython(id:any){

    this.certificadoPython.eliminarPython(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoPython(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoPython(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }

  /*----------------------------------------- */



  /*metodos de eliminacion backend html css */

  borrarCertificadoHtmlCss(id:any){

    this.certificadoHtmlCss.eliminarHtmlCss(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoHtmlCss(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoHtmlCss(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }



    /*metodos de eliminacion backend iot */

  borrarCertificadoIot(id:any){

    this.certificadoIot.eliminarIot(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoIot(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoIot(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }

  /*----------------------------------------- */


  /*metodos de eliminacion backend data base */

  borrarCertificadoDataBase(id:any){

    this.certificadoDataBase.eliminarDataBase(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoDataBase(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoDataBase(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }

  /*----------------------------------------- */


  /*metodos de eliminacion backend complementos */

  borrarCertificadoComplementos(id:any){

    this.certificadoComplementos.eliminarComplementos(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */


    confirmDeleteCertificadoComplementos(event: Event,id:any) {
      this.confirmationService.confirm({
        target: event.target!,
        message: "¿Estas seguro que desea eliminar?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Experiencia eliminada",
            detail: "Se a eliminado sastifactoriamente"
          });
          this.borrarCertificadoComplementos(id);

          this.reloadComponent();

        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Cancelado",
            detail: "Se a cancelado la eliminacion"
          });
        }
      });
    }

  /*----------------------------------------- */




  /*metodo recargar pagina */
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby');
    }
}
