import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css', '../app.component.css'],
})
export class BarraLateralComponent {
  sideBarItems: any;

  constructor(){

  }

  ngOnInit(){
    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Listar mis contratos', '/listar_mis_contratos', 'rol'],
        ['Listar mis depositos', '/listar_mis_depositos', 'rol'],

        ['Listar usuarios', '/listar_usuarios', 'rol'],
        ['Listar clientes', '/listar_clientes', 'rol'],
        ['Listar empleados', '/listar_empleados', 'rol'],

        ['Listar contratos', '/listar_contratos', 'rol'],

        ['Listar sucursales', '/listar_sucursales', 'rol'],
        ['Listar zonas', '/listar_zonas', 'rol'],
        ['Listar depóstios', '/listar_depositos', 'rol'],

      ]
    }
  }
}
