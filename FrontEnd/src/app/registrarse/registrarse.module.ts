import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports:[RegistrarseComponent],
  declarations: [RegistrarseComponent]
})
export class RegistrarseModule { }
