import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartel-inicio',
  templateUrl: './cartel-inicio.component.html',
  styleUrls: ['./cartel-inicio.component.scss']
})
export class CartelInicioComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irAlLobby(){
    this.router.navigate(['lobby']);
  }


}
