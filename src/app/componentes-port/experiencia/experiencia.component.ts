import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import { Router } from '@angular/router';

/*imports de experiencia */
import { ApiService } from '../../servicios/api/api.service';
import {ExperienciaI} from '../../modelos/experiencia.interface';
/*------------------------------------------------------------ */

/*import de educacion*/
import { EducacionService } from 'src/app/servicios/api/educacion.service';
import { EducacionI } from 'src/app/modelos/educacion.interface';
/*---------------------------------------------------------------------- */


import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],

})
export class ExperienciaComponent implements OnInit {

  /*array experiencia */
  experiencia: ExperienciaI[] = [];
  /*--------------------------- */

  /*array educacion */
  elementosEducacion:EducacionI[];
  /*--------------------------- */

  //educacion: any[] = [];

  constructor(
    private api:ApiService, //experiencia
    private educacion:EducacionService,//educacion
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router:Router) { }

  ngOnInit(): void {

    this.primengConfig.ripple = true;

    /*metodo get all experiencia */
    this.api.obtenerDataExperiencia().subscribe(data => {
      this.experiencia = data;
    });
    /*-------------------------------------------------- */

    /* metodo get all educacion*/
    this.educacion.obtenerEducacion().subscribe(respuesta =>{
      this.elementosEducacion =  respuesta;
      console.log(respuesta);
    })
    /*--------------------------------------------------- */


  }

  /*metodo borrar experiencia */
  borrarExperiencia(id:any){
      this.api.eliminarExperiencia(id).subscribe();
  }

  confirm(event: Event,id:any) {
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
        this.borrarExperiencia(id);

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
  /*-------------------------------------------- */

  /*metodo eliminar educacion*/

  borrarEducacion(id:any){

    this.educacion.eliminarEducacion(id).subscribe();

  }

  confirmBorrarEducacion(event: Event,id:any) {
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

        this.borrarEducacion(id);

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

  /*------------------------- */




  /*metodo recargar pagina */
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby#experiencia');
    }

}
