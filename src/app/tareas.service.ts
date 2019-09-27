import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }

  public getTareas(page: number = 1, per_page: number = 12){
    const url = 'https://reqres.in/api/users?page=' + page + '&per_page=' + per_page;
    return this.http.get(url);
  }

}
