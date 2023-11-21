import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sucursal } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/sucursales';

  obetenerTodos():Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.listaURL, sucursal)
      .pipe(
        catchError(this.handleError('agregar', sucursal))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Sucursal>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.put<Sucursal>(this.listaURL, sucursal)
      .pipe(
        catchError(this.handleError('updateHero', sucursal))
      );
  }
}
