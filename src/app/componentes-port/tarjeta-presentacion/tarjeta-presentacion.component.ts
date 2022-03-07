import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 /*implementacion del backend banner principal*/
 import {BannerPrincipalService} from "../../servicios/api/banner-principal.service";
 import {bannerPrincipal} from "../../modelos/aboutMeBannerPrincipal.interface";

  /*------------------------------------------ */

/*implementacion del backend lenguajes */
import { LenguajesI } from 'src/app/modelos/aboutMeLenguajes.interface';
import { LenguajesService } from 'src/app/servicios/api/lenguajes.service';
/*------------------------------------------ */

import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.scss']
})
export class TarjetaPresentacionComponent implements OnInit {
  /*implementacion del backend banner principal*/

  elementosBannerPrincipal:bannerPrincipal[];

  /*------------------------------------------ */

  /*implementacion del backend Lenguaje*/

  elementosLenguaje:LenguajesI[];

  /*------------------------------------------ */


  /*array con imagenes del carousel */
    products: any[] =[] ;


/*--------------------------------------------------*/

  /*Valores de las soft skills */
    value_1: number = 90;
    value_2: number = 85;
    value_3: number = 80;
    value_4: number = 80;
    value_5: number = 80;
    value_6: number = 50;

  /*---------------------------- */

  constructor(
    private router:Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private bannerPrincipal:BannerPrincipalService, //backend banner principal
    private lenguaje:LenguajesService //backend lenguajes
  ) { }

  ngOnInit(): void {

    /*LLamada desde el backend banner principal*/

    this.bannerPrincipal.obtenerBannerPrincipal().subscribe(respuesta =>{
      this.elementosBannerPrincipal = respuesta
    });

    /*------------------------------------------ */

   /*LLamada desde el backend lenguaje*/

    this.lenguaje.obtenerLenguajes().subscribe( respuesta =>{
      this.elementosLenguaje = respuesta
      console.log(respuesta)
    })

  /*------------------------------------------ */





  }

  /*metodos de eliminacion backend Lenguaje */

  borrarExperiencia(id:any){

    this.lenguaje.eliminarLenguajes(id).subscribe();
  }
  /*componentes del cartel de confirmacion de eliminacion */
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby#experiencia');
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





  /*----------------------------------------- */


}
