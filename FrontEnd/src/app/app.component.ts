import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{
  loggedIn:boolean;
  registrar: boolean;

  constructor(private ruta: Router){
    this.loggedIn=false;
    this.registrar=false;
  }

  ngOnInit(){
    this.ruta.navigate([' ']);
    this.loggedIn=false;
    this.registrar=false;
  }

  public logueado(){
    this.loggedIn=!this.loggedIn;
  }

  public registrarse(){
    this.registrar=!this.registrar;
  }
}
