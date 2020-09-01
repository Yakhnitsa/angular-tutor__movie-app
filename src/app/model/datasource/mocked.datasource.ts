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
      id: '605116',
      title: '"Project Power',
      poster: 'http://image.tmdb.org/t/p/w342/TnOeov4w0sTtV2gqICqIxVi74V.jpg',
      rated: 6,
      released: '2020-08-14'
    },
    {
      id: '718444',
      title: 'Rogue',
      poster: 'http://image.tmdb.org/t/p/w342/uOw5JD8IlD546feZ6oxbIjvN66P.jpg',
      rated: 6.7,
      released: '2020-08-20'
    },
    {
      id: '539885',
      title: 'Ava',
      poster: 'http://image.tmdb.org/t/p/w342/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg',
      rated: 6.7,
      released: '2020-08-06'
    },
    {
      id: '618354',
      title: 'Superman: Man of Tomorrow',
      poster: 'http://image.tmdb.org/t/p/w342/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg',
      rated: 7.5,
      released: '2020-08-14'
    },
    {
      id: '721452',
      title: 'One Night in Bangkok',
      poster: 'http://image.tmdb.org/t/p/w342/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg',
      rated: 7.1,
      released: '2020-08-25'
    },
    {
      id: '577922',
      title: 'Tenet',
      poster: 'http://image.tmdb.org/t/p/w342/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
      rated: 7.6,
      released: '2020-08-22'
    },
  ];
  singleMovie: MovieFull = {
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

  constructor() {
  }

  getMovieCollection(collection: string): Observable<Movie[]> {
    return of(this.movieCollection);
  }

  getSingleMovie(movieId: string): Observable<MovieFull> {
    return of(this.singleMovie);
  }
}
