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

  constructor(private servicio: DepositoService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.depositos=dato;})
  }
}
