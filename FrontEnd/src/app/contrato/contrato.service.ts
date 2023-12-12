import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  obetenerTodosDeEmpleado(x: number):Observable<Contrato[]>{
    return this.http.get<Contrato[]>(this.listaURL+"_de_empleado/"+x);
  }

  obetenerDeUsuario(id_usuario:number):Observable<Contrato[]>{
    return this.http.get<Contrato[]>(this.listaURL+'/'+id_usuario);
  }

  /** POST: add a new hero to the database */
  public agregar(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.listaURL, contrato);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(contrato: Contrato): Observable<Contrato>{
    return this.http.put<Contrato>(this.listaURL+'/'+contrato.idContrato, contrato);
  }

  /** DELETE: delete the hero from the server */
  public eliminar(contrato: Contrato): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+contrato.idContrato);
  }
}
