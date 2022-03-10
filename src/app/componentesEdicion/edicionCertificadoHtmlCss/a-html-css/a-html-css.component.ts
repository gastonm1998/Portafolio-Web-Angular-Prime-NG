import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificadosHtmlCssService } from 'src/app/servicios/api/certificados-html-css.service';

@Component({
  selector: 'app-a-html-css',
  templateUrl: './a-html-css.component.html',
  styleUrls: ['./a-html-css.component.scss']
})
export class AHtmlCssComponent implements OnInit {

  formularioCertificadoHtmlCss:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    public router:Router,
    private certificadoHtmlCss:CertificadosHtmlCssService
  ) {
    this.formularioCertificadoHtmlCss = this.formulario.group({

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
    this.certificadoHtmlCss.agregarHtmlCss(this.formularioCertificadoHtmlCss.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }

}
