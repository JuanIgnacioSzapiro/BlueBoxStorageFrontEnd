import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private listaURL = 'http://localhost:8080/clientes';

   public obetenerTodos():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.listaURL);
  }

  /** POST: add a new hero to the database */
    public agregar(cleinte: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.listaURL, cleinte);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  public modificar(cleinte: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.listaURL+'/'+cleinte.idUsuario, cleinte);
  }

  /** DELETE: delete the hero from the server */
  public eliminar(cleinte: Cliente): Observable<Object>{
    return this.http.delete(this.listaURL+'/'+cleinte.idUsuario);
  }
}
