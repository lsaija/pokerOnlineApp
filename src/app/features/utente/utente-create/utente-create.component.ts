import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-create',
  templateUrl: './utente-create.component.html',
  styleUrls: ['./utente-create.component.css']
})
export class UtenteCreateComponent implements OnInit{
  
  utente!: Utente;
  errorMessage: string = '';

  constructor(private utenteService: UtenteService, private router: Router) { }
  
  ngOnInit(): void {
  }

  save(utenteForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.utente));
    if (utenteForm.valid) {
      this.utenteService.registraUtente(this.utente).subscribe({
        next: utenteItem => {
          this.utente = utenteItem;
          this.errorMessage = '';
        },
        error: () => this.errorMessage = 'Attenzione! Inserimento fallito!',
        complete: () => {
          if (!this.errorMessage)
            this.router.navigate([`regista/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
        }
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
