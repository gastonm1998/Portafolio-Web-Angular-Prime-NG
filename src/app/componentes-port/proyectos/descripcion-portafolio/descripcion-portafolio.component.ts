import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-portafolio',
  templateUrl: './descripcion-portafolio.component.html',
  styleUrls: ['./descripcion-portafolio.component.scss']
})
export class DescripcionPortafolioComponent implements OnInit {
  displayPosition: boolean = false;

  position: string ="";

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
  constructor() { }

  ngOnInit(): void {
  }

}
