import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getSingleMovie(id): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?i=tt3896198&apikey=760c1292');
  }

  public getMovieCollection(): Observable<Movie[]>{
    return null;
  }
}
