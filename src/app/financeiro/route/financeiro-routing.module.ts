import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceiroCreateComponent } from '../financeiro-create/financeiro-create.component';
import { FinanceiroDeleteComponent } from '../financeiro-delete/financeiro-delete.component';
import { FinanceiroUpdateComponent } from '../financeiro-update/financeiro-update.component';
import { FinanceiroService } from '../service/financeiro.service';

const routes: Routes = [
  {
    path: 'create',
    component: FinanceiroCreateComponent,
    resolve:{
      financeiro: FinanceiroService
    }
  },
  {
    path: ':id/delete',
    component: FinanceiroDeleteComponent,
    resolve:{
      financeiro: FinanceiroService
    }
  },
  {
    path: ':id/update',
    component: FinanceiroUpdateComponent,
    resolve:{
      financeiro: FinanceiroService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
