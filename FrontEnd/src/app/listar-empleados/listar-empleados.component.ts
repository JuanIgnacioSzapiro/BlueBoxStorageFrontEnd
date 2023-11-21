import { AppComponent } from './../app.component';
import { Empleado } from './../empleado/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado/empleado.service';
import { Rol } from '../rol/rol';
import { RolService } from '../rol/rol.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css', '../app.component.css'],
})

export class ListarEmpleadosComponent implements OnInit{
  empleados: Empleado[];
  roles: Rol[];
  rol: Rol;

  editable: Empleado;
  nuevo = new Empleado;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  administrador: Boolean;
  constructor(private servicio: EmpleadoService, private servicioRol: RolService){}

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

  public mostrarAgregarVisible(){
    this.agregarVisible=!this.agregarVisible
    this.nuevo=new Empleado;
  }

  private obtenerRoles(){
    this.servicioRol.obetenerTodos().subscribe(dato=>
      {this.roles=dato;})
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

