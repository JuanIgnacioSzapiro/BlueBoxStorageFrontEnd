import { Sucursal } from './../sucursal/sucursal';
import { Zona } from './../zona/zona';
import { SucursalService } from '../sucursal/sucursal.service';
import { ZonaService } from '../zona/zona.service';
import { DepositoService } from './../deposito/deposito.service';
import { Component, NgIterable, OnInit } from '@angular/core';
import { Deposito } from '../deposito/deposito';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sucursal-zona-deposito',
  templateUrl: './sucursal-zona-deposito.component.html',
  styleUrls: ['./sucursal-zona-deposito.component.css']
})
export class SucursalZonaDepositoComponent implements OnInit{
  sucursales: Sucursal[];

  constructor( private sucursalServicio: SucursalService, private zonaService: ZonaService, private depositoService: DepositoService){  }

  ngOnInit(){
    console.clear()
    this.obtenerSucursales();
  }

  public obtenerDeZona(z: Zona, s: Sucursal){
    this.depositoService.obetenerDepositosDeZona(z.idZona).subscribe(dato=>{
      z.depositos=dato;
    },error=>console.log(error));
  }

  public obtenerDeSucursal(s: Sucursal){
    this.zonaService.obetenerZonasDeSucursal(s.idSucursal).subscribe(dato=>{
      s.zonas=dato;
      for(let zona of s.zonas){
        this.obtenerDeZona(zona, s);
      }
    },error=>console.log(error));
  }

  public obtenerSucursales(){
    this.sucursalServicio.obetenerTodos().subscribe(dato=>
      {this.sucursales=dato;
        for(let sucursal of this.sucursales){
          this.obtenerDeSucursal(sucursal);
        }
      },error=>console.log(error));
  }
}
