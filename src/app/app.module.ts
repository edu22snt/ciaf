import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoModule } from './aluno/aluno.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { LoginModule } from './login/login.module';
import { ModalidadeModule } from './modalidade/modalidade.module';
import { AgendaModule } from './agenda/agenda.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    FinanceiroModule,
    FuncionarioModule,
    LoginModule,
    ModalidadeModule,
    AgendaModule,
    ButtonModule,
    TableModule,
    TabMenuModule
  ],
  exports:[
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
