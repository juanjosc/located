import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.primerObservable().subscribe(respuesta => {
      console.log('respuesta', respuesta);
    }, error =>{
      console.error("Error en la subscripcion", error);
    }, ()=> {
      console.log("Subscripcion completa");
    });
  }

  /*https://angular.io/guide/observables
  Los observables son declarativos, es decir, usted define una función para publicar valores, 
  pero no se ejecuta hasta que un consumidor se suscribe. 
      El consumidor suscrito recibe notificaciones hasta que se completa la función,
   o hasta que se da de baja. */
  primerObservable(): Observable<any> {
    let contador = 0;
    const miPrimerObservable = new Observable(observer => {
      
      //setInterval: nos ejecuta un ocdigo o funcion cada X segundos, en este caso 1000 (1 seg)
      let miInterval = setInterval(() => {
        contador++;
        if (contador === 10) {
          clearInterval(miInterval);
          observer.error('no puede ser igual a 10');
          
        } else if (contador == 12) {
          //Cuando llega a complete ya no observa mas
          clearInterval(miInterval);
          observer.complete();
        } else {
          observer.next(contador);
        }
      }, 100);

    });

    //pipe sirve para ejecutar funciones especificas de los observables
    return miPrimerObservable.pipe(retry(1)); /*El metodo retry() hace reintentar
    el metodo aunque de error (no muestra el error, lo salta), si no lleva parametros lo reintentará infinito, 
    si lleva un numero lo intentará el numero de veces indicado*/ 
  }

}
