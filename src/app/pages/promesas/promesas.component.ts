import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    this.primeraPromesa().then(
      respuesta1 => {
        console.log('respuesta 1', respuesta1);
      }
    );

    this.segundaPromesa().then(
      respuesta2 => {
        console.log('respuesta 2', respuesta2);
      }
    );

    this.terceraPromesa().then(
      respuesta3 => {
        console.log('respuesta 3', respuesta3);
      }
    ).catch( error => {
      console.warn('Error en la tercera promesa', error)
    });
    */

    /*De esta forma ejecutamos las promesas de manera secuencial*/
    /*   this.primeraPromesa().then(
        respuesta1 => {
          console.log('respuesta 1', respuesta1);
  
          this.segundaPromesa().then(
            respuesta2 => {
              console.log('respuesta 2', respuesta2);
  
              this.terceraPromesa().then(
                respuesta3 => {
                  console.log('respuesta 3', respuesta3);
                }
              ).catch(error => {
                console.warn('Error en la tercera promesa', error)
              });
  
            }
          );
  
        }
      ); */
    this.recogerDatos();

  }


  primeraPromesa() {
    return new Promise((resolve, reject) => {

      const contador = 5;

      setTimeout(() => (
        resolve(contador)
      ), 2000);

    });

  }


  segundaPromesa() {
    return new Promise((resolve, reject) => {

      const contador = 5;
      setTimeout(() => (
        resolve(contador)
      ), 500);

    });
  }

  terceraPromesa() {
    return new Promise((resolve, reject) => {

      const contador = 5;

      setTimeout(() => {
        resolve(contador);
        /*    if (contador === 5) {
             reject(contador);
           } else {
             resolve(contador);
           } */
      }, 1000);
    }

    );

  }


  /*utilizamos el metodo para ordenar las promesas*/ 
    public async recogerDatos() {
    const respuesta = await this.primeraPromesa();
    console.log('respuesta1', respuesta);
    const respuesta2 = await this.segundaPromesa();
    console.log('respuesta2', respuesta);
    const respuesta3 = await this.terceraPromesa();
    console.log('respuesta3', respuesta);
  }

}
