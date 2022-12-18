import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Ruolo } from 'src/app/model/ruolo';
import { Utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiServer = 'http://localhost:8080/api/auth/login';
  private apiServerForRoles = 'http://localhost:8080/api/utente/userInfo';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { }
  

 
  private userLoggedSubject$:BehaviorSubject<Utente | null>=new BehaviorSubject<Utente | null>(null);

  login(loginForm: Utente): Observable<Utente> {
    /*return this.http.post<{'jwt-token': string}>(this.apiServer, JSON .stringify(loginForm), this.httpOptions).pipe(
      map(res => { 
        return {username: loginForm.username, token: res['jwt-token']}
      })
    );*/

    return this.http.post<{'jwt-token': string}>(this.apiServer, JSON .stringify(loginForm), this.httpOptions).pipe(
      map(res => { 
        return {username: loginForm.username, token: res['jwt-token'] }
      })
    );
  }
  
  setUserLogged(utente:Utente|null){
    this.userLoggedSubject$.next(utente);
  }
  
  getUserLogged():Observable<Utente | null>{
    return this.userLoggedSubject$.asObservable();
  }
  
  isLoggedIn():boolean{
    return this.userLoggedSubject$.value? !!this.userLoggedSubject$.value.token :false;
  }
  
  getUserToken():String | null {
    return this.userLoggedSubject$.value ?this.userLoggedSubject$.value.token:null;
  }
  logout(){
    this.setUserLogged(null);
  }

  /*isAdmin():boolean {
          
           return this.userLoggedSubject$.value? !!this.userLoggedSubject$.value.role.codice !== !! "ROLE_ADMIN" :false;
    }
    
  }*/
 roles(): Observable<{ roles: string[] }> {
  return this.http.get<{ roles: string[] }>(`${this.apiServerForRoles}`);
}





}
