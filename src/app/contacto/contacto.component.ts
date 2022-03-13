import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*implementacion del backend contacto */

import { InformacionContactoService } from '../servicios/api/informacion-contacto.service';

import { InformacionContactoModelI } from '../modelos/informacionContactoModel.interface';

/*------------------------------------------ */

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  /*implementacion del backend contactos*/

  elementosInformacionContacto:InformacionContactoModelI[];

  /*------------------------------------------ */

  constructor(

    private informacionDeContacto:InformacionContactoService

  ) { }

  ngOnInit(): void {

    this.informacionDeContacto.obtenerInformacionContacto().subscribe(respuesta =>{
      this.elementosInformacionContacto = respuesta;
      console.log(respuesta);
    });
  }

}
