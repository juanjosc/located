import { Component, OnInit } from '@angular/core';

@Component({
  //El selector nos sirven para llamar a un modulo entero
  //En otro modulo como app.component y seria <app-menu></app-menu>
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
