import { ListarZonasComponent } from './../listar-zonas/listar-zonas.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css', '../app.component.css'],
})
export class BarraLateralComponent {
  sideBarItems: any;

  listarZonasComponent: ListarZonasComponent;

  constructor(){

  }

  ngOnInit(){
    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Listar mis contratos', '/listar_mis_contratos'],
        ['Listar mis depositos', '/listar_mis_depositos'],

        // ['Listar usuarios', '/listar_usuarios', 'rol'],
        ['Listar clientes', '/listar_clientes'],
        ['Listar empleados', '/listar_empleados'],

        ['Listar contratos', '/listar_contratos'],

        ['Listar sucursales', '/listar_sucursales'],
        ['Listar zonas', '/listar_zonas'],
        ['Listar depóstios', '/listar_depositos'],

      ]
    }
  }
}
