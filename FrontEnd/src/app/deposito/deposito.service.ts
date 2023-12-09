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
  public agregar(idZona: number, deposito: Deposito): Observable<Deposito> {
    return this.http.post<Deposito>(this.listaURL+'/'+idZona, deposito);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(deposito: Deposito): Observable<Deposito>{
    return this.http.put<Deposito>(this.listaURL+'/'+deposito.idDeposito, deposito);
  }
  /** DELETE: delete the hero from the server */
  public eliminar(deposito: Deposito): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+deposito.idDeposito);
  }

  public obetenerDepositosDeZona(x: any):Observable<Deposito[]>{
    return this.http.get<Deposito[]>(this.listaURL+'/'+Number(x));
  }
}
