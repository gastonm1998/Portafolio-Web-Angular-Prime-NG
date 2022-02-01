import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
@Component({
  selector: 'app-a-experiencia',
  templateUrl: './a-experiencia.component.html',
  styleUrls: ['./a-experiencia.component.scss']
})
export class AExperienciaComponent implements OnInit {



  formularioExperiencia:FormGroup;




  //emp
  nombre: string = "";

  //fecha

  rangeDates: Date[];
  //color
  color: string;

  //descripcion
  texto: any;





  constructor(public formulario:FormBuilder, private apiService:ApiService) {
    this.formularioExperiencia = this.formulario.group({
      nombreEmpresa:[""],
      fecha:[""],
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

  enviarDatos():any{

    console.log(this.formularioExperiencia.value);
    console.log(typeof( this.formularioExperiencia.value.fecha1));
    this.apiService.agregarExperiencia(this.formularioExperiencia.value).subscribe();
  }


}
