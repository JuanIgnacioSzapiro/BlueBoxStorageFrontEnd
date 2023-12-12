import { Empleado } from './../empleado/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado/empleado.service';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
import { Router } from '@angular/router';

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

  soloAdmin:boolean;
  soloNoAdmin:boolean;

  constructor(private servicioEmpleado: EmpleadoService, private servicioCliente: ClienteService, private ruta: Router){}

  ngOnInit(){
    this.empleados = [];
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtenerEmpleados();
    this.obtenerClientes();
  }

  private obtenerEmpleados(){
    this.servicioEmpleado.obetenerTodos().subscribe(datos=>{
      if(this.soloAdmin){
        for(let dato of datos){
          if(dato.administrador==true){
            this.empleados=this.empleados.concat(dato);
          }
        }
      }
      else if(this.soloNoAdmin){
        for(let dato of datos){
          if(dato.administrador==false){
            this.empleados=this.empleados.concat(dato);
          }
        }
      }
      else{
        this.empleados=datos;
      }
    })
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
    else if(this.nuevo.apellido=="" || this.nuevo.apellido==null){
      alert("El campo 'Apellido' está incompleto");
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
      this.nuevo.nombre=this.nuevo.apellido.toUpperCase()+", "+this.nuevo.nombre
      this.servicioEmpleado.agregar(this.nuevo).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public mostrarEditarVisible(empleado: Empleado){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(empleado));
      this.editable.apellido = this.editable.nombre.charAt(0).toLocaleUpperCase()+this.editable.nombre.slice(1, this.editable.nombre.indexOf(",")).toLocaleLowerCase();
      this.editable.nombre =this.editable.nombre.slice(this.editable.nombre.indexOf(",")+2)
    }
    this.editarVisible=!this.editarVisible
  }

  public guardarEditado(x: Empleado){
    if(this.checkearInexistencia(x)){
      alert("El empleado con el nombre de usuario '"+x.nombreUsuario+"' ya existe");
    }
    else{
      if(this.editable.claveUsuario=="" || this.editable.claveUsuario==null){
        alert("El campo 'Clave de usuario' está incompleto");
      }
      else if(this.editable.codigo=="" || this.editable.codigo==null){
        alert("El campo 'Código' está incompleto");
      }
      else if(this.editable.direccion=="" || this.editable.direccion==null){
        alert("El campo 'Dirección' está incompleto");
      }
      else if(this.editable.especialidad=="" || this.editable.especialidad==null){
        alert("El campo 'Especialidad' está incompleto");
      }
      else if(x.apellido=="" || x.apellido==null){
        alert("El campo 'Apellido' está incompleto");
      }
      else if(this.editable.nombre=="" || this.editable.nombre==null){
        alert("El campo 'Nombre' está incompleto");
      }
      else if(this.editable.nombreUsuario=="" || this.editable.nombreUsuario==null){
        alert("El campo 'Nombre de usuario' está incompleto");
      }
      else if(this.editable.telefono=="" || this.editable.telefono==null){
        alert("El campo 'Teléfono' está incompleto");
      }
      else{
        x.nombre=x.apellido.toUpperCase()+", "+x.nombre
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
      alert("No se puede eliminar el administrador maestro");
    }
  }

  public obtenerRol(){
    return localStorage.getItem("0");
  }

  public verMas(x: Empleado){
    this.ruta.navigate([this.obtenerRol(), 'sucursal_zona_deposito', x.idUsuario]);
  }

  public soloAdminFunc(){
    this.soloAdmin!=this.soloAdmin;
    this.soloNoAdmin=false;
    this.ngOnInit();
  }

  public soloNoAdminFunc(){
    this.soloNoAdmin!=this.soloNoAdmin;
    this.soloAdmin=false;
    this.ngOnInit();
  }
}

