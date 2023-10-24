import { ClienteService } from './../cliente/cliente.service';
import { Component } from '@angular/core';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css', '../app.component.css']
})
export class ListarClientesComponent {
  clientes: Cliente[];
}
