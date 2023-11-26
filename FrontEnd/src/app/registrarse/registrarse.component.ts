import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
import { ClienteService } from '../cliente/cliente.service';
import { EmpleadoService } from '../empleado/empleado.service';
import { Empleado } from '../empleado/empleado';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['../app.component.css', './registrarse.component.css']
})
export class RegistrarseComponent implements OnInit{
  nuevoCliente: Cliente;

  empleados: Empleado[];
  clientes: Cliente[];

  constructor(private appComponent: AppComponent, private servicioEmpleado: EmpleadoService, private servicioCliente: ClienteService){
  }

  ngOnInit(){
    this.nuevoCliente= new Cliente();
    this.nuevoCliente.pendiente=true;
    this.nuevoCliente.cliente=true;
    this.obtenerEmpleados();
    this.obtenerClientes();
  }

  public volver(){
    this.appComponent.registrarse();
  }

  private obtenerEmpleados(){
    this.servicioEmpleado.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
  }
  private obtenerClientes(){
    this.servicioCliente.obetenerTodos().subscribe(dato=>
      {this.clientes=dato;})
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

  guardarRegistrado(){
    if(this.checkearInexistencia(this.nuevoCliente)){
      alert("El usuario con el nombre de usuario '"+this.nuevoCliente.nombreUsuario+"' ya existe");
    }
    else if(this.nuevoCliente.claveUsuario==null){
      alert("El campo 'Clave de usuario' está incompleto");
    }
    else if(this.nuevoCliente.dni==null){
      alert("El campo 'Código' está incompleto");
    }
    else if(this.nuevoCliente.direccion==null){
      alert("El campo 'Dirección' está incompleto");
    }
    else if(this.nuevoCliente.mail==null){
      alert("El campo 'Especialidad' está incompleto");
    }
    else if(this.nuevoCliente.nombre==null){
      alert("El campo 'Nombre' está incompleto");
    }
    else if(this.nuevoCliente.nombreUsuario==null){
      alert("El campo 'Nombre de usuario' está incompleto");
    }
    else if(this.nuevoCliente.telefono==null){
      alert("El campo 'Teléfono' está incompleto");
    }
    else {
      alert("Usuario registrado correctamente");
      this.servicioCliente.agregar(this.nuevoCliente).subscribe(dato=>{
        this.volver();
      },error=>console.log(error));
    }

  }

}
