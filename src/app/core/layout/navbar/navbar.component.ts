import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public authService:AuthService ,private router:Router){}
 
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  esciSessione(){
    this.authService.logout();
    this.router.navigateByUrl('login');

}


}
