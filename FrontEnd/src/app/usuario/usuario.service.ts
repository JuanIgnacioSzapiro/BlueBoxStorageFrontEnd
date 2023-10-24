import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/listar_usuarios';

  private loginURL = 'http://localhost:8080/login';

  obetenerTodos():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.listaURL);
  }

  login(usuario: Usuario):Observable<object>{
    return this.http.post(this.loginURL, usuario);
  }

  /** POST: add a new hero to the database */
  agregar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.listaURL, usuario)
      .pipe(
        catchError(this.handleError('agregar', usuario))
      );
  }
  handleError(arg0: string, hero: any): (err: any, caught: Observable<Usuario>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  modificar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.listaURL, usuario)
      .pipe(
        catchError(this.handleError('updateHero', usuario))
      );
  }
}
