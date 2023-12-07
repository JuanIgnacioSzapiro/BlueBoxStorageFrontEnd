import { LoginComponent } from './../login/login.component';
import { Router } from '@angular/router';
import { ListarZonasComponent } from './../listar-zonas/listar-zonas.component';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Cliente } from '../cliente/cliente';
import { ɵparseCookieValue } from '@angular/common';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css', '../app.component.css'],
})
export class BarraLateralComponent implements OnInit{
  sideBarItems: any;

  rol: String;

  usuario:any

  constructor(private ruta: Router, private loginComponent: LoginComponent){
  }
  
  ngOnInit(): void {
    console.log();

    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Listar mis contratos', this.listar_mis_contratos(), this.rol+'/listar_mis_contratos', true],
        ['Listar mis depositos', this.listar_mis_depositos(), this.rol+'/listar_mis_depositos', true],

        ['Listar clientes', this.listar_clientes(), this.rol+'/listar_clientes', true],
        ['Listar empleados', this.listar_empleados(), this.rol+'/listar_empleados', true],

        ['Listar contratos', this.listar_contratos(), this.rol+'/listar_contratos', true],

        ['Listar sucursales', this.listar_sucursales(), this.rol+'/listar_sucursales', true],
        ['Listar zonas', this.listar_zonas(), this.rol+'/listar_zonas', true],
        ['Listar depóstios', this.listar_depositos(), this.rol+'/listar_depositos', true],

      ]
    }
  }

  public listar_mis_contratos(){
    this.ruta.navigate([this.rol, '/listar_mis_contratos']);
  }
  public listar_mis_depositos(){
    this.ruta.navigate([this.rol, '/listar_mis_depositos']);
  }
  public listar_clientes(){
    this.ruta.navigate([this.rol, '/listar_clientes']);
  }
  public listar_empleados(){
    this.ruta.navigate([this.rol, '/listar_empleados']);
  }
  public listar_contratos(){
    this.ruta.navigate([this.rol, '/listar_contratos']);
  }
  public listar_sucursales(){
    this.ruta.navigate([this.rol, '/listar_sucursales']);
  }
  public listar_zonas(){
    this.ruta.navigate([this.rol, '/listar_zonas']);
  }
  public listar_depositos(){
    this.ruta.navigate([this.rol, '/listar_depositos']);
  }
}
