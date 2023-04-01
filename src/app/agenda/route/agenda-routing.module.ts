import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaCreateComponent } from '../agenda-create/agenda-create.component';
import { AgendaDeleteComponent } from '../agenda-delete/agenda-delete.component';
import { AgendaUpdateComponent } from '../agenda-update/agenda-update.component';
import { AgendaService } from '../service/agenda.service';

const routes: Routes = [
  {
    path: 'create',
    component: AgendaCreateComponent,
    resolve:{
      agenda: AgendaService
    }
  },
  {
    path: ':id/delete',
    component: AgendaDeleteComponent,
    resolve:{
      agenda: AgendaService
    }
  },
  {
    path: ':id/update',
    component: AgendaUpdateComponent,
    resolve:{
      agenda: AgendaService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
