import { Empleado } from './../empleado/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado/empleado.service';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css', '../app.component.css'],
})

export class ListarEmpleadosComponent implements OnInit{
  empleados: Empleado[];
  clientes: Cliente[];

  editable: Empleado;
  nuevo = new Empleado;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  constructor(private servicioEmpleado: EmpleadoService, private servicioCliente: ClienteService){}

  ngOnInit(){
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtenerEmpleados();
    this.obtenerClientes();
  }

  private obtenerEmpleados(){
    this.servicioEmpleado.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
  }
  private obtenerClientes(){
    this.servicioCliente.obetenerTodos().subscribe(dato=>
      {this.clientes=dato;});
  }

  public objToString(isAdministrador: boolean){
    let str = '';
    if(isAdministrador){
      str= "ADMINISTRADOR"
    }
    return str;
  }

  public mostrarAgregarVisible(){
    this.agregarVisible=!this.agregarVisible
    this.nuevo=new Empleado;
    this.nuevo.administrador=false;
  }

  public checkearInexistencia(x: Usuario){
    if(this.clientes != null){
      for(let clienteBuscado of this.clientes){
        if(clienteBuscado.nombreUsuario==x.nombreUsuario && clienteBuscado.idUsuario != x.idUsuario){
          return true;
        }
      }
    }
    for(let empleadoBuscado of this.empleados){
      if(empleadoBuscado.nombreUsuario==x.nombreUsuario && empleadoBuscado.idUsuario != x.idUsuario){
        return true;
      }
    }
    return false;
  }

  public guardarNuevo(){
    this.nuevo.empleado=true;
    if(this.checkearInexistencia(this.nuevo)){
      alert("El usuario con el nombre de usuario '"+this.nuevo.nombreUsuario+"' ya existe");
    }
    else if(this.nuevo.claveUsuario=="" || this.nuevo.claveUsuario==null){
      alert("El campo 'Clave de usuario' está incompleto");
    }
    else if(this.nuevo.codigo=="" || this.nuevo.codigo==null){
      alert("El campo 'Código' está incompleto");
    }
    else if(this.nuevo.direccion=="" || this.nuevo.direccion==null){
      alert("El campo 'Dirección' está incompleto");
    }
    else if(this.nuevo.especialidad=="" || this.nuevo.especialidad==null){
      alert("El campo 'Especialidad' está incompleto");
    }
    else if(this.nuevo.nombre=="" || this.nuevo.nombre==null){
      alert("El campo 'Nombre' está incompleto");
    }
    else if(this.nuevo.nombreUsuario=="" || this.nuevo.nombreUsuario==null){
      alert("El campo 'Nombre de usuario' está incompleto");
    }
    else if(this.nuevo.telefono=="" || this.nuevo.telefono==null){
      alert("El campo 'Teléfono' está incompleto");
    }
    else{
      this.servicioEmpleado.agregar(this.nuevo).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public mostrarEditarVisible(empleado: Empleado){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(empleado));
    }
    this.editarVisible=!this.editarVisible
  }

  public guardarEditado(x: Empleado){
    if(this.checkearInexistencia(x)){
      alert("El empleado con el nombre de usuario '"+x.nombreUsuario+"' ya existe");
    }
    else{
      if(this.nuevo.claveUsuario=="" || this.nuevo.claveUsuario==null){
        alert("El campo 'Clave de usuario' está incompleto");
      }
      else if(this.nuevo.codigo=="" || this.nuevo.codigo==null){
        alert("El campo 'Código' está incompleto");
      }
      else if(this.nuevo.direccion=="" || this.nuevo.direccion==null){
        alert("El campo 'Dirección' está incompleto");
      }
      else if(this.nuevo.especialidad=="" || this.nuevo.especialidad==null){
        alert("El campo 'Especialidad' está incompleto");
      }
      else if(this.nuevo.nombre=="" || this.nuevo.nombre==null){
        alert("El campo 'Nombre' está incompleto");
      }
      else if(this.nuevo.nombreUsuario=="" || this.nuevo.nombreUsuario==null){
        alert("El campo 'Nombre de usuario' está incompleto");
      }
      else if(this.nuevo.telefono=="" || this.nuevo.telefono==null){
        alert("El campo 'Teléfono' está incompleto");
      }
      else{
        this.servicioEmpleado.modificar(x).subscribe(dato=>{
          this.ngOnInit();
        },error=>console.log(error));
      }
    }
  }

  public cambiarAdministradorNuevo(){
    this.nuevo.administrador=!this.nuevo.administrador;
  }

  public cambiarAdministradorEditable(){
    this.editable.administrador=!this.editable.administrador;
  }

  public eliminar(x: Empleado){
    if(x.idUsuario!=1){
      this.servicioEmpleado.eliminar(x).subscribe(dato=>{
        this.ngOnInit();
      });
    }
    else{
      alert("No se puede eliminar el administrador");
    }
  }

  public verMas(x: Empleado){

  }
}

