import { Usuario } from './../usuario/usuario';
import { EmpleadoService } from './../empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import { Empleado } from '../empleado/empleado';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../app.component.css']
})

export class ListarUsuariosComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private servicoEmpleado: EmpleadoService, private servicioCliente: ClienteService){ }

  ngOnInit(){
    this.obtenerEmpleados();
    this.obtenerClientes();

  }

  private obtenerEmpleados(){
    this.servicoEmpleado.obetenerTodos().subscribe(dato=>{
      this.usuarios=dato;
    });
  }
  private obtenerClientes(){
    this.servicioCliente.obetenerTodos().subscribe(dato=>{
      this.usuarios=[...this.usuarios,...dato];
      // this.usuarios=this.usuarios.concat(dato);
    });
  }

  // clientes: Cliente[];
  // empleados: Empleado[];

  // ngOnInit() {
  //   this.casteo();
  // }

  // private obtenerEmpleados(){
  //   this.servicoEmpleado.obetenerTodos().subscribe(dato=>{
  //     this.empleados=dato;
  //   });
  // }
  // private obtenerClientes(){
  //   this.servicioCliente.obetenerTodos().subscribe(dato=>{
  //     this.clientes=dato;
  //   });
  // }

  // public casteo(){
  //   let usuarioCasteado= new Usuario;
  //   this.obtenerClientes();
  //   this.obtenerEmpleados();
  //   this.clientes.forEach(cliente=> {
  //     usuarioCasteado.claveUsuario=cliente.claveUsuario;
  //     usuarioCasteado.direccion=cliente.direccion;
  //     usuarioCasteado.idUsuario=cliente.idUsuario;
  //     usuarioCasteado.nombre=cliente.nombre;
  //     usuarioCasteado.nombreUsuario=cliente.nombreUsuario;
  //     usuarioCasteado.telefono=cliente.telefono;
  //     this.usuarios=this.usuarios.concat(usuarioCasteado);
  //   })

  // }
}
