import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { FinanceiroListComponent } from './financeiro/financeiro-list/financeiro-list.component';
import { ModalidadeListComponent } from './modalidade/modalidade-list/modalidade-list.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { AppComponent } from './app.component';
import { LoginListComponent } from './login/login-list/login-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'funcionario',
    component: FuncionarioListComponent
  },
  {
    path: 'aluno',
    component: AlunoListComponent
  },
  {
    path: 'financeiro',
    component: FinanceiroListComponent
  },
  {
    path: 'modalidade',
    component: ModalidadeListComponent
  },
  {
    path: 'agenda',
    component: AgendaListComponent
  },
  {
    path: 'login',
    component: LoginListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
