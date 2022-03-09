import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JavaScriptModelI } from 'src/app/modelos/javaScriptModel';
import { CertificadosJavaScriptService } from 'src/app/servicios/api/certificados-java-script.service';

@Component({
  selector: 'app-a-java-script',
  templateUrl: './a-java-script.component.html',
  styleUrls: ['./a-java-script.component.scss']
})
export class AJavaScriptComponent implements OnInit {

  formularioCertificadoJavaScript:FormGroup;


  date1:Date;

  constructor(

    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    public router:Router,
    private certificadoJavaScript:CertificadosJavaScriptService
  ) {

      this.formularioCertificadoJavaScript = this.formulario.group({

      titulo:[""],
      fechaInicio:[""],
      entidadEmisora:[""],
      linkCertificado:[""]

      })

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
        this.router.navigateByUrl('lobby#hard-skills');
  }

  enviarDatos():any{
    this.certificadoJavaScript.agregarJavaScript(this.formularioCertificadoJavaScript.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }

}
