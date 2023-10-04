import { Deposito } from "../deposito/deposito";
import { Rol } from "../rol/rol";

export class Empleado {
        idUsuario!:number;
        nombre!:string;
        direccion!:string;
        telefono!:string;
        nombreUsuario!:string;
        claveUsuario!:string;
        autoridades!:Set<Rol>;
        
        codigo!:string;
        especialidad!:string;
        depositos!:Set<Deposito>;
}
