import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InformacionContactoService } from 'src/app/servicios/api/informacion-contacto.service';

@Component({
  selector: 'app-e-informacion-email',
  templateUrl: './e-informacion-email.component.html',
  styleUrls: ['./e-informacion-email.component.scss']
})
export class EInformacionEmailComponent implements OnInit {

  formularioEmail:FormGroup;

  linkID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private informacionContacto:InformacionContactoService,
    public formulario:FormBuilder,
    public router:Router
  ) {

    this.linkID = this.activeRoute.snapshot.paramMap.get('id');


    this.informacionContacto.obtenerInformacionContacto().subscribe(respuesta =>{
      console.log(respuesta);

      this.formularioEmail.setValue({

        id: respuesta[this.linkID -1].id,
        contenido : respuesta[this.linkID -1].contenido,
        icono : respuesta[this.linkID -1].icono



      });

    })

    this.formularioEmail = this.formulario.group({

      id: this.linkID,
      contenido:[""],
      icono:["at"]


    });
  }

  ngOnInit(): void {
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby#contacto');
  }

  enviarDatos():any{
    this.informacionContacto.editarInformacionContacto(this.formularioEmail.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#contacto");
  }

}
