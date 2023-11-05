import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarContratosComponent } from './listar-contratos.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListarContratosComponent],
  declarations: [ListarContratosComponent]
})
export class ListarContratosModule { }
