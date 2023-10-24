import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/listar_roles';

  obetenerTodos():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(this.listaURL, rol)
      .pipe(
        catchError(this.handleError('agregar', rol))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Rol>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(rol: Rol): Observable<Rol>{
    return this.http.put<Rol>(this.listaURL, rol)
      .pipe(
        catchError(this.handleError('updateHero', rol))
      );
  }
}
