import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { IsNoAdminDirective } from './directives/is-no-admin.directive';
import { DecodificaRuoloPipe } from './pipes/decodifica-ruolo.pipe';



@NgModule({
  declarations: [
    IsLoggedDirective,
    IsNoAdminDirective,
    DecodificaRuoloPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsLoggedDirective,
    IsNoAdminDirective,
    DecodificaRuoloPipe
  ]
})
export class SharedModule { }
