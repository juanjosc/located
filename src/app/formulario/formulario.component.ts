import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public nombre: string = '';
  public apellidos: string = '';
  constructor() { }

  ngOnInit() {
  }

  public reiniciar(){
    this.nombre = '';
    this.apellidos = '';
  }

}
