import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Zona } from './zona';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/listar_zonas';

  obetenerTodos():Observable<Zona[]>{
    return this.http.get<Zona[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(zona: Zona): Observable<Zona> {
    return this.http.post<Zona>(this.listaURL, zona)
      .pipe(
        catchError(this.handleError('agregar', zona))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Zona>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(zona: Zona): Observable<Zona>{
    return this.http.put<Zona>(this.listaURL, zona)
      .pipe(
        catchError(this.handleError('updateHero', zona))
      );
  }
}
