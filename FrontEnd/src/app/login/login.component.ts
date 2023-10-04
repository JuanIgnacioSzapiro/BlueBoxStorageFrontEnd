import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

  usuarioLogin(){
    console.log(this.usuario)
  }

}
