import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { Rol } from '../rol/rol';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../app.component.css']
})

export class ListarUsuariosComponent implements OnInit{
  usuarios: Usuario[];
  rol: Rol;

  constructor(private usuarioServicio: UsuarioService){

  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obetenerTodos().subscribe(dato=>
      {this.usuarios=dato;})
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
}
