import { AppComponent } from './../app.component';
import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
})

export class LoginComponent implements OnInit{
  usuario:Usuario = new Usuario();



  constructor(private usuarioService: UsuarioService, private appComponent: AppComponent, private ruta: Router) {}

  ngOnInit() {
    sessionStorage.setItem("", "")
    if(sessionStorage.length!=0){
      sessionStorage.clear()
      // window.location.reload()
    }
  }

  usuarioLogin(){
    this.usuarioService.login(this.usuario).subscribe(data=>{
      this.obtener();
    },error=>alert("Nombre de usuario o contraseña incorrecta"));
  }

  public obtener(){
    this.usuarioService.obtener(this.usuario).subscribe(x=>{
      var rol: any;

      if(JSON.stringify(x).includes('"administrador":true')){
        rol = "administrador"
      }
      else if(JSON.stringify(x).includes('"empleado":true')){
        rol = "empleado"
      }
      else if(JSON.stringify(x).includes('"cliente":true')){
        rol = "cliente"
      }
      else if(JSON.stringify(x).includes('"pendiente":true')){
        rol = "pendiente"
      }

      this.ruta.navigate([rol]);
    })
  }

  registrarseView(){
    this.appComponent.registrarse();
  }
}
