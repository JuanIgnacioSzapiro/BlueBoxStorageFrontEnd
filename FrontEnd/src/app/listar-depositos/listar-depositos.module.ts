import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarDepositosComponent } from './listar-depositos.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListarDepositosComponent],
  declarations: [ListarDepositosComponent]
})
export class ListarDepositosModule { }
