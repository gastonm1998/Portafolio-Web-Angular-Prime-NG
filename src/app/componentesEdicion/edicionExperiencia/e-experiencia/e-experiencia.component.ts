import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-experiencia',
  templateUrl: './e-experiencia.component.html',
  styleUrls: ['./e-experiencia.component.scss']
})
export class EExperienciaComponent implements OnInit {

  formularioExperiencia:FormGroup;

  linkID:any;

  value1: any ;

  value10: any ;

  color1: string;


  constructor(
    private activeRoute:ActivatedRoute,
    private apiService:ApiService,
    public formulario:FormBuilder,
    public router:Router

   ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');
    //
    console.log(this.linkID);
    this.apiService.obtenerDataExperienciaIndividual(this.linkID).subscribe( respuesta =>{
      console.log(respuesta);

      this.formularioExperiencia.setValue({
        nombreEmpresa : respuesta.nombreEmpresa ,
        fechaInicio: respuesta.fechaInicio.slice(0,10),
        fechaFin: respuesta.fechaFin.slice(0,10),
        color:respuesta["color"],
        descripcion:respuesta['descripcion']
      });


    });


    this.formularioExperiencia = this.formulario.group({
      nombreEmpresa:[""],
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


    this.apiService.editarExperiencia(this.linkID,this.formularioExperiencia.value).subscribe();
    this.router.navigateByUrl("/lobby#experiencia");
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#experiencia");
  }
}
