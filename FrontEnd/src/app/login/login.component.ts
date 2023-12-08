import { AppComponent } from './../app.component';
import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
})

export class LoginComponent implements OnInit{
  usuario:Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private appComponent: AppComponent) {}

  ngOnInit() {
  }

  usuarioLogin(){
    this.usuarioService.login(this.usuario).subscribe(data=>{
      this.obtener();
    },error=>alert("Nombre de usuario o contraseña incorrecta"));
  }

  public obtener(){
    if(localStorage.length!=0){
      localStorage.clear()
    }

    this.usuarioService.obtener(this.usuario).subscribe(x=>{
      let string = JSON.stringify(x);

      if(string?.includes('"administrador":true')){
        localStorage.setItem("0", "administrador");
      }
      else if(string?.includes('"empleado":true')){
        localStorage.setItem("0", "empleado");
      }
      else if(string?.includes('"pendiente":true')){
        localStorage.setItem("0", "pendiente");
      }
      else if(string?.includes('"cliente":true')){
        localStorage.setItem("0", "cliente");
      }

      this.appComponent.logueado();
    })

  }

  registrarseView(){
    this.appComponent.registrarse();
  }
}
