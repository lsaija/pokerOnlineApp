import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavoloListComponent } from './tavolo-list/tavolo-list.component';
import { TavoloDetailComponent } from './tavolo-detail/tavolo-detail.component';
import { TavoloCreateComponent } from './tavolo-create/tavolo-create.component';




@NgModule({
  declarations: [
 
  
    TavoloListComponent,
         TavoloDetailComponent,
         TavoloCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TavoloModule { }
