import { Utente } from "./utente";

export interface Tavolo {
    id?:number;
    denominazione:string;
    esperienzaMinima:number;
    cifraMinima:number;
    dateCreated:Date;
    utenteCreazione:Utente;
    giocatori?:Utente[];
}
