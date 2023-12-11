import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoDeposito } from './empleadoDeposito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoDepositoService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/empleados_depositos';

  public obetenerTodos(idUsuario: number):Observable<EmpleadoDeposito[]>{
    return this.http.get<EmpleadoDeposito[]>(this.listaURL+'/'+idUsuario);
  }

  public agregar(empleadoDeposito: EmpleadoDeposito): Observable<EmpleadoDeposito> {
    return this.http.post<EmpleadoDeposito>(this.listaURL, empleadoDeposito);
  }

  public eliminar(id_empleadoDeposito: number): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+id_empleadoDeposito);
  }
}
