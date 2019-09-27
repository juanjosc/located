import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Response } from '../common/response.interface'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  public response: Response;
  public paginaActual: number = 1;


  constructor(private tareasApi: TareasService) { }

  ngOnInit() {
    this.getTareas();
    this.getTareasLocal();
  }

  public tareas: Tarea[] = [
    /*{
      id: 1,
      email: 'curso@',
      first_name: 'angular',
      last_name: 'JS',
      editando: false
    }*/
  ];



  public getTareasLocal() {
    this.tareas = JSON.parse(localStorage.getItem('tareas'));

    if (!this.tareas) {
      this.tareas = [];
    }
  }

  public getTareas() {
    const sub$ = this.tareasApi.getTareas(this.paginaActual).subscribe(response => {
      this.response = <Response>response;
      //console.log(this.response);
      this.tareas = this.response.data;
      sub$.unsubscribe();
    });
  }

  public setTareas() {
    this.tareas.forEach(element => {
      element.editando = false;
    });

    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }


  public nuevaTarea: Tarea = {
    id: null,
    email: '',
    first_name: '',
    last_name: '',
    editando: false
  };

  public anyadirTarea() { //Cuando anyadimos un usuario antes de sumarlo al array le sumamos un id "automatico"
    let ultimaTarea: Tarea = this.tareas[this.tareas.length - 1];

    if (ultimaTarea) {
      this.nuevaTarea.id = ultimaTarea.id + 1;
    } else {
      this.nuevaTarea.id = 1;
    }

    this.tareas.push(this.nuevaTarea);
    this.setTareas();
    this.getTareas();
  }

  public borrarTarea(tar: Tarea) {
    for (let tarea of this.tareas) {
      if (tarea.id === tar.id) {
        this.tareas.splice(this.tareas.indexOf(tar), 1);
      }
    }
  }

  public reiniciar() {
    this.nuevaTarea.email = '';
    this.nuevaTarea.first_name = '';
    this.nuevaTarea.last_name = '';
    this.nuevaTarea.editando = false;
  }

  public previousPage(){
    this.paginaActual--;
    this.getTareas();
  }

  public nextPage(){
    this.paginaActual++;
    this.getTareas();
  }

}

interface Tarea {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  editando?: boolean
}


