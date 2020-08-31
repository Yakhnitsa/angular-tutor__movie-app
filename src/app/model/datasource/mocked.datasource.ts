import {Injectable} from '@angular/core';
import {Datasource} from './datasource';
import {Observable, of} from 'rxjs';
import {Movie, MovieFull} from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MockedDatasource implements Datasource {
  movieCollection: Movie[] = [
    {
      title: 'Fight Club',
      poster: 'http://image.tmdb.org/t/p/w342/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg',
      year: '1999',
      rated: undefined,
      released: undefined
    },
  ]
  singleMovie: MovieFull = {}

  constructor() {
  }

  getMovieCollection(collection: string): Observable<Movie[]> {
    return of(this.movieCollection);
  }

  getSingleMovie(movieId: string): Observable<MovieFull> {
    return of(this.singleMovie);
  }
}
