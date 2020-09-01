import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../model/movie.service';
import {Movie, MovieFull} from '../../model/movie';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  search = 'horror';
  public movies: Movie[];
  singleMovie: MovieFull;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies(this.search);
    this.loadSingleMovie('some id...');
  }

  loadMovies(search): void {
    this.movieService.getMovieCollection(search).subscribe(data => {
      this.movies = data;
    });
  }
  loadSingleMovie(movieId): void{
    this.movieService.getSingleMovie(movieId).subscribe( data => {
      this.singleMovie = data;
    });
  }

}
