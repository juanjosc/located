import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from '../list-user/list-user.component';
import { ContUsersComponent } from '../contentUsers/cont-users/cont-users.component';

const routes: Routes = [
  /*con el import del users.routing.module carga estos dos path,
  siendo la primera con user (contentUsersComponent), y despues la hija
  list (list-users)*/
  { path: '' , component: ContUsersComponent, children: [
    { path: 'list' , component: ListUserComponent}
  ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
