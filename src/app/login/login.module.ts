import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUpdateComponent } from './login-update/login-update.component';
import { LoginCreateComponent } from './login-create/login-create.component';
import { LoginDeleteComponent } from './login-delete/login-delete.component';
import { LoginListComponent } from './login-list/login-list.component';

@NgModule({
  declarations: [
    LoginUpdateComponent,
    LoginCreateComponent,
    LoginDeleteComponent,
    LoginListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
