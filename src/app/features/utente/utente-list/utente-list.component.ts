import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Utente } from 'src/app/model/utente';
import { RuoloService } from '../ruolo/ruolo.service';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-list',
  templateUrl: './utente-list.component.html',
  styleUrls: ['./utente-list.component.css']
})
export class UtenteListComponent implements OnInit{
   utenti?: Utente[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(public utenteService: UtenteService, private route: ActivatedRoute,public authService:AuthService,public ruoloService:RuoloService) { }

  ngOnInit(): void {
    this.sub = this.utenteService.getUtenti().subscribe(utenteListItem => this.utenti = utenteListItem);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


}
