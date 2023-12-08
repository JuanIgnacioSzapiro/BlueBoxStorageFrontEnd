import { LoginComponent } from './../login/login.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css', '../app.component.css'],
})
export class BarraLateralComponent implements OnInit{
  sideBarItems: any;

  constructor(private ruta: Router){
  }

  public obtenerRol(){
    return localStorage.getItem("0");
  }

  ngOnInit(): void {
    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Listar mis contratos', this.listar_mis_contratos(), this.obtenerRol()+'/listar_mis_contratos', this.obtenerRol() == "cliente" && this.obtenerRol() != "pendiente"],
        ['Listar mis depositos', this.listar_mis_depositos(), this.obtenerRol()+'/listar_mis_depositos', this.obtenerRol() == "empleado" || this.obtenerRol() == "cliente" && this.obtenerRol() != "pendiente"],

        ['Listar clientes', this.listar_clientes(), this.obtenerRol()+'/listar_clientes', this.obtenerRol() == "empleado" || this.obtenerRol() == "administrador"],
        ['Listar empleados', this.listar_empleados(), this.obtenerRol()+'/listar_empleados', this.obtenerRol() == "administrador"],

        ['Listar contratos', this.listar_contratos(), this.obtenerRol()+'/listar_contratos', this.obtenerRol() == "administrador"],

        ['Listar sucursales', this.listar_sucursales(), this.obtenerRol()+'/listar_sucursales', this.obtenerRol() == "administrador"],
        ['Listar zonas', this.listar_zonas(), this.obtenerRol()+'/listar_zonas', this.obtenerRol() == "administrador"],
        ['Listar depóstios', this.listar_depositos(), this.obtenerRol()+'/listar_depositos', this.obtenerRol() == "administrador"],

      ]
    }
  }



  public listar_mis_contratos(){
    this.ruta.navigate([this.obtenerRol(), '/listar_mis_contratos']);
  }
  public listar_mis_depositos(){
    this.ruta.navigate([this.obtenerRol(), '/listar_mis_depositos']);
  }
  public listar_clientes(){
    this.ruta.navigate([this.obtenerRol(), '/listar_clientes']);
  }
  public listar_empleados(){
    this.ruta.navigate([this.obtenerRol(), '/listar_empleados']);
  }
  public listar_contratos(){
    this.ruta.navigate([this.obtenerRol(), '/listar_contratos']);
  }
  public listar_sucursales(){
    this.ruta.navigate([this.obtenerRol(), '/listar_sucursales']);
  }
  public listar_zonas(){
    this.ruta.navigate([this.obtenerRol(), '/listar_zonas']);
  }
  public listar_depositos(){
    this.ruta.navigate([this.obtenerRol(), '/listar_depositos']);
  }

  public cerrarSesion(){
    window.location.reload();
  }
}
