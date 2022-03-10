import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificadosPythonService } from 'src/app/servicios/api/certificados-python.service';


@Component({
  selector: 'app-a-phyton',
  templateUrl: './a-phyton.component.html',
  styleUrls: ['./a-phyton.component.scss']
})
export class APhytonComponent implements OnInit {

  formularioCertificadoPython:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    public router:Router,
    private certificadoPython:CertificadosPythonService
  ) {

    this.formularioCertificadoPython = this.formulario.group({

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
    this.certificadoPython.agregarPython(this.formularioCertificadoPython.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }

}
