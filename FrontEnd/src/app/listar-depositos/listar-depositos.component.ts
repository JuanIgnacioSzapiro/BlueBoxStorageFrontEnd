import { Component } from '@angular/core';
import { Deposito } from '../deposito/deposito';
import { DepositoService } from '../deposito/deposito.service';

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

  constructor(private servicio: DepositoService){}

  ngOnInit(){
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtener();
  }

  private obtener(){
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

    return false;
  }

  public guardarNuevo(){
    if(this.checkearInexistencia(this.nuevo)){
      alert("El depósito con el número '"+this.nuevo.numero+"' ya existe en la sucursal y la zona");
    }
    else if(this.nuevo.numero==null){
      alert("El campo 'numero' está incompleto");
    }
    else if(this.nuevo.volumen==null){
      alert("El campo 'volumen' está incompleto");
    }
    else{
      this.servicio.agregar(this.nuevo).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public guardarEditado(x: Deposito){
    if(this.checkearInexistencia(this.nuevo)){
      alert("El depósito con el número '"+x.numero+"' ya existe en la sucursal y la zona");
    }
    else if(x.numero==null){
      alert("El campo 'numero' está incompleto");
    }
    else if(x.volumen==null){
      alert("El campo 'volumen' está incompleto");
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
