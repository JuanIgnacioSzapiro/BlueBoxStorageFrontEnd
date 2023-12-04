import { Component, OnInit } from '@angular/core';
import { Zona } from '../zona/zona';
import { ZonaService } from '../zona/zona.service';
import { Sucursal } from '../sucursal/sucursal';
import { Deposito } from '../deposito/deposito';
import { SucursalService } from '../sucursal/sucursal.service';

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

  sucursales: Sucursal[];

  botonNuevo: Boolean;

  idSucursal: any;

  constructor(private servicio: ZonaService){  }

  ngOnInit(){
    this.idSucursal = Number(window.location.toString().slice(window.location.toString().lastIndexOf('/')+1));

    this.agregarVisible=false;
    this.editarVisible=false;

    if (!Number.isNaN(this.idSucursal)){
      this.botonNuevo=true;

      this.obtenerDeSucursal(this.idSucursal);
    }
    else{
      this.botonNuevo=false;

      this.obtenerTodo();
    }
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

  public verMas(x: Zona){

  }
}
