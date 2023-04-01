import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadeUpdateComponent } from './modalidade-update/modalidade-update.component';
import { ModalidadeListComponent } from './modalidade-list/modalidade-list.component';
import { ModalidadeDeleteComponent } from './modalidade-delete/modalidade-delete.component';
import { ModalidadeCreateComponent } from './modalidade-create/modalidade-create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ModalidadeRoutingModule } from './route/modalidade-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ModalidadeCreateComponent,
    ModalidadeDeleteComponent,
    ModalidadeListComponent,
    ModalidadeUpdateComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ModalidadeRoutingModule
  ]
})
export class ModalidadeModule { }
