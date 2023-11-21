import { Deposito } from "../deposito/deposito";

export class Empleado {
  idUsuario:number;
  nombre:string;
  direccion:string;
  telefono:string;
  nombreUsuario:string;
  claveUsuario:string;

  codigo:string;
  especialidad:string;
  depositos:Set<Deposito>;
  administrador: boolean;
  empleado: boolean;
}
