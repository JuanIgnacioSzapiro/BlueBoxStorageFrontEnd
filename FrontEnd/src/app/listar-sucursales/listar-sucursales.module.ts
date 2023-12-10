import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSucursalesComponent } from './listar-sucursales.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ListarZonasComponent } from '../listar-zonas/listar-zonas.component';
import { ListarZonasModule } from '../listar-zonas/listar-zonas.module';

const direccionamiento: Routes = [
  {path: 'listar_zonas', component: ListarZonasComponent},
 ];

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
    RouterModule.forRoot(direccionamiento),
  ],
  exports:[ListarSucursalesComponent],
  declarations: [ListarSucursalesComponent]
})
export class ListarSucursalesModule { }
