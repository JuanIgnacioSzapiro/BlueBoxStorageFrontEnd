import { AppComponent } from './../app.component';
import { UsuarioService } from './../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
})

export class LoginComponent implements OnInit {
  usuario:Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private appComponent: AppComponent) {

   }

  ngOnInit() {
  }

  usuarioLogin(){
    this.usuarioService.login(this.usuario).subscribe(data=>{
      this.appComponent.logueado();
    },error=>alert("Falló"));
  }
}
