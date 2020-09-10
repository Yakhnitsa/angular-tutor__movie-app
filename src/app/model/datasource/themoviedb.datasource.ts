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

    this.http.get(this.movieRequest + movieId, {params})
      .subscribe(data => {
        console.log(data);
      });
    return undefined;
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
  modifySingleMovie(data): MovieFull{
    return {
      id: '550',
      title: 'Fight Club',
      poster: 'http://image.tmdb.org/t/p/w342/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg',
      rated: 8.4,
      released: '1999-10-15',
      tagline: 'Mischief. Mayhem. Soap',
      overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \\"fight clubs\\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      runtime: '139',
      genre: 'Drama',
      director: '',
      writer: '',
      actors: '',
      plot: '',
      language: 'English',
      country: 'Germany, United States of America',
      awards: ''
    };
  }

}


