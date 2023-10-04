import { Rol } from "../rol/rol";

export class Cliente {
  idUsuario!:number;
  nombre!:string;
  direccion!:string;
  telefono!:string;
  nombreUsuario!:string;
  claveUsuario!:string;
  autoridades!:Set<Rol>;

  dni!:string;
  mail!:string;
}
