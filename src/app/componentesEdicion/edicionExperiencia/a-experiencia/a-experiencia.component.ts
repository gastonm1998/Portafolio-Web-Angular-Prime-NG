import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  date1:Date;
  date2:Date;
  //color
  color: string;

  //descripcion
  texto: any;





  constructor(public formulario:FormBuilder, private apiService:ApiService, private activeRoute:ActivatedRoute,public router:Router) {
    this.formularioExperiencia = this.formulario.group({
      nombreEmpresa:[""],
      fechaInicio:this.date1 ,
      fechaFin:this.date2,
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

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby#experiencia');
    }

  enviarDatos():any{

    console.log(this.formularioExperiencia.value);
    console.log(typeof( this.formularioExperiencia.value.fechaInicio));
    console.log(this.formularioExperiencia.value.fechaInicio);
    console.log(typeof( this.formularioExperiencia.value.fechaFin));
    console.log( this.formularioExperiencia.value.fechaFin);
    this.apiService.agregarExperiencia(this.formularioExperiencia.value).subscribe();
    /*this.router.navigateByUrl("/lobby#experiencia");*/
    this.reloadComponent();
  }
  volverAlInicio(){
    this.router.navigateByUrl("/lobby#experiencia");
  }


}
