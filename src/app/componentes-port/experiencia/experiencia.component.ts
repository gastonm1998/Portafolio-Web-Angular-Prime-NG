import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  experiencia: any[] = [];
  educacion: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.experiencia = [
      {
        status: "Time 1", date: '15/10/2020 14:00', icon: PrimeIcons.ID_CARD, color: '#673AB7',descripcion:"a"
      },
      {
        status: "Time 2",date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800',descripcion:"b"
      },
      {
        status: "Time 3",date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B',descripcion:"c"
      },
      {
        status: "Time 4",date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B',descripcion:"d"
      },
    ];



    this.educacion = [
      {
        status: "Time 1", date: '15/10/2020 14:00', icon: PrimeIcons.ID_CARD, color: '#673AB7',descripcion:"a"
      },
      {
        status: "Time 2",date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800',descripcion:"b"
      },
      {
        status: "Time 3",date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B',descripcion:"c"
      },
      {
        status: "Time 4",date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B',descripcion:"d"
      },
    ];
  }

}
