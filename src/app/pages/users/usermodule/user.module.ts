import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { ListUserComponent } from '../list-user/list-user.component';
import { ContUsersComponent } from '../contentUsers/cont-users/cont-users.component';

@NgModule({
  //las declarations son para componentes y tuberias
  declarations: [
    ListUserComponent,
    ContUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    ListUserComponent
  ]
})
export class UserModule { }
