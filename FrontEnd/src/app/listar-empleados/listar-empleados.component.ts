import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado';
import { EmpleadoService } from '../empleado/empleado.service';
import { Rol } from '../rol/rol';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css', '../app.component.css'],
})

export class ListarEmpleadosComponent implements OnInit{
  empleados: Empleado[];
  rol: Rol;

  constructor(private servicio: EmpleadoService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
  }

  public objToString(obj: Object){
    let str = '';
    let contador: any;
    for(contador of Object.entries(obj)){
      this.rol = contador[1];
      str += this.rol.autoridad;
      if (contador[0] < Object.entries(obj).length-1) {
        str += ', ';
      }
    }
    return str;
  }
}

