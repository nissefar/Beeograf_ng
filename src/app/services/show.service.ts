import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http : HttpClient) { }

  getShowsForMovie(movieId : number) : Observable<Show[]>{
    return this.http.get<Show[]>(environment.baseUrl + 'shows/movieid/' + movieId);
  }

  getSeatsForShow(showId : number) : Observable<any>{
    return this.http.get(environment.baseUrl + 'shows/seatstatus/' + showId);
  }

  postShow(show: Show) : Observable<Show[]>{
    return this.http.post<Show[]>(environment.baseUrl + "shows/", [show]);
  }

  deleteShow(show: Show) : Observable<Show>{
    return this.http.delete<Show>(environment.baseUrl + "shows/" + show.id)
  }

  putShow(show: Show) : Observable<Show[]>{
    return this.http.put<Show[]>(environment.baseUrl + "shows/", [show]);
  }
}
