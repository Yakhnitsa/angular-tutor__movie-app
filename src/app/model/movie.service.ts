import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Movie, MovieFull, SearchResult} from './movie';
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

  public searchForMovies(searchQuery: string): Observable<Movie[]>{
    return this.datasource.searchForMovie(searchQuery);
  }

  public searchForMoviesAdvanced(searchQuery: string, language?: string, year?: number, currentPage?: number): Observable<SearchResult>{
    return this.datasource.searchForMovieAdvanced(searchQuery, language , year , currentPage);
  }

  public getTvShowCollection(collection: string): Observable<Movie[]>{
    return this.datasource.getTvShowCollection(collection);
  }
}
