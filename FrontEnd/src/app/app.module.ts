import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ListarEmpleadosModule } from './listar-empleados/listar-empleados.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { ListarDepositosComponent } from './listar-depositos/listar-depositos.component';
import { ListarSucursalesComponent } from './listar-sucursales/listar-sucursales.component';
import { ListarZonasComponent } from './listar-zonas/listar-zonas.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ListarUsuariosModule } from './listar-usuarios/listar-usuarios.module';

const appRoutes: Routes = [
  // {path: 'listar_mis_contratos', component: },
  // {path: 'listar_mis_depositos', component: },

  {path: 'listar_usuarios', component: ListarUsuariosComponent},
  {path: 'listar_clientes', component: ListarClientesComponent},
  {path: 'listar_empleados', component: ListarEmpleadosComponent},

  {path: 'listar_contratos', component: ListarContratosComponent},

  {path: 'listar_depositos', component: ListarDepositosComponent},
  {path: 'listar_sucursales', component: ListarSucursalesComponent},
  {path: 'listar_zonas', component: ListarZonasComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatListModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    ListarUsuariosModule,
    ListarEmpleadosModule,

    LoginModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
