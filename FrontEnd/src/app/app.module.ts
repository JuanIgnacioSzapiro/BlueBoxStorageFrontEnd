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
import {MatCardModule} from '@angular/material/card';

import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarContratosComponent } from './listar-contratos/listar-contratos.component';
import { ListarDepositosComponent } from './listar-depositos/listar-depositos.component';
import { ListarSucursalesComponent } from './listar-sucursales/listar-sucursales.component';
import { ListarZonasComponent } from './listar-zonas/listar-zonas.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ListarUsuariosModule } from './listar-usuarios/listar-usuarios.module';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RegistrarseModule } from './registrarse/registrarse.module';
import { ListarClientesModule } from './listar-clientes/listar-clientes.module';
import { ListarContratosModule } from './listar-contratos/listar-contratos.module';
import { ListarDepositosModule } from './listar-depositos/listar-depositos.module';
import { ListarSucursalesModule } from './listar-sucursales/listar-sucursales.module';
import { ListarZonasModule } from './listar-zonas/listar-zonas.module';
import { ListarMisContratosComponent } from './listar-mis-contratos/listar-mis-contratos.component';
import { ListarMisDepositosComponent } from './listar-mis-depositos/listar-mis-depositos.component';
import { ListarMisContratosModule } from './listar-mis-contratos/listar-mis-contratos.module';
import { ListarMisDepositosModule } from './listar-mis-depositos/listar-mis-depositos.module';

const appRoutes: Routes = [
  {path: 'listar_mis_contratos', component: ListarMisContratosComponent},
  {path: 'listar_mis_depositos', component: ListarMisDepositosComponent},

  // {path: 'listar_usuarios', component: ListarUsuariosComponent},
  {path: 'listar_clientes', component: ListarClientesComponent},
  {path: 'listar_empleados', component: ListarEmpleadosComponent},

  {path: 'listar_contratos', component: ListarContratosComponent},
  {path: 'listar_contratos/:id', component: ListarContratosComponent},

  {path: 'listar_depositos', component: ListarDepositosComponent},
  {path: 'listar_depositos/:id', component: ListarDepositosComponent},
  {path: 'listar_zonas', component: ListarZonasComponent},
  {path: 'listar_zonas/:id', component: ListarZonasComponent},
  {path: 'listar_sucursales', component: ListarSucursalesComponent},
  {path: 'listar_sucursales/:id', component: ListarSucursalesComponent},
  {path: 'registrarse', component: RegistrarseComponent},
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
    MatCardModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    ListarUsuariosModule,
    ListarEmpleadosModule,
    ListarClientesModule,
    ListarContratosModule,
    ListarDepositosModule,
    ListarSucursalesModule,
    ListarZonasModule,
    ListarMisContratosModule,
    ListarMisDepositosModule,

    LoginModule,
    RegistrarseModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
