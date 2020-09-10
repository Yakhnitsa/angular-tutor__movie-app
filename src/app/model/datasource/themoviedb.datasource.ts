import {Injectable} from '@angular/core';
import {Datasource} from './datasource';
import {Movie, MovieFull} from '../movie';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDatasource implements Datasource{
  private apiKey = 'b8ecf22d78b37fb9ee17d60e699a6be5';
  private movieRequest = 'https://api.themoviedb.org/3/movie/';
  private posterPath = 'http://image.tmdb.org/t/p/w342';

  constructor(private http: HttpClient){}

  getMovieCollection(collection: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', 'b8ecf22d78b37fb9ee17d60e699a6be5');

    return this.http.get(this.movieRequest + 'top_rated', {params})
      .pipe(map(response => this.modifyMovieCollection(response)));
  }

  getSingleMovie(movieId: string): Observable<MovieFull> {
    const params = new HttpParams()
      .set('api_key', 'b8ecf22d78b37fb9ee17d60e699a6be5');

    return this.http.get(this.movieRequest + movieId, {params})
      .pipe(map(response => this.modifySingleMovie(response)));

  }

  modifyMovieCollection(data): Movie[]{
    const movies: Movie[] = [];
    data.results.forEach(item => {
      movies.push({
        id: item.id,
        title: item.title,
        poster: this.posterPath + item.poster_path,
        rated: item.vote_average,
        released: ''
      });
    });
    return movies;
  }

  modifySingleMovie(response): MovieFull{
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
      country: '',
      awards: ''
    };
  }

}


