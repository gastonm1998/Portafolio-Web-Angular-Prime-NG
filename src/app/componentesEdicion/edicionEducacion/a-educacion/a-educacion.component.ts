import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EducacionI } from 'src/app/modelos/educacion.interface';
import { EducacionService } from 'src/app/servicios/api/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-educacion',
  templateUrl: './a-educacion.component.html',
  styleUrls: ['./a-educacion.component.scss']
})
export class AEducacionComponent implements OnInit {

  formularioEducacion:FormGroup;

   //fecha
   date1:Date;
   date2:Date;

  constructor(
    private educaciones:EducacionService,
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    public router:Router) {

      this.formularioEducacion = this.formulario.group({
        educacion:[""],
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
    this.educaciones.agregarEducacion(this.formularioEducacion.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#experiencia");
  }

}
