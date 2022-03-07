import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {LenguajesService} from "../../../servicios/api/lenguajes.service";
@Component({
  selector: 'app-a-lenguajes',
  templateUrl: './a-lenguajes.component.html',
  styleUrls: ['./a-lenguajes.component.scss']
})
export class ALenguajesComponent implements OnInit {

  val1: number;
  formularioLenguajes:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private lenguajes:LenguajesService,
    private activeRoute:ActivatedRoute,
    public router:Router
  ) {

    this.formularioLenguajes = this.formulario.group({

      nombreDelLenguaje:[""],
      dominio: [""]

    });
   }

  ngOnInit(): void {
  }


  enviarDatos():any{

    this.lenguajes.agregarLenguajes(this.formularioLenguajes.value).subscribe();
    this.router.navigateByUrl("/lobby");
  }
  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }
}
