import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Zona } from './zona';
import { Sucursal } from '../sucursal/sucursal';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/zonas';

  obetenerTodos():Observable<Zona[]>{
    return this.http.get<Zona[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
  public agregar(idSucursal: number, zona: Zona): Observable<Zona> {
    return this.http.post<Zona>(this.listaURL+'/'+idSucursal, zona);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(zona: Zona): Observable<Zona>{
    return this.http.put<Zona>(this.listaURL+'/'+zona.idZona, zona);
  }

  /** DELETE: delete the hero from the server */
  public eliminar(zona: Zona): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+zona.idZona);
  }

  public obetenerZonasDeSucursal(x: Number):Observable<Zona[]>{
    return this.http.get<Zona[]>(this.listaURL+'/'+Number(x));
  }
}
