import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from './../sucursal/sucursal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-sucursales',
  templateUrl: './listar-sucursales.component.html',
  styleUrls: ['./listar-sucursales.component.css', '../app.component.css']
})
export class ListarSucursalesComponent {
  sucursales: Sucursal[];

  constructor(private servicio: SucursalService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.sucursales=dato;})
  }
}
