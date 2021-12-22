import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.scss']
})
export class TarjetaPresentacionComponent implements OnInit {

    value1: number = 0;

    value2: number = 50;

    value3: number = 75;

    value4: number = 10;

    value5: number = 40;


  constructor() { }

  ngOnInit(): void {
  }

}
