import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BarraNavegacionModule } from './barra-navegacion/barra-navegacion.module';
import { EditorAdministradorComponent } from './editor-administrador/editor-administrador.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
      EditorAdministradorComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BarraNavegacionModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
