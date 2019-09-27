import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from  './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
   declarations: [
      AppComponent,
      UsuariosComponent,
      TareasComponent,
      MenuComponent,
      FormularioComponent,
      LoginComponent,
      PromesasComponent,
      ObservablesComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
     // UserModule,
      AppRoutingModule//Colocar AppRoutingModule al final para que carguen todos los modulos y vayan los links
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
