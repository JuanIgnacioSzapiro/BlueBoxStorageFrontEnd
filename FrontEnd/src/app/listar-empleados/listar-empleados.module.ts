import { NgModule } from '@angular/core';
import  { ListarEmpleadosComponent } from './listar-empleados.component'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule, MatInputModule,
    MatTableModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports:[ListarEmpleadosComponent],
  declarations: [ListarEmpleadosComponent]
})

export class ListarEmpleadosModule { }
