import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './listar-clientes.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListarClientesComponent],
  declarations: [ListarClientesComponent]
})
export class ListarClientesModule { }
