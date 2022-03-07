import { Component, OnInit } from '@angular/core';
import {LenguajesService} from "../../../servicios/api/lenguajes.service";
import { LenguajesI } from 'src/app/modelos/aboutMeLenguajes.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-lenguajes',
  templateUrl: './e-lenguajes.component.html',
  styleUrls: ['./e-lenguajes.component.scss']
})
export class ELenguajesComponent implements OnInit {

  formularioLenguajes:FormGroup;

  elementosLenguaje:LenguajesI[];

  linkID:any;

  val1:number;

  constructor(
    private lenguajeService:LenguajesService,
    public formulario:FormBuilder,
    public router:Router,
    private activeRoute:ActivatedRoute
  ) {
    //traer id desde la url
    this.linkID = this.activeRoute.snapshot.paramMap.get('id');

    /*creacion del formulario */
    this.formularioLenguajes = this.formulario.group({
      id:this.linkID,
      nombreDelLenguaje:[""],
      dominio:[""]

    });
   }

  ngOnInit(): void {

    /*llamada a la API con los datos del banner */
    this.lenguajeService.obtenerLenguajesIndividual(this.linkID).subscribe(respuesta =>{


      /*agrega los datos de la base de datos a los formularios a modificar */
      this.formularioLenguajes.setValue({
        id: respuesta.id,
        nombreDelLenguaje : respuesta.nombreDelLenguaje ,
        dominio: respuesta.dominio
      });

    });

  }

  enviarDatos():any{

    this.lenguajeService.editarLenguajes(this.formularioLenguajes.value).subscribe();
    this.router.navigateByUrl("/lobby");
  }
  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }

}
