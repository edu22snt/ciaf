import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { AgendaUpdateComponent } from './agenda-update/agenda-update.component';
import { AgendaDeleteComponent } from './agenda-delete/agenda-delete.component';

@NgModule({
  declarations: [
    AgendaCreateComponent,
    AgendaListComponent,
    AgendaUpdateComponent,
    AgendaDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendaModule { }
