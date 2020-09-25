import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../model/movie.service';
import {Movie} from '../../../model/movie';
import {Observable, of} from 'rxjs';
import {switchMap, catchError, map} from 'rxjs/operators';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.css']
})
export class MovieSearchFormComponent implements OnInit {
  movie: Movie;
  searchString: string;
  foundMovies: Movie[];

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void{
    console.log(this.searchString);
  }

  formatter = (movie: Movie) => movie.title;

  movieSearch = (text$: Observable<string>) => {

    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // switchMap allows returning an observable rather than maps array
      switchMap( (searchText) =>  {
        this.searchString = searchText;
        if (searchText.length < 4) { return []; }
        return this.movieService.searchForMovies(searchText).pipe(
            // Reduce size of result array
            map( data => data.slice(0, 7 )
          ));
      }),
      catchError(err => '')
    );
  }

  jumpToMovie(event): void{
    if (event !== undefined){
      this.router.navigate(['./single-movie/' + event.id]);
    }
  }

}
