import { Rol } from "../rol/rol";

export class Usuario {
  idUsuario!:number;
  nombre!:string;
  direccion!:string;
  telefono!:string;
  nombreUsuario!:string;
  claveUsuario!:string;
  autoridades!:Set<Rol>;
}
