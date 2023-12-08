import { SucursalService } from './../sucursal/sucursal.service';
import { Component, OnInit } from '@angular/core';
import { Zona } from '../zona/zona';
import { ZonaService } from '../zona/zona.service';
import { Sucursal } from '../sucursal/sucursal';
import { Deposito } from '../deposito/deposito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-zonas',
  templateUrl: './listar-zonas.component.html',
  styleUrls: ['./listar-zonas.component.css', '../app.component.css']
})
export class ListarZonasComponent implements OnInit{
  zonas: Zona[];

  editable: Zona;
  nuevo = new Zona;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  existeSucursal:Boolean

  botonNuevo: Boolean;

  idSucursal: any;

  rol:String;

  constructor(private servicio: ZonaService, private ruta: Router, private servicioSucursal: SucursalService){  }

  ngOnInit(){
    this.idSucursal = Number(window.location.toString().slice(window.location.toString().lastIndexOf('/')+1));

    this.agregarVisible=false;
    this.editarVisible=false;

    this.existeSucursal= false;

    this.checkearExistenciaSucursal();
  }

  public checkearExistenciaSucursal(){
    this.servicioSucursal.obetenerTodos().subscribe(dato=>{
      for(let sucursal of dato){
        if(sucursal.idSucursal==this.idSucursal){
          this.existeSucursal= true;
        }
      }

      if (!(Number.isNaN(this.idSucursal)) && this.existeSucursal){
        this.botonNuevo=true;

        this.obtenerDeSucursal(this.idSucursal);
      }
      else{
        this.botonNuevo=false;

        this.obtenerTodo();
      }
    })
  }

  public obtenerDeSucursal(x: Sucursal){
    this.servicio.obetenerZonasDeSucursal(x).subscribe(dato=>{
      this.zonas = dato;
    },error=>console.log(error));
  }

  public obtenerTodo(){
    this.servicio.obetenerTodos().subscribe(dato=>{
      this.zonas=dato;
    },error=>console.log(error));
  }

  public mostrarAgregarVisible(){
    this.nuevo= new Zona;
    this.agregarVisible=!this.agregarVisible
  }

  public checkearInexistencia(x: Zona){
    for(let zona of this.zonas){
      if(zona.letra==x.letra && zona.idZona!=x.idZona){
        return true;
      }
    }
    return false;
  }

  public guardarNuevo(){
    if(this.checkearInexistencia(this.nuevo)){
      alert("La zona con la letra '"+this.nuevo.letra+"' ya existe en la sucursal");
    }
    else if(this.nuevo.letra=="" || this.nuevo.letra==null){
      alert("El campo 'letra' está incompleto");
    }
    else if(this.nuevo.tipo=="" || this.nuevo.tipo==null){
      alert("El campo 'tipo' está incompleto");
    }
    else{
      this.servicio.agregar(this.idSucursal, this.nuevo).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public mostrarEditarVisible(x: Zona){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(x));
    }
    this.editarVisible=!this.editarVisible
  }

  public guardarEditado(x: Zona){
    if(this.checkearInexistencia(x)){
      alert("La zona con la letra '"+x.letra+"' ya existe en la sucursal");
    }
    else if(x.letra=="" || x.letra==null){
      alert("El campo 'letra' está incompleto");
    }
    else if(x.tipo=="" || x.tipo==null){
      alert("El campo 'tipo' está incompleto");
    }
    else{
      this.servicio.modificar(x).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public eliminar(x: Zona){
    this.servicio.eliminar(x).subscribe(dato=>{
      this.ngOnInit();
    });
  }

  public obtenerRol(){
    return localStorage.getItem("0");
  }

  public verMas(x: Zona){
    this.ruta.navigate([this.obtenerRol(),'listar_depositos', x.idZona]);
  }
}
