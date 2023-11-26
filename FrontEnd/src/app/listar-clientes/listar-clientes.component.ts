import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css', '../app.component.css']
})
export class ListarClientesComponent implements OnInit{
  clientes: Cliente[];

  constructor(private servicioCliente: ClienteService){}

  ngOnInit(){
    this.obtenerClientes();
  }

  private obtenerClientes(){
    this.servicioCliente.obetenerTodos().subscribe(dato=>
      {this.clientes=dato;});
  }

  public objToString(isCliente: boolean, isPendiente:boolean){
    let str = '';
    if (isPendiente){
      str += "PENDIENTE";
    }
    return str;
  }
}
