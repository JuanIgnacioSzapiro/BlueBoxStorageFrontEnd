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

  rol: String;

  constructor(private ruta: Router){
  }

  ngOnInit(): void {
    this.determinarRol();

    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Listar mis contratos', this.listar_mis_contratos(), this.rol+'/listar_mis_contratos', true],
        ['Listar mis depositos', this.listar_mis_depositos(), this.rol+'/listar_mis_depositos', true],

        ['Listar clientes', this.listar_clientes(), this.rol+'/listar_clientes', localStorage.getItem("usuarioLogueado")?.includes('"empleado":true')],
        ['Listar empleados', this.listar_empleados(), this.rol+'/listar_empleados', localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')],

        ['Listar contratos', this.listar_contratos(), this.rol+'/listar_contratos', localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')],

        ['Listar sucursales', this.listar_sucursales(), this.rol+'/listar_sucursales', localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')],
        ['Listar zonas', this.listar_zonas(), this.rol+'/listar_zonas', localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')],
        ['Listar depóstios', this.listar_depositos(), this.rol+'/listar_depositos', localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')],

      ]
    }
  }

  public determinarRol(){
    if(localStorage.getItem("usuarioLogueado")?.includes('"administrador":true')){
      this.rol = "administrador";
    }
    else if(localStorage.getItem("usuarioLogueado")?.includes('"empleado":true')){
      this.rol = "empleado";
    }
    else if(localStorage.getItem("usuarioLogueado")?.includes('"pendiente":true')){
      this.rol = "pendiente";
    }
    else if(localStorage.getItem("usuarioLogueado")?.includes('"cliente":true')){
      this.rol = "cliente";
    }
    return this.rol;
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
