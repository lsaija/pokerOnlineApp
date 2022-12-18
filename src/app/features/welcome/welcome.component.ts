import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RuoloService } from '../utente/ruolo/ruolo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor( private route: ActivatedRoute,public authService:AuthService,public ruoloService:RuoloService) { }

}
