import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FuncionarioRoutingModule } from './route/funcionario-routing.module';

@NgModule({
  declarations: [
    FuncionarioListComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioUpdateComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
