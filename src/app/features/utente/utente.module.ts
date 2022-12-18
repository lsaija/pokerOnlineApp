import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteCreateComponent } from './utente-create/utente-create.component';
import { UtenteDetailComponent } from './utente-detail/utente-detail.component';
import { UtenteListComponent } from './utente-list/utente-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RuoloComponent } from './ruolo/ruolo.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'listaUtenti',
    component: UtenteListComponent
  },
  {
    path: 'registra',
    component: UtenteCreateComponent
  },
  {
    path: 'edit/:id',
    component: UtenteCreateComponent
  },
  {
    path: 'create',
    component: UtenteCreateComponent
  },
  {
    path: 'detail/:id',
    component: UtenteDetailComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    UtenteCreateComponent,
    UtenteDetailComponent,
    UtenteListComponent,
    RuoloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class UtenteModule { }
