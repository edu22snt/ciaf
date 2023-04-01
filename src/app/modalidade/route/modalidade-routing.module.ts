import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalidadeCreateComponent } from '../modalidade-create/modalidade-create.component';
import { ModalidadeDeleteComponent } from '../modalidade-delete/modalidade-delete.component';
import { ModalidadeUpdateComponent } from '../modalidade-update/modalidade-update.component';
import { ModalidadeService } from '../service/modalidade.service';

const routes: Routes = [
  {
    path: 'create',
    component: ModalidadeCreateComponent,
    resolve:{
      modalidade: ModalidadeService
    }
  },
  {
    path: ':id/delete',
    component: ModalidadeDeleteComponent,
    resolve:{
      modalidade: ModalidadeService
    }
  },
  {
    path: ':id/update',
    component: ModalidadeUpdateComponent,
    resolve:{
      modalidade: ModalidadeService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
