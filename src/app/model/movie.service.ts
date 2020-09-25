import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Movie, MovieFull} from './movie';
import {MockedDatasource} from './datasource/mocked.datasource';
import {TheMovieDatasource} from './datasource/themoviedb.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private datasource: TheMovieDatasource) {
  }

  public getSingleMovie(id: string): Observable<MovieFull> {
    return this.datasource.getSingleMovie(id);
  }

  public getMovieCollection(collection: string): Observable<Movie[]>{
    return this.datasource.getMovieCollection(collection);
  }

  public searchForMovies(search: string): Observable<Movie[]>{
    return this.datasource.searchForMovie(search);
  }
}
