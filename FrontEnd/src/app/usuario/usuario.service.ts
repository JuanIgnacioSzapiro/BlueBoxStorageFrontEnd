import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, count, retry } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/usuarios';

  private loginURL = 'http://localhost:8080/login';

  public login(usuario: Usuario):Observable<object>{
    return this.http.post(this.loginURL, usuario);
  }

  public obetenerTodos():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.listaURL);
  }
}
