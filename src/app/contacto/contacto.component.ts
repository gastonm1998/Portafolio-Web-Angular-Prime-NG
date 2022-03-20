import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*implementacion del backend contacto */

import { InformacionContactoService } from '../servicios/api/informacion-contacto.service';

import { InformacionContactoModelI } from '../modelos/informacionContactoModel.interface';

/*------------------------------------------ */
/*---------------control del loggin----------- */
import { TokenService } from 'src/app/jwt/service/token.service';
/*-------------------- ------------------------*/

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  /*implementacion del backend contactos*/

  elementosInformacionContacto:InformacionContactoModelI[];

  /*------------------------------------------ */

  isLogged= false;//control de loggin

  constructor(

    private informacionDeContacto:InformacionContactoService,
    private tokenService:TokenService//control del loggin

  ) { }

  ngOnInit(): void {

    this.informacionDeContacto.obtenerInformacionContacto().subscribe(respuesta =>{
      this.elementosInformacionContacto = respuesta;
      console.log(respuesta);
    });

        /*bloqueo de botones por token*/


        if (this.tokenService.getToken()){
          this.isLogged = true;
        }else{
          this.isLogged = false;
        }
        /*------------------------------------ */
  }

}
