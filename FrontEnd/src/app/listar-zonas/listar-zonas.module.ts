import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarZonasComponent } from './listar-zonas.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListarZonasComponent],
  declarations: [ListarZonasComponent]
})
export class ListarZonasModule { }
