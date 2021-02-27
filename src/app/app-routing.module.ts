import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EditComponent } from './pages/users/edit/edit.component'

const routes: Routes = [
  {
    path : "",
    component : UsersComponent
  },
  {
    path : "user/add/:id",
    component : EditComponent
  },
  {
    path : "user/edit/:id",
    component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
