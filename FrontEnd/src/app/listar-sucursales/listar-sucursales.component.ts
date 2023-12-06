import { SucursalService } from './../sucursal/sucursal.service';
import { Router } from '@angular/router';
import { Sucursal } from './../sucursal/sucursal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-sucursales',
  templateUrl: './listar-sucursales.component.html',
  styleUrls: ['./listar-sucursales.component.css', '../app.component.css']
})
export class ListarSucursalesComponent implements OnInit{
  sucursales: Sucursal[];
  editable: Sucursal;
  nuevo = new Sucursal;

  agregarVisible: Boolean;
  editarVisible: Boolean;

  constructor(private servicio: SucursalService, private ruta: Router){}

  ngOnInit(){
    this.agregarVisible=false;
    this.editarVisible=false;
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.sucursales=dato;})
  }

  public mostrarAgregarVisible(){
    this.agregarVisible=!this.agregarVisible;
  }

  public mostrarEditarVisible(x: Sucursal){
    if(this.editarVisible==false){
      this.editable=JSON.parse(JSON.stringify(x));
    }
    this.editarVisible=!this.editarVisible;
  }

  public checkearInexistencia(x: Sucursal){
    for(let sucursal of this.sucursales){
      if(sucursal.direccion==x.direccion && sucursal.idSucursal!=x.idSucursal){
        return true;
      }
    }
    return false;
  }

  public guardarNuevo(x: Sucursal){
    if(this.checkearInexistencia(x)){
      alert("La sucursal con la dirección "+x.direccion+" ya existe");
    }
    else if(x.direccion=="" || x.direccion==null){
      alert("El campo 'dirección' está incompleto");
    }
    else if(x.telefono=="" || x.telefono==null){
      alert("El campo 'teléfono' está incompleto");
    }
    else{
      this.servicio.agregar(x).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public guardarEditado(x: Sucursal){
    if(this.checkearInexistencia(x)){
      alert("La sucursal con la dirección "+x.direccion+" ya existe");
    }
    else if(x.direccion=="" || x.direccion==null){
      alert("El campo 'dirección' está incompleto");
    }
    else if(x.telefono=="" || x.telefono==null){
      alert("El campo 'teléfono' está incompleto");
    }
    else{
      this.servicio.modificar(x).subscribe(dato=>{
        this.ngOnInit();
      },error=>console.log(error));
    }
  }

  public eliminar(x: Sucursal){
    this.servicio.eliminar(x).subscribe(dato=>{
      this.ngOnInit();
    });
  }

  public verMas(x: Sucursal){
    this.ruta.navigate(['/listar_zonas', x.idSucursal]);
  }
}
