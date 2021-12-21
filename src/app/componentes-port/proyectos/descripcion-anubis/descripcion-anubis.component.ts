import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-anubis',
  templateUrl: './descripcion-anubis.component.html',
  styleUrls: ['./descripcion-anubis.component.scss']
})
export class DescripcionAnubisComponent implements OnInit {
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
