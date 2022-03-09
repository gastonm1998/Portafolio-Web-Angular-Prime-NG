import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificadosJavaScriptService } from 'src/app/servicios/api/certificados-java-script.service';


@Component({
  selector: 'app-e-java-script',
  templateUrl: './e-java-script.component.html',
  styleUrls: ['./e-java-script.component.scss']
})
export class EJavaScriptComponent implements OnInit {

  formularioJavaScript:FormGroup;

  linkID:any;

  date1: Date;

  constructor(
    private activeRoute:ActivatedRoute,
    private certificadoJavaScript:CertificadosJavaScriptService,
    public formulario:FormBuilder,
    public router:Router
  ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');
    //

    this.certificadoJavaScript.obtenerJavaScriptIndividual(this.linkID).subscribe( respuesta =>{

      this.formularioJavaScript.setValue({

        id: respuesta.id,
        titulo : respuesta.titulo,
        //fechaInicio: respuesta.fechaInicio,
        entidadEmisora: respuesta.entidadEmisora,
        linkCertificado: respuesta.linkCertificado,

      });


    });


    this.formularioJavaScript = this.formulario.group({

      id: this.linkID,
      titulo:[""],
      //fechaInicio:this.date1,
      entidadEmisora:[""],
      linkCertificado:[""],


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
        this.router.navigateByUrl('lobby#hard-skills');
  }

  enviarDatos():any{
    this.certificadoJavaScript.editarJavaScripts(this.formularioJavaScript.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }

}
