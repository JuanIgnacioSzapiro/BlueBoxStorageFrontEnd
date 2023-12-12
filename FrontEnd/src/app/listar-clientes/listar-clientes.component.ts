import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';
import { Empleado } from '../empleado/empleado';
import { EmpleadoService } from '../empleado/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css', '../app.component.css']
})
export class ListarClientesComponent implements OnInit{
  clientes: Cliente[] = [];
  editable: Cliente;
  empleados: Empleado[];
  editarVisible:boolean;

  soloPendientes:boolean;
  soloNOPendientes:boolean;

  constructor(private servicioCliente: ClienteService, private servicioEmpleado: EmpleadoService, private ruta: Router){}

  ngOnInit(){
    this.clientes=[]
    this.editarVisible=false;
    this.obtenerEmpleados();
    this.obtenerClientes();
  }

  private obtenerEmpleados(){
    this.servicioEmpleado.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
  }

  private obtenerClientes(){
    this.servicioCliente.obetenerTodos().subscribe(datos=>{
      if(this.soloPendientes){
        for(let dato of datos){
          if(dato.pendiente==true){
            this.clientes=this.clientes.concat(dato);
          }
        }
      }
      else if(this.soloNOPendientes){
        for(let dato of datos){
          if(dato.pendiente==false){
            this.clientes=this.clientes.concat(dato);
          }
        }
      }
      else{
        this.clientes=datos;
      }
    });
  }

  public objToString(isCliente: boolean, isPendiente:boolean){
    let str = '';
    if (isPendiente){
      str += "PENDIENTE";
    }
    return str;
  }

  public mostrarEditarVisible(x: Cliente){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(x));
      this.editable.apellido = this.editable.nombre.charAt(0).toLocaleUpperCase()+this.editable.nombre.slice(1, this.editable.nombre.indexOf(",")).toLocaleLowerCase();
      this.editable.nombre =this.editable.nombre.slice(this.editable.nombre.indexOf(",")+2)
    }
    this.editarVisible=!this.editarVisible
  }

  public checkearInexistencia(x: Usuario){
    for(let clienteBuscado of this.clientes){
      if(clienteBuscado.nombreUsuario==x.nombreUsuario && clienteBuscado.idUsuario != x.idUsuario){
        return true;
      }
    }
    for(let empleadoBuscado of this.empleados){
      if(empleadoBuscado.nombreUsuario==x.nombreUsuario && empleadoBuscado.idUsuario != x.idUsuario){
        return true;
      }
    }
    return false;
  }

  public guardarEditable(x: Cliente){
    if(this.checkearInexistencia(x)){
      alert("El usuario con el nombre de usuario '"+x.nombreUsuario+"' ya existe");
    }
    else if(x.claveUsuario=="" || x.claveUsuario==null){
      alert("El campo 'Clave de usuario' está incompleto");
    }
    else if(x.dni=="" || x.dni==null){
      alert("El campo 'Código' está incompleto");
    }
    else if(x.direccion=="" || x.direccion==null){
      alert("El campo 'Dirección' está incompleto");
    }
    else if(x.mail=="" || x.mail==null){
      alert("El campo 'Especialidad' está incompleto");
    }
    else if(x.nombre=="" || x.nombre==null){
      alert("El campo 'Nombre' está incompleto");
    }
    else if(x.apellido=="" || x.apellido==null){
      alert("El campo 'Apellido' está incompleto");
    }
    else if(x.nombreUsuario=="" || x.nombreUsuario==null){
      alert("El campo 'Nombre de usuario' está incompleto");
    }
    else if(x.telefono=="" || x.telefono==null){
      alert("El campo 'Teléfono' está incompleto");
    }
    else {
      x.nombre=x.apellido.toUpperCase()+", "+x.nombre
      this.servicioCliente.modificar(x).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public eliminar(x: Cliente){
    this.servicioCliente.eliminar(x).subscribe(dato=>{
      this.ngOnInit();
    });
  }

  public obtenerRol(){
    return localStorage.getItem("0");
  }

  public verMas(x: Cliente){
    this.ruta.navigate([this.obtenerRol(), 'listar_contratos', x.idUsuario]);
  }

  public soloPendientesFunc(){
    this.soloPendientes!=this.soloPendientes;
    this.soloNOPendientes=false;
    this.ngOnInit();
  }

  public soloNOPendientesFunc(){
    this.soloNOPendientes!=this.soloNOPendientes;
    this.soloPendientes=false;
    this.ngOnInit();
  }
}
