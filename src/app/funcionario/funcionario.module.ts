import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';



@NgModule({
  declarations: [
    FuncionarioListComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FuncionarioModule { }
