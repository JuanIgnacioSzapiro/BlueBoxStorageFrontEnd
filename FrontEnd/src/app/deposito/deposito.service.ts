import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Deposito } from './deposito';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/depositos';

  obetenerTodos():Observable<Deposito[]>{
    return this.http.get<Deposito[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(deposito: Deposito): Observable<Deposito> {
    return this.http.post<Deposito>(this.listaURL, deposito)
      .pipe(
        catchError(this.handleError('agregar', deposito))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Deposito>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(deposito: Deposito): Observable<Deposito>{
    return this.http.put<Deposito>(this.listaURL, deposito)
      .pipe(
        catchError(this.handleError('updateHero', deposito))
      );
  }
}
