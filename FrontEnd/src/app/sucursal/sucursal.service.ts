import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sucursal } from './sucursal';
import { Zona } from '../zona/zona';

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
  public agregar(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.listaURL, sucursal);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.put<Sucursal>(this.listaURL+'/'+sucursal.idSucursal, sucursal);
  }
  /** DELETE: delete the hero from the server */
  public eliminar(sucursal: Sucursal): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+sucursal.idSucursal);
  }

  obetenerSucursalPerteneciente(z: number):Observable<Sucursal>{
    return this.http.get<Sucursal>(this.listaURL+'/'+z);
  }
}
