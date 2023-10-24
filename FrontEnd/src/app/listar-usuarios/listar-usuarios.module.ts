import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { ListarUsuariosComponent } from './listar-usuarios.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule, BrowserModule],
  exports:[ListarUsuariosComponent],
  declarations: [ListarUsuariosComponent]
})
export class ListarUsuariosModule { }
