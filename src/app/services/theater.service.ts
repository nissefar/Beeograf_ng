import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seat } from '../models/seat';
import { Theater } from '../models/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http : HttpClient) { }

  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(environment.baseUrl + "theaters")
  }

  postTheater(theater: Theater) : Observable<Theater> {
    return this.http.post<Theater>(environment.baseUrl + "theaters", [theater])
  }

  getTheatersWithSeats(): Observable<Theater[]> {
    return this.http.get<Theater[]>(environment.baseUrl + "theaters/seats")
  }

  deleteTheater(theater: Theater) : Observable<Theater[]> {
    return this.http.delete<Theater[]>(environment.baseUrl + "theaters/" + theater.id);
  }

  putTheaterWithSeats(theater: Theater, seatsToBeDeleted: Seat[]) : Observable<Theater> {
    return this.http.put<Theater>(environment.baseUrl + 'theaters/seats', { theater: theater, seatsToBeDeleted: seatsToBeDeleted});
  }
}
