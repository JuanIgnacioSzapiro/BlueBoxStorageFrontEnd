import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/contratos';

  obetenerTodos():Observable<Contrato[]>{
    return this.http.get<Contrato[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.listaURL, contrato)
      .pipe(
        catchError(this.handleError('agregar', contrato))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Contrato>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(contrato: Contrato): Observable<Contrato>{
    return this.http.put<Contrato>(this.listaURL, contrato)
      .pipe(
        catchError(this.handleError('updateHero', contrato))
      );
  }
}
