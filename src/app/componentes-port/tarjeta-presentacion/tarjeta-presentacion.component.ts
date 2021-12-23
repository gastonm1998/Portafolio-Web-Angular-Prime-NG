import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.scss']
})
export class TarjetaPresentacionComponent implements OnInit {

    value1: number = 50;

    value2: number = 50;

    value3: number = 75;

    value4: number = 60;

    value5: number = 60;

    value6: number = 75;

    products: any[] =[] ;

    responsiveOptions;


    value_1: number = 90;
    value_2: number = 85;
    value_3: number = 80;
    value_4: number = 80;
    value_5: number = 80;
    value_6: number = 50;



  constructor() {

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 2
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
        nombre: "",direccionImagen: "../../../assets/icons/angular-icon.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/github-icon-1.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/java-icon.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/springio-ar21.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/mysql-ar21.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/mongodb-icon-1.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/react-2.svg"
      },
      {
        nombre: "",direccionImagen: "../../../assets/icons/django-community.svg"
      },
    ]
  }

}
