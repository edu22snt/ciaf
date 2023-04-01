import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCreateComponent } from '../aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from '../aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from '../aluno-update/aluno-update.component';
import { AlunoService } from '../service/aluno.service';

const routes: Routes = [
  {
    path: 'create',
    component: AlunoCreateComponent,
    resolve:{
      aluno: AlunoService
    }
  },
  {
    path: ':id/delete',
    component: AlunoDeleteComponent,
    resolve:{
      aluno: AlunoService
    }
  },
  {
    path: ':id/update',
    component: AlunoUpdateComponent,
    resolve:{
      aluno: AlunoService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
