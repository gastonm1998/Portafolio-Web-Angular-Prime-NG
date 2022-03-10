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

   /*implementacion del backend certificacdos javaScript*/

   elementosCertPython:PythonModelI[];

   /*------------------------------------------ */

  constructor(
    private router:Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private certificadoJavaScript:CertificadosJavaScriptService,//backend certificado javaScript
    private certificadoPython:CertificadosPythonService//backend certificado python
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

    /*metodos de eliminacion backend JavaScript */

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

  /*----------------------------------------- */

  /*metodo recargar pagina */
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby');
    }
}
