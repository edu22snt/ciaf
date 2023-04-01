import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadeUpdateComponent } from './modalidade-update/modalidade-update.component';
import { ModalidadeListComponent } from './modalidade-list/modalidade-list.component';
import { ModalidadeDeleteComponent } from './modalidade-delete/modalidade-delete.component';
import { ModalidadeCreateComponent } from './modalidade-create/modalidade-create.component';

@NgModule({
  declarations: [
    ModalidadeCreateComponent,
    ModalidadeDeleteComponent,
    ModalidadeListComponent,
    ModalidadeUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalidadeModule { }
