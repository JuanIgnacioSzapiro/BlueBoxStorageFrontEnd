import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent  implements OnInit{
  sideBarItems: any;

  constructor(){

  }

  ngOnInit(){
    this.sideBarItems={
      nombreYredireccionamiento: [
        ['Contrato nuevo', 'direcc', 'rol'],
        ['Listar empleados y sus depósitos', 'direcc', 'rol'],
        ['Listar clientes', 'direcc', 'rol'],
        ['Listar contratos', 'direcc', 'rol'],
        ['Listar depóstios', 'direcc', 'rol'],
        ['Listar empleados', 'direcc', 'rol'],
        ['Listar mis contratos', 'direcc', 'rol'],
        ['Listar mis depositos', 'direcc', 'rol'],
        ['Listar sucursales', 'direcc', 'rol'],
        ['Listar zonas', 'direcc', 'rol']
      ]
    }
  }
}

export class SidenavAutosizeExample {
  showFiller = false;
}
