import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { RuoloService } from '../ruolo/ruolo.service';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-detail',
  templateUrl: './utente-detail.component.html',
  styleUrls: ['./utente-detail.component.css']
})
export class UtenteDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute, private utenteService: UtenteService,
    private router: Router,public ruoloService: RuoloService) { }

  selectedUtente?: Utente;
  errorMessage: string = '';
  confirmMessage: string = '';

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.utenteService.getUtente(idParam).subscribe({
      next: utenteItem => {
        this.selectedUtente = utenteItem;
        console.log(JSON.stringify(utenteItem))
      },
      error: err => this.errorMessage = err
    });

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }


}
