import { Deposito } from "../deposito/deposito";

export class Zona {
    idZona!:number;
    letra!:string;
    tipo!:string;
    deposito!:Set<Deposito>;

}
