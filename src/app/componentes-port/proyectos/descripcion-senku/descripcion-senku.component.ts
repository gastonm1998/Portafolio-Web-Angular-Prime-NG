import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-senku',
  templateUrl: './descripcion-senku.component.html',
  styleUrls: ['./descripcion-senku.component.scss']
})
export class DescripcionSenkuComponent implements OnInit {

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
