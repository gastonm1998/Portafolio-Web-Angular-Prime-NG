import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificadosIoTService } from 'src/app/servicios/api/certificados-io-t.service';

@Component({
  selector: 'app-e-io-t',
  templateUrl: './e-io-t.component.html',
  styleUrls: ['./e-io-t.component.scss']
})
export class EIoTComponent implements OnInit {

  formularioIot:FormGroup;

  linkID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private certificadoIot:CertificadosIoTService,
    public formulario:FormBuilder,
    public router:Router
  ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');


    this.certificadoIot.obtenerIot().subscribe(respuesta =>{
      console.log(respuesta);

      this.formularioIot.setValue({

        id: respuesta[this.linkID -1].id,
        titulo : respuesta[this.linkID -1].titulo,
        //fechaInicio: respuesta[this.linkID -1].fechaInicio,
        entidadEmisora: respuesta[this.linkID -1].entidadEmisora,
        linkCertificado: respuesta[this.linkID -1].linkCertificado,

      });

    })

    this.formularioIot = this.formulario.group({

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
    this.certificadoIot.editarIot(this.formularioIot.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }
}
