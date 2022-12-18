import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Utente } from 'src/app/model/utente';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  utente: Utente = {username:"",nome:"",password:"",token:""};
  destroy$: Subject<boolean> = new Subject();

  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }
  
  onSubmit(loginForm: NgForm){
    this.authService.login(loginForm.value)
    .pipe(takeUntil(this.destroy$))
    .subscribe(res =>

      {
        this.authService.setUserLogged(res);
        this.router.navigate(["welcome"])})
  
  }

}
