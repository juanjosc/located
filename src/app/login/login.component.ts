import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public logins: login[] = [
    {
      usuario: 'admin',
      contrasenya: 'admin'
    },
    {
      usuario: 'user',
      contrasenya: 'user'
    }
  ];

  public ingresoLogin: login = {
    usuario: '',
    contrasenya: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.setLoginsLocal();
  }

  setLoginsLocal(){
    localStorage.setItem('logins', JSON.stringify(this.logins));
  }

  getLoginsLocal(){
    this.logins = JSON.parse(localStorage.getItem('logins'));
    
    this.logins.forEach(element => {
      if(this.ingresoLogin.usuario == element.usuario &&  this.ingresoLogin.contrasenya == element.contrasenya){
        localStorage.setItem('isLoggedIn', '1');
        this.router.navigate(['usuarios']);
      }
    });

    if(!this.logins){
      this.logins = [];
    }
  }


}

interface login {
  usuario: string,
  contrasenya: string
}
