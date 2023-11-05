import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSucursalesComponent } from './listar-sucursales.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListarSucursalesComponent],
  declarations: [ListarSucursalesComponent]
})
export class ListarSucursalesModule { }
