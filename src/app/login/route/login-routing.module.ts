import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCreateComponent } from '../login-create/login-create.component';
import { LoginDeleteComponent } from '../login-delete/login-delete.component';
import { LoginUpdateComponent } from '../login-update/login-update.component';
import { LoginService } from '../service/login.service';

const routes: Routes = [
  {
    path: 'create',
    component: LoginCreateComponent,
    resolve:{
      login: LoginService
    }
  },
  {
    path: ':id/delete',
    component: LoginDeleteComponent,
    resolve:{
      login: LoginService
    }
  },
  {
    path: ':id/update',
    component: LoginUpdateComponent,
    resolve:{
      login: LoginService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
