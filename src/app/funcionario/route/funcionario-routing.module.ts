import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCreateComponent } from '../funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from '../funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from '../funcionario-update/funcionario-update.component';
import { FuncionarioService } from '../service/funcionario.service';

const routes: Routes = [
  {
    path: 'create',
    component: FuncionarioCreateComponent,
    resolve:{
      funcionario: FuncionarioService
    }
  },
  {
    path: ':id/delete',
    component: FuncionarioDeleteComponent,
    resolve:{
      funcionario: FuncionarioService
    }
  },
  {
    path: ':id/update',
    component: FuncionarioUpdateComponent,
    resolve:{
      funcionario: FuncionarioService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
