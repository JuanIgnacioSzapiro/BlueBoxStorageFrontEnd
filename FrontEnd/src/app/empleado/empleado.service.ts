import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/empleados'


  public obetenerTodos():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  public agregar(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.listaURL, empleado);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.listaURL+'/'+empleado.idUsuario, empleado);
  }
  /** DELETE: delete the hero from the server */
  public eliminar(empleado: Empleado): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+empleado.idUsuario);
  }
}
