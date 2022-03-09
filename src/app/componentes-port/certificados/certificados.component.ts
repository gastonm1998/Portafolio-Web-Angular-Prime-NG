import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*implementacion del backend Soft Skills */

import { CertificadosJavaScriptService } from 'src/app/servicios/api/certificados-java-script.service';
import { JavaScriptModelI } from 'src/app/modelos/javaScriptModel';

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



  constructor(
    private router:Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private certificadoJavaScript:CertificadosJavaScriptService//backend certificado javaScript
  ) {

   }

  ngOnInit(): void {

      /*LLamada Get desde el backend certificado JavaScript*/

      this.certificadoJavaScript.obtenerJavaScript().subscribe(respuesta =>{
        this.elementosCertJavaScript = respuesta;
        console.log(respuesta);
      });

      /*------------------------------------------ */
  }

  /*metodos de eliminacion backend Lenguaje */

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

  /*----------------------------------------- */

  /*metodo recargar pagina */
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby');
    }
}
