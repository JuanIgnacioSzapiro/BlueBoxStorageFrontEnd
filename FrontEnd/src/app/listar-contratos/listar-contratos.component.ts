import { Component } from '@angular/core';
import { Contrato } from '../contrato/contrato';
import { ContratoService } from '../contrato/contrato.service';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css', '../app.component.css']
})
export class ListarContratosComponent {
  contratos: Contrato[];

  constructor(private servicio: ContratoService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.contratos=dato;})
  }
}
