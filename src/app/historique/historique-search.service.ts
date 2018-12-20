import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Historique } from './historique';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueSearchService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8080/rest/history/activity-instance';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getHistoriques(): Observable<Historique[]> {
    return this.http.get(this.endpoint).pipe(
      map(res => res as Historique[] ));
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
