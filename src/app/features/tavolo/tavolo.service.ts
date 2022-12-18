import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Tavolo } from 'src/app/model/tavolo';

@Injectable({
  providedIn: 'root'
})
export class TavoloService {
  
  private apiServer = 'http://localhost:8080/api/tavolo';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  /** GET film from the server */
  getTavoli(): Observable<Tavolo[]> {
    return this.http.get<Tavolo[]>(this.apiServer)
  }

  /** GET film by id. Will 404 if id not found */
  getTavolo(id: number): Observable<Tavolo> {
    const url = `${this.apiServer}/${id}`;
    return this.http.get<Tavolo>(url).pipe(
      tap(_ => console.log(`fetched Tavolo id=${id}`)),
      catchError(this.handleError<Tavolo>(`getTavolo id=${id}`))
    );
  }

  /** POST: add a new regista to the server */
  addTavolo(tavoloInput: Tavolo): Observable<Tavolo> {
    return this.http.post<Tavolo>(this.apiServer, tavoloInput, this.httpOptions).pipe(
      tap((newTavolo: Tavolo) => console.log(`added tavolo w/ id=${newTavolo.id}`)),
      catchError(this.handleError<Tavolo>('addTavolo'))
    );
  }

  delete(id?:number): Observable<Tavolo>{
    return this.http.delete<Tavolo>(this.apiServer + '/' + id, this.httpOptions).pipe(
      tap((deleteTavolo: Tavolo) => console.log(`added Tavolo w/ id=${deleteTavolo.id}`)),
      catchError(this.handleError<Tavolo>('deleteTavolo'))
    )
    }


  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
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
