import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(public router: Router) { }

canActivate(): boolean {
   if(this.isAuthenticated() === false){
      this.router.navigate(['login']);
      return false;
   }

   return true;

  }
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

}
