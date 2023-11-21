import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/empleados'


  obetenerTodos():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.listaURL, empleado)
      .pipe(
        catchError(this.handleError('agregar', empleado))
      );
  }

  handleError(arg0: string, hero: any): (err: any, caught: Observable<Empleado>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.listaURL+'/{'+empleado.idUsuario+'}', empleado)
      .pipe(
        catchError(this.handleError('updateHero', empleado))
      );
  }
}
