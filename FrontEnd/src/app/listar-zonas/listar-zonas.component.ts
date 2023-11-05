import { Component } from '@angular/core';
import { Zona } from '../zona/zona';
import { ZonaService } from '../zona/zona.service';

@Component({
  selector: 'app-listar-zonas',
  templateUrl: './listar-zonas.component.html',
  styleUrls: ['./listar-zonas.component.css', '../app.component.css']
})
export class ListarZonasComponent {
  zonas: Zona[];

  constructor(private servicio: ZonaService){}

  ngOnInit(){
    this.obtener();
  }

  private obtener(){
    this.servicio.obetenerTodos().subscribe(dato=>
      {this.zonas=dato;})
  }
}
