import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InformacionContactoService } from 'src/app/servicios/api/informacion-contacto.service';

@Component({
  selector: 'app-e-informacion-direccion',
  templateUrl: './e-informacion-direccion.component.html',
  styleUrls: ['./e-informacion-direccion.component.scss']
})
export class EInformacionDireccionComponent implements OnInit {

  formularioDireccion:FormGroup;

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

      this.formularioDireccion.setValue({

        id: respuesta[this.linkID -1].id,
        contenido : respuesta[this.linkID -1].contenido,
        icono : respuesta[this.linkID -1].icono



      });

    })

    this.formularioDireccion = this.formulario.group({

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
        this.router.navigateByUrl('lobby#hard-skills');
  }

  enviarDatos():any{
    this.informacionContacto.editarInformacionContacto(this.formularioDireccion.value).subscribe();
    this.reloadComponent();
  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby#hard-skills");
  }
}
