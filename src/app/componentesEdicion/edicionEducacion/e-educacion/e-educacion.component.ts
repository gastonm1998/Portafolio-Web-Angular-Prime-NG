import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EducacionService } from 'src/app/servicios/api/educacion.service';

@Component({
  selector: 'app-e-educacion',
  templateUrl: './e-educacion.component.html',
  styleUrls: ['./e-educacion.component.scss']
})
export class EEducacionComponent implements OnInit {

  formularioEducacion:FormGroup;

  linkID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private educacion:EducacionService,
    public formulario:FormBuilder,
    public router:Router
  ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');
    //

    this.educacion.obtenerEducacionIndividual(this.linkID).subscribe( respuesta =>{

      this.formularioEducacion.setValue({
        id: respuesta.id,
        educacion : respuesta.educacion,
        fechaInicio: respuesta.fechaInicio,
        fechaFin: respuesta.fechaFin,
        color: respuesta.color,
        descripcion: respuesta.descripcion
      });


    });


    this.formularioEducacion = this.formulario.group({

      id: this.linkID,
      educacion:[""],
      fechaInicio:[""],
      fechaFin:[""],
      color:[""],
      descripcion:[""]

    });

   }

  ngOnInit(): void {

     //fecha
     let today = new Date();
     let month = today.getMonth();
     let year = today.getFullYear();
     let prevMonth = (month === 0) ? 11 : month -1;
     let prevYear = (prevMonth === 11) ? year - 1 : year;
     let nextMonth = (month === 11) ? 0 : month + 1;
     let nextYear = (nextMonth === 0) ? year + 1 : year;

  }

  editarDatos():any{
    this.educacion.editarEducacion(this.formularioEducacion.value).subscribe();
    this.router.navigateByUrl("/lobby#experiencia");
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#experiencia");
  }
}
