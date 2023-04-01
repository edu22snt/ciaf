import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroUpdateComponent } from './financeiro-update/financeiro-update.component';
import { FinanceiroDeleteComponent } from './financeiro-delete/financeiro-delete.component';
import { FinanceiroListComponent } from './financeiro-list/financeiro-list.component';
import { FinanceiroCreateComponent } from './financeiro-create/financeiro-create.component';



@NgModule({
  declarations: [
    FinanceiroUpdateComponent,
    FinanceiroDeleteComponent,
    FinanceiroListComponent,
    FinanceiroCreateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceiroModule { }
