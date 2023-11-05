import { ClienteService } from './../cliente/cliente.service';
import { Component } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Rol } from '../rol/rol';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css', '../app.component.css']
})
export class ListarClientesComponent {
  clientes: Cliente[];
  rol: Rol;

  constructor(private servicio: ClienteService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.clientes=dato;})
  }

  public objToString(obj: Object){
    let str = '';
    let contador: any;
    for(contador of Object.entries(obj)){
      this.rol = contador[1];
      str += this.rol.autoridad;
      if (contador[0] < Object.entries(obj).length-1) {
        str += ', ';
      }
    }
    return str;
  }
}
