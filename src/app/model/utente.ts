import { Ruolo } from "./ruolo";
import { Tavolo } from "./tavolo";

export interface Utente {
    id?:number;
    username:string;
    password?:string;
    confermaPassword?:string;
    nome?:string;
    cognome?:string;
    email?:string;
    dateCreated?: Date;
    esperienzaAccumulata?:number;
    creditoAccumulato?:number;
    token:string;
    role?:Ruolo[];
    stato?: 'ATTIVO' |'DISABILITATO' |'CREATO';
    tavoli?:Tavolo[];
}
