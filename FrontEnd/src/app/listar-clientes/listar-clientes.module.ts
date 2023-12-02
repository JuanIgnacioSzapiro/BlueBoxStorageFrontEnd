import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './listar-clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports:[ListarClientesComponent],
  declarations: [ListarClientesComponent]
})
export class ListarClientesModule { }
