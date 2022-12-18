import { Component, OnInit } from '@angular/core';
import { Ruolo } from 'src/app/model/ruolo';
import { Utente } from 'src/app/model/utente';
import { UtenteService } from '../utente.service';
import { RuoloService } from './ruolo.service';

@Component({
  selector: 'app-ruolo',
  templateUrl: './ruolo.component.html',
  styleUrls: ['./ruolo.component.css']
})
export class RuoloComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listaRuoli?:Ruolo[];
  selectedRuolo?:Ruolo;
  errorMessage: string = '';
  listaUtenti?:Utente[];

  constructor(private ruoloService:RuoloService,private utenteService:UtenteService){}
    getRuoli(): void {
    this.ruoloService.getAllRuoli().subscribe(ruoliItem=>this.listaRuoli=ruoliItem);
    }

    getRuolo(id:number):void{
     // this.utenteService.getUtenti().subscribe(utentiItem=>this.listaUtenti=utentiItem);
       this.ruoloService.getRuolo(id).subscribe(ruoloItem=>this.selectedRuolo=ruoloItem);
    }

}
