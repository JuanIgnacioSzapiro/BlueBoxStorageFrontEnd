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
    console.log(localStorage.length);


    if(localStorage.length!=0){
      localStorage.clear()
    }

    this.usuarioService.obtener(this.usuario).subscribe(x=>{
      localStorage.setItem("usuarioLogueado", JSON.stringify(x));
      this.appComponent.logueado();
    })

  }

  registrarseView(){
    this.appComponent.registrarse();
  }
}
