import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],

})


export class UsuariosComponent implements OnInit {

  public dataSource: MatTableDataSource<Usuario>;
  public nuevoUsuario: Usuario = {
    id: null,
    nombre: '',
    apellidos: '',
    visible: false
  };

  public filter: any = {
    id: '',
    nombre: '',
    apellidos: '',
  }

  //Es un array de objetos usuarios (Esta definido al final)
  //public usuarios: Usuario[] = [];
  //ES un array con cuanlquier ANY tipo de dato
  public usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Angel',
      apellidos: 'Garcia',
      visible: true
    },
    {
      id: 2,
      nombre: 'Manolo',
      apellidos: 'Lama',
      visible: true
    },
    {
      id: 3,
      nombre: 'José',
      apellidos: 'Hernandez',
      visible: false
    },
    {
      id: 4,
      nombre: 'Angel',
      apellidos: 'Pallas',
      visible: true
    },
    {
      id: 5,
      nombre: 'Carla',
      apellidos: 'Hernandez',
      visible: false
    },
    {
      id: 6,
      nombre: 'Mariajo',
      apellidos: 'Franco',
      visible: false
    }
  ];

  /*Definimos tanto el numero como el nombre de columnas, que se referenciaran 
  en el html al final de la tabla, e igualamos datasource con nuestro array de usuarios
  para la carga inicial de datos*/
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'visible'];
  //dataSource = new MatTableDataSource(this.usuarios);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /*
    applyFilter(filterValue: string) {
      this.usuarios.forEach(element => {
        //include es el contains de java, para ver si un conjunto de caracteres
        //esta en una cadena de texto
        if ((element.nombre.trim().toLowerCase()).includes((filterValue.trim().toLowerCase()))) {
          this.dataSource.filter = filterValue.trim().toLowerCase();  
        }
        if ((element.apellidos.trim().toLowerCase()).includes((filterValue.trim().toLowerCase()))) {
          this.dataSource.filter = filterValue.trim().toLowerCase();  
        }
        
      });
  
    }
  */


  constructor() { }

  ngOnInit() {
    this.setUsuarios();
    this.getUsuarios();

    //this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  customFilter(field?: string, value?: any) {
    switch (field) {
      case 'nombre':
        this.filter.nombre = value.trim().toLowerCase();
        break;

      case 'apellidos':
        this.filter.apellidos = value.trim().toLowerCase();
        break;
    }

    this.dataSource.filterPredicate = (data, filter) => {
      let filterApply = JSON.parse(filter);

      let customCond = false;

      if (
        (data.nombre + '').trim().toLowerCase().indexOf(filterApply.nombre.trim().toLowerCase()) !== -1
        && (data.apellidos + '').trim().toLowerCase().indexOf(filterApply.apellidos.trim().toLowerCase()) !== -1
      ) {
        return customCond = true;
      }

      return customCond;
    }
    
    this.applyFilter(JSON.stringify(this.filter));

  }

  //Metodos para recuperar y guardar listas de usuarios
  public getUsuarios() {
    //Parseamos para que los usuarios sean Objetos de tipo usuario
    this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    //En caso de pedir el array de usuarios si no existen proporcionamos un array
    //vacio apra evitar un error
    if (!this.usuarios) {
      this.usuarios = [];
    }

    this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    this.dataSource.paginator = this.paginator;
  }

  public setUsuarios() {
    this.usuarios.forEach(element => {
      element.editando = false;
    });

    //Introducimos un usuario tipo string  
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  public addUsuario() {
    //Cuando anyadimos un usuario antes de sumarlo al array le sumamos un id "automatico"
    let ultimoUsuario: Usuario = this.usuarios[this.usuarios.length - 1];

    if (ultimoUsuario) {
      this.nuevoUsuario.id = ultimoUsuario.id + 1;
    } else {
      this.nuevoUsuario.id = 1;
    }

    //anyado en el array
    this.usuarios.push(this.nuevoUsuario);
    //lo guardo en la base de datos
    this.setUsuarios();
    //lo saco de la base de datos
    this.getUsuarios();

    this.dataSource = new MatTableDataSource(this.usuarios);
  }

  public reiniciar() {
    this.nuevoUsuario.id = null;
    this.nuevoUsuario.nombre = '';
    this.nuevoUsuario.apellidos = '';
    this.nuevoUsuario.visible = null;
  }

  public deleteUsuario(id: number) {
    for (let usuario of this.usuarios) {
      if (usuario.id == id) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
      }
    }

  }

}


//Declaramos la clase usuario para que reconozca el Objeto usuario
/*
interface Usuario {
  id: number,
  nombre: string,
  apellidos: string,
  //con el interrogante hacemos que la variable sea opcional
  visible?: boolean,
  editando?: boolean
}
*/

export interface Usuario {
  id: number,
  nombre: string,
  apellidos: string,
  visible?: boolean,
  editando?: boolean
}

