import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../app.component.css']
})

export class ListarUsuariosComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private usuarioServicio: UsuarioService){

  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obetenerTodos().subscribe(dato=>
      {this.usuarios=dato;})
  }
}
