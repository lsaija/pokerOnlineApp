import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Ruolo } from 'src/app/model/ruolo';

@Injectable({
  providedIn: 'root'
})


export class RuoloService {

  private apiServer = 'http://localhost:8080/api/ruolo';
  
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http: HttpClient) { }
  getAllRuoli(): Observable<Ruolo[]> {
    return this.http.get<Ruolo[]>(`${this.apiServer}`)
  }

  getRuolo(id: number): Observable<Ruolo> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Ruolo>(url).pipe(
      tap(_ => console.log(`fetched Ruolo id=${id}`)),
      catchError(this.handleError<Ruolo>(`getRuolo id=${id}`))
      
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     console.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }


}
