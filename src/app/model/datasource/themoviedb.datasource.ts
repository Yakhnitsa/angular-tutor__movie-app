import {Injectable} from '@angular/core';
import {Datasource} from './datasource';
import {Movie, MovieFull, SearchResult} from '../movie';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDatasource implements Datasource{
  private apiKey = 'b8ecf22d78b37fb9ee17d60e699a6be5';
  private movieRequest = 'https://api.themoviedb.org/3/movie/';
  private tvSowRequest = 'https://api.themoviedb.org/3/tv/';
  private posterPath = 'http://image.tmdb.org/t/p/w342';
  private searchRequest = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient){}

  getMovieCollection(collection: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(this.movieRequest + collection, {params})
      .pipe(map(response => this.modifyMovieCollection(response)));
  }

  getTvShowCollection(collection: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(this.tvSowRequest + collection, {params})
      .pipe(map(response => this.modifyMovieCollection(response)));
  }

  getSingleMovie(movieId: string): Observable<MovieFull> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(this.movieRequest + movieId, {params})
      .pipe(map(response => this.modifySingleMovie(response)));

  }
  searchForMovie(searchQuery: string): Observable<Movie[]> {
    let params = new HttpParams();

    params = params.set('api_key', this.apiKey);
    params = params.set('query', searchQuery);

    return this.http.get(this.searchRequest, {params})
      .pipe(map(response => this.modifyMovieCollection(response)));

  }
  searchForMovieAdvanced(searchQuery: string, language?: string, year?: number, currentPage?: number): Observable<SearchResult> {
    let params = new HttpParams();

    params = params.set('api_key', this.apiKey);
    params = params.set('query', searchQuery);
    if (language){
      params = params.set('language', language);
    }
    if (year){
      params = params.set('year', year.toString(10));
    }
    if (currentPage){
      params = params.set('page', currentPage.toString(10));
    }

    return this.http.get(this.searchRequest, {params})
      .pipe(map(response => this.getSearchResult(response)));
  }


  modifyMovieCollection(data): Movie[]{
    const movies: Movie[] = [];
    data.results.forEach(item => {
      movies.push({
        id: item.id,
        title: item.title,
        poster: this.posterPath + item.poster_path,
        rated: item.vote_average,
        released: item.release_date,
        overview: item.overview
      });
    });
    return movies;
  }

  getSearchResult(data): SearchResult{
    const searchResult: SearchResult = {
      movies: [],
      currentPage: 1,
      totalPages: 1,
      totalResults: 0,
    };

    searchResult.currentPage = data.page;
    searchResult.totalPages = data.total_pages;
    searchResult.totalResults = data.total_results;
    searchResult.movies = this.modifyMovieCollection(data);

    return searchResult;
  }

  modifySingleMovie(response): MovieFull{
    console.log(response);
    return {
      id: response.id,
      title: response.title,
      poster: this.posterPath + response.poster_path,
      rated: response.vote_average,
      released: response.release_date,
      tagline: response.tagline,
      overview: response.overview,
      runtime: response.runtime,
      genre: response.genres,
      director: '',
      writer: '',
      actors: '',
      plot: '',
      language: response.original_language,
      country: response.production_countries,
      awards: '',
      homepage: response.homepage
    };
  }

}


