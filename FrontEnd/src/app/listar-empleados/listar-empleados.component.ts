import { Route } from '@angular/router';
import { UsuarioService } from './../usuario/usuario.service';
import { AppComponent } from './../app.component';
import { Empleado } from './../empleado/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado/empleado.service';
import { Usuario } from '../usuario/usuario';

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

  constructor(private servicio: EmpleadoService){}

  ngOnInit(){
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.empleados=dato;})
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

  private checkearInexistencia(nombreNuevo: string){
    return false;
  }

  public guardarNuevo(){
    this.nuevo.empleado=true;
    if(this.checkearInexistencia(this.nuevo.nombreUsuario)){
      alert("El empleado con el nombre de usuario '"+this.nuevo.nombreUsuario+"' ya existe");
    }
    else{
      if(this.nuevo.claveUsuario==null){
        alert("El campo 'Clave de usuario' está incompleto");
      }
      else if(this.nuevo.codigo==null){
        alert("El campo 'Código' está incompleto");
      }
      else if(this.nuevo.direccion==null){
        alert("El campo 'Dirección' está incompleto");
      }
      else if(this.nuevo.especialidad==null){
        alert("El campo 'Especialidad' está incompleto");
      }
      else if(this.nuevo.nombre==null){
        alert("El campo 'Nombre' está incompleto");
      }
      else if(this.nuevo.nombreUsuario==null){
        alert("El campo 'Nombre de usuario' está incompleto");
      }
      else if(this.nuevo.telefono==null){
        alert("El campo 'Teléfono' está incompleto");
      }
      else{
        this.servicio.agregar(this.nuevo).subscribe(dato=>{
          this.ngOnInit();
        },error=>console.log(error));
      }
    }
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
    this.nuevo.administrador=!this.nuevo.administrador;
  }

  public eliminar(x: Empleado){
    this.servicio.eliminar(x).subscribe(dato=>{
      this.ngOnInit();
    });

  }
}

