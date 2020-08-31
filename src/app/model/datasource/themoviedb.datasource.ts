import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDatasource {
  private apiKey = 'b8ecf22d78b37fb9ee17d60e699a6be5';
  private singleMovieRequest = 'https://api.themoviedb.org/3/movie/{id}';
  private posterPath = 'http://image.tmdb.org/t/p/w342';

  constructor(){}
}
