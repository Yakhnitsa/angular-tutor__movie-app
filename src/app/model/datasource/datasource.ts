import {Movie, MovieFull} from '../movie';
import {Observable} from 'rxjs';

export interface Datasource {
  getSingleMovie(movieId: string): Observable<MovieFull>;

  getMovieCollection(collection: string): Observable<Movie[]>;
}
