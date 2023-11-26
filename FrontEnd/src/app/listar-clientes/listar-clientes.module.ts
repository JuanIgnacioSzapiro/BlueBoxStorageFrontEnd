import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './listar-clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports:[ListarClientesComponent],
  declarations: [ListarClientesComponent]
})
export class ListarClientesModule { }
