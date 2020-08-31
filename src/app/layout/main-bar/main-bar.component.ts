import { Component, OnInit } from '@angular/core';
import {MockedMovieService} from '../../model/mocked-movie.service';
import {MovieCardData} from '../movie-card/movie-card.component';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  search = 'horror';
  public movies = null;
  singleMovie = null;

  constructor(private movieService: MockedMovieService) { }

  ngOnInit(): void {
    this.loadMovies(this.search);
    this.loadSingleMovie('some id...');
  }

  loadMovies(search): void {
    this.movieService.getMovieCollection(search).subscribe(data => {
      this.movies = data.Search;
    });
  }
  loadSingleMovie(movieId): void{
    this.movieService.getSingleMovie(movieId).subscribe( data => {
      this.singleMovie = data;
    });
  }

}
