import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-cartel-inicio',
  templateUrl: './cartel-inicio.component.html',
  styleUrls: ['./cartel-inicio.component.scss']
})
export class CartelInicioComponent implements OnInit {



  constructor(private router:Router, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }
  /*Funcion que usa angular router para redirecion */
  irAlLobby(){
    this.router.navigate(['lobby']);
    this.primengConfig.ripple = true;
  }


}
