import { Component } from '@angular/core';
import { Deposito } from '../deposito/deposito';
import { DepositoService } from '../deposito/deposito.service';
import { Zona } from '../zona/zona';

@Component({
  selector: 'app-listar-depositos',
  templateUrl: './listar-depositos.component.html',
  styleUrls: ['./listar-depositos.component.css', '../app.component.css']
})
export class ListarDepositosComponent {
  depositos: Deposito[];

  editable: Deposito;
  nuevo = new Deposito;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  botonNuevo: Boolean;

  idZona: any;

  constructor(private servicio: DepositoService){}

  ngOnInit(){
    this.agregarVisible=false;
    this.editarVisible=false;

    this.idZona = Number(window.location.toString().slice(window.location.toString().lastIndexOf('/')+1));

    if (!Number.isNaN(this.idZona)){
      this.botonNuevo=true;

      this.obtenerDeZona(this.idZona);
    }
    else{
      this.botonNuevo=false;

      this.obtenerTodo();
    }
  }

  public obtenerDeZona(x: Zona){
    this.servicio.obetenerZonasDeSucursal(x).subscribe(dato=>{
      this.depositos = dato;
    },error=>console.log(error));
  }

  private obtenerTodo(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.depositos=dato;})
  }

  public mostrarAgregarVisible(){
    this.nuevo= new Deposito
    this.agregarVisible=!this.agregarVisible
  }

  public mostrarEditarVisible(x: Deposito){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(x));
    }
    this.editarVisible=!this.editarVisible
  }

  public checkearInexistencia(x: Deposito){
    for(let deposito of this.depositos){
      if(deposito.numero==x.numero && deposito.idDeposito!=x.idDeposito){
        return true;
      }
    }
    return false;
  }

  public guardarNuevo(){
    if(this.checkearInexistencia(this.nuevo)){
      alert("El depósito con el número '"+this.nuevo.numero+"' ya existe en la sucursal y la zona");
    }
    else if(this.nuevo.numero==null){
      alert("El campo 'número' está incompleto");
    }
    else if(this.nuevo.volumen==null){
      alert("El campo 'volumen' está incompleto");
    }
    else if(Number.isNaN(this.nuevo.numero)){
      alert("El campo 'número' debe ser un número");
    }
    else if(Number.isNaN(this.nuevo.volumen)){
      alert("El campo 'volumen' debe ser un número");
    }
    else{
      this.servicio.agregar(this.idZona, this.nuevo).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public guardarEditado(x: Deposito){
    if(this.checkearInexistencia(x)){
      alert("El depósito con el número '"+x.numero+"' ya existe en la sucursal y la zona");
    }
    else if(x.numero==null){
      alert("El campo 'número' está incompleto");
    }
    else if(x.volumen==null){
      alert("El campo 'volumen' está incompleto");
    }
    else if(Number.isNaN(x.numero)){
      alert("El campo 'número' debe ser un número");
    }
    else if(Number.isNaN(x.volumen)){
      alert("El campo 'volumen' debe ser un número");
    }
    else{
      this.servicio.modificar(x).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public eliminar(x: Deposito){
    this.servicio.eliminar(x).subscribe(dato=>{
      this.ngOnInit();
    });
  }
}
