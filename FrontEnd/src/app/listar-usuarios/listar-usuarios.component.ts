import { EmpleadoService } from './../empleado/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../app.component.css']
})

export class ListarUsuariosComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private servicoEmpleado: EmpleadoService, private servicioCliente: ClienteService){ }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.servicoEmpleado.obetenerTodos().subscribe(dato=>{
      this.usuarios=dato;
    });
    this.servicioCliente.obetenerTodos().subscribe(dato=>{
      let x =this.usuarios;
      this.usuarios=[];
      this.usuarios=[...x,...dato];
    });
  }
}
