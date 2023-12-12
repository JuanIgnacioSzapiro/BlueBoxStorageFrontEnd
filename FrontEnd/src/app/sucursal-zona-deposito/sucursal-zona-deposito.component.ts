import { EmpleadoService } from './../empleado/empleado.service';
import { EmpleadoDeposito } from './../empleado-deposito/empleadoDeposito';
import { EmpleadoDepositoService } from './../empleado-deposito/empleado-deposito.service';
import { Sucursal } from './../sucursal/sucursal';
import { Zona } from './../zona/zona';
import { SucursalService } from '../sucursal/sucursal.service';
import { ZonaService } from '../zona/zona.service';
import { DepositoService } from './../deposito/deposito.service';
import { Component, NgIterable, OnInit } from '@angular/core';
import { Deposito } from '../deposito/deposito';
import { Empleado } from '../empleado/empleado';

@Component({
  selector: 'app-sucursal-zona-deposito',
  templateUrl: './sucursal-zona-deposito.component.html',
  styleUrls: ['./sucursal-zona-deposito.component.css']
})
export class SucursalZonaDepositoComponent implements OnInit{
  sucursales: Sucursal[];

  idEmpleado: number;

  empleadoDepositos: EmpleadoDeposito[];

  administrador: boolean;

  empleados: Empleado[];

  constructor( private sucursalServicio: SucursalService, private zonaService: ZonaService, private depositoService: DepositoService, private empleadoDepositoService: EmpleadoDepositoService, private empleadoService: EmpleadoService){  }

  ngOnInit(){
    this.idEmpleado = Number(window.location.toString().slice(window.location.toString().lastIndexOf('/')+1));

    this.obtenerEmpleadoDeposito();

    this.obtenerRol();

    this.obtenerSucursales();
  }

  public obtenerRol(){
    this.empleadoService.obetenerTodos().subscribe(todosLosEmpleados=>{
      for(let empleado of todosLosEmpleados){
        if(empleado.idUsuario == this.idEmpleado){
          this.administrador = empleado.administrador;
        }
      }
    });
  }

  public obtenerDeZona(z: Zona, s: Sucursal){
    this.depositoService.obetenerDepositosDeZona(z.idZona).subscribe(dato=>{
      z.depositos=dato;
      for(let deposito of z.depositos){
        if(this.administrador == true){
          deposito.asignado=true;
        }
        else{
          for(let empleadoDeposito of this.empleadoDepositos){
            if(empleadoDeposito.idDeposito == deposito.idDeposito){
              deposito.asignado=true;
            }
          }
        }
      }
    },error=>console.log(error));
  }

  public agregarOsacar(deposito: Deposito){
    if(deposito.asignado){
      this.agregar(deposito.idDeposito);
    }
    else{
      this.sacar(deposito.idDeposito);
    }
  }

  public agregar(id_deposito: number){
    var empleadoDeposito = new EmpleadoDeposito;
    empleadoDeposito.idDeposito=id_deposito;
    empleadoDeposito.idUsuario=this.idEmpleado;
    this.empleadoDepositoService.agregar(empleadoDeposito).subscribe(x=>{
      this.ngOnInit();
    });
  }

  public sacar(id_deposito: number){
    this.empleadoDepositos.forEach(empleadoDeposito=>{
      if(empleadoDeposito.idDeposito == id_deposito && empleadoDeposito.idUsuario == this.idEmpleado){
        this.empleadoDepositoService.eliminar(empleadoDeposito.id_empleado_deposito).subscribe(x=>{
          this.ngOnInit();
        });
      }
    })
  }

  public obtenerEmpleadoDeposito(){
    this.empleadoDepositoService.obetenerTodos(this.idEmpleado).subscribe(depositos=>{
      this.empleadoDepositos=depositos;
    });
  }

  public obtenerDeSucursal(s: Sucursal){
    this.zonaService.obetenerZonasDeSucursal(s.idSucursal).subscribe(dato=>{
      s.zonas=dato;
      for(let zona of s.zonas){
        this.obtenerDeZona(zona, s);
      }
    },error=>console.log(error));
  }

  public obtenerSucursales(){
    this.sucursalServicio.obetenerTodos().subscribe(dato=>{
      this.sucursales=dato;
      for(let sucursal of this.sucursales){
        this.obtenerDeSucursal(sucursal);
      }},error=>console.log(error));
  }
}
