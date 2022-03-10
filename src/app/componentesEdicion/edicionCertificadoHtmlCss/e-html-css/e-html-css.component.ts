import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificadosHtmlCssService } from 'src/app/servicios/api/certificados-html-css.service';


@Component({
  selector: 'app-e-html-css',
  templateUrl: './e-html-css.component.html',
  styleUrls: ['./e-html-css.component.scss']
})
export class EHtmlCssComponent implements OnInit {

  formularioHtmlCss:FormGroup;

  linkID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private certificadoHtmlCss:CertificadosHtmlCssService,
    public formulario:FormBuilder,
    public router:Router
  ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');


    this.certificadoHtmlCss.obtenerHtmlCss().subscribe(respuestap =>{
      console.log(respuestap);

      this.formularioHtmlCss.setValue({

        id: respuestap[this.linkID -1].id,
        titulo : respuestap[this.linkID -1].titulo,
        //fechaInicio: respuestap[this.linkID -1].fechaInicio,
        entidadEmisora: respuestap[this.linkID -1].entidadEmisora,
        linkCertificado: respuestap[this.linkID -1].linkCertificado,

      });

    })





    /*this.certificadoHtmlCss.obtenerHtmlCssIndividual(this.linkID).subscribe( respuesta =>{
      console.log(respuesta);

      this.formularioHtmlCss.setValue({

        id: respuesta.id,
        titulo : respuesta.titulo,
        //fechaInicio: respuesta.fechaInicio,
        entidadEmisora: respuesta.entidadEmisora,
        linkCertificado: respuesta.linkCertificado,

      });

    });*/




    this.formularioHtmlCss = this.formulario.group({

      id: this.linkID,
      titulo:[""],
      //fechaInicio:[""],
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
    this.certificadoHtmlCss.editarHtmlCsss(this.formularioHtmlCss.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }

}
