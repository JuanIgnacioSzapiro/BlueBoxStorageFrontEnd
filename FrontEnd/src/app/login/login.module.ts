import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule { }
