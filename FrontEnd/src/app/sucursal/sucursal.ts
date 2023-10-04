import { Zona } from "../zona/zona";

export class Sucursal {
    idSucursal!:number;
    direccion!:string;
    telefono!:string;
    zonas!:Set<Zona>;
}
