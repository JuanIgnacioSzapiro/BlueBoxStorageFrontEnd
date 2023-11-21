import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/clientes';

  obetenerTodos():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  agregar(cleinte: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.listaURL, cleinte)
      .pipe(
        catchError(this.handleError('agregar', cleinte))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Cliente>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(cleinte: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.listaURL, cleinte)
      .pipe(
        catchError(this.handleError('updateHero', cleinte))
      );
  }
}
