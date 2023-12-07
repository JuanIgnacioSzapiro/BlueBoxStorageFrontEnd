import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{
  registrar: boolean;

  rol: String

  constructor(private ruta: Router){
    this.registrar=false;
  }

  ngOnInit(){
    this.ruta.navigate([''])
    this.registrar=false;
  }

  public logueado(){
  }

  public registrarse(){
    this.registrar=!this.registrar;
  }
}
