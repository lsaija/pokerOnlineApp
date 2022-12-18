import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './core/auth-admin.guard';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path:'welcome', 
  loadChildren:()=> import ('./features/welcome/welcome.module').then(m=>m.WelcomeModule),
  canActivate:[AuthGuard]
},
{path:'utente',
  loadChildren:()=> import ('./features/utente/utente.module').then(m=>m.UtenteModule),
  canActivate:[AuthGuard]
},

{path:'tavolo',
  loadChildren:()=> import ('./features/tavolo/tavolo.module').then(m=>m.TavoloModule),
  canActivate:[AuthGuard]
},

{path:'login',
loadChildren:()=> import ('./core/auth/auth.module').then(m=>m.AuthModule),
},

 {path:'', 
  redirectTo:'login',pathMatch:'full'
},
{ path: '*', redirectTo: '/welcome', pathMatch: 'full' },
{ path: 'welcome', redirectTo: '/welcome', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
