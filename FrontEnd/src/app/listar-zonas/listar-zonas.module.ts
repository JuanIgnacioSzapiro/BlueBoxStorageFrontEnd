import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarZonasComponent } from './listar-zonas.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports:[ListarZonasComponent],
  declarations: [ListarZonasComponent]
})
export class ListarZonasModule { }
