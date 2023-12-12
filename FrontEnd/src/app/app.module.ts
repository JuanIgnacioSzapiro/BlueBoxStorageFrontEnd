import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ListarEmpleadosModule } from './listar-empleados/listar-empleados.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { ListarDepositosComponent } from './listar-depositos/listar-depositos.component';
import { ListarSucursalesComponent } from './listar-sucursales/listar-sucursales.component';
import { ListarZonasComponent } from './listar-zonas/listar-zonas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RegistrarseModule } from './registrarse/registrarse.module';
import { ListarClientesModule } from './listar-clientes/listar-clientes.module';
import { ListarContratosModule } from './listar-contratos/listar-contratos.module';
import { ListarDepositosModule } from './listar-depositos/listar-depositos.module';
import { ListarSucursalesModule } from './listar-sucursales/listar-sucursales.module';
import { ListarZonasModule } from './listar-zonas/listar-zonas.module';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { SucursalZonaDepositoComponent } from './sucursal-zona-deposito/sucursal-zona-deposito.component';
import { SucursalZonaDepositoModule } from './sucursal-zona-deposito/sucursal-zona-deposito.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: ':rol/listar_clientes', component: ListarClientesComponent},
  {path: ':rol/listar_empleados', component: ListarEmpleadosComponent},

  {path: ':rol/listar_contratos', component: ListarContratosComponent},
  {path: ':rol/listar_contratos/:id', component: ListarContratosComponent},

  {path: ':rol/listar_depositos', component: ListarDepositosComponent},
  {path: ':rol/listar_depositos/:id', component: ListarDepositosComponent},
  {path: ':rol/listar_zonas', component: ListarZonasComponent},
  {path: ':rol/listar_zonas/:id', component: ListarZonasComponent},
  {path: ':rol/listar_sucursales', component: ListarSucursalesComponent},
  {path: ':rol/listar_sucursales/:id', component: ListarSucursalesComponent},
  {path: ':rol/sucursal_zona_deposito/:id', component: SucursalZonaDepositoComponent},

  {path: 'registrarse', component: RegistrarseComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    SucursalZonaDepositoComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatListModule,
    MatCardModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    ListarEmpleadosModule,
    ListarClientesModule,
    ListarContratosModule,
    ListarDepositosModule,
    ListarSucursalesModule,
    ListarZonasModule,
    SucursalZonaDepositoModule,

    LoginModule,
    RegistrarseModule,

    MatCheckboxModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
