import { AppComponent } from './../app.component';
import { Empleado } from './../empleado/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css', '../app.component.css'],
})

export class ListarEmpleadosComponent implements OnInit{
  empleados: Empleado[];

  editable: Empleado;
  nuevo = new Empleado;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  administrador: Boolean;
  constructor(private servicio: EmpleadoService){}

  ngOnInit(){
    this.administrador= false;
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
  }

  public objToString(isAdministrador: boolean, isEmpleado: boolean){
    let str = '';
    return str;
  }

  public mostrarAgregarVisible(){
    this.agregarVisible=!this.agregarVisible
    this.nuevo=new Empleado;
  }

  public guardarNuevo(){
  }

  public mostrarEditarVisible(empleado: Empleado){
    if(this.editarVisible==false){
      this.editable=empleado;
    }
    this.editarVisible=!this.editarVisible
  }

  public guardarEditado(x: Empleado){

  }

  public cambiarAdministrador(){
    this.administrador=!this.administrador;
  }
}

