import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoUpdateComponent } from './aluno-update/aluno-update.component';

@NgModule({
  declarations: [
    AlunoCreateComponent,
    AlunoDeleteComponent,
    AlunoListComponent,
    AlunoUpdateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
