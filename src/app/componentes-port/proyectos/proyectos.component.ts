import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  products: any[] =[] ;

	responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {

    this.products = [
      {
        nombre: "anubis",direccionImagen: "../../../assets/portada anubis.png"
      },
      {
        nombre: "b",direccionImagen: "../../../assets/portada senku.png"
      },
      {
        nombre: "c",direccionImagen: "../../../assets/portada portafolio.png"
      },
      {
        nombre: "d",direccionImagen: "../../../assets/portada anubis.png"
      },
    ];
  }

}
