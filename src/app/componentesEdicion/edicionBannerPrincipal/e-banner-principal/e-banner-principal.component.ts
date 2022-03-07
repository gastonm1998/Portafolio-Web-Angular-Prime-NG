import { Component, OnInit } from '@angular/core';
import {BannerPrincipalService} from "../../../servicios/api/banner-principal.service";
import {bannerPrincipal} from "../../../modelos/aboutMeBannerPrincipal.interface";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-banner-principal',
  templateUrl: './e-banner-principal.component.html',
  styleUrls: ['./e-banner-principal.component.scss']
})
export class EBannerPrincipalComponent implements OnInit {

  formularioBannerPrincipal:FormGroup;

  elementosBannerPrincipal:bannerPrincipal[];

  constructor(
    private bannerPrincipal:BannerPrincipalService,
    public formulario:FormBuilder,
    public router:Router)
    {
      /*creacion del formulario */
      this.formularioBannerPrincipal = this.formulario.group({
        id:["1"],
        nombre:[""],
        descripcion:[""]

      });

    }

  ngOnInit(): void {

    /*llamada a la API con los datos del banner */
    this.bannerPrincipal.obtenerBannerPrincipal().subscribe(respuesta =>{


      /*agrega los datos de la base de datos a los formularios a modificar */
      this.formularioBannerPrincipal.setValue({
        id: respuesta[0].id,
        nombre : respuesta[0].nombre ,
        descripcion: respuesta[0].descripcion
      });

    });


  }

  /*hace el envio de formulario modificado hacia la base de datos */
  editarDatos(){
    this.bannerPrincipal.editarBannerPrincipal(this.formularioBannerPrincipal.value).subscribe();
    this.router.navigateByUrl("/lobby");
  }
  /*metodo para volver al inicio */
  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }
}
