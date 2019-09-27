import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ObservablesComponent } from './observables/observables.component';
import { PromesasComponent } from './pages/promesas/promesas.component';

//Introducimos las rutas para poder movernos entre modulos
//El import se realiza automaticamente
const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent, canActivate: [AuthService]},
  {path: 'tareas', component: TareasComponent, canActivate: [AuthService]},
  {path: 'anadir', component: FormularioComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'observables', component: ObservablesComponent},
  {path: 'promesas', component: PromesasComponent},
  //ng lazyload de la manera vieja, se vera en proyectos anteriores a angular 8
  //{ path: 'user', loadChildren: './pages/users/usermodule/user.module#UserModule' },
  //ng lazyload-ivy nos sirve para  cargar el modulo importando directamente la ruta (preferible esta)
  {path: 'user', loadChildren: () => import( './pages/users/usermodule/user.module').then (m => m.UserModule)},

  {path: '', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
