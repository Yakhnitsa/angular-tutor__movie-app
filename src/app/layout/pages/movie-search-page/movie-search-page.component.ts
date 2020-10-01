import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../model/movie.service';
import {Movie} from '../../../model/movie';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.css']
})
export class MovieSearchPageComponent implements OnInit {
  query: string;
  language: string;
  year: number;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.query){
        this.query = params.query;
        this.startSearch();
      }
    });
  }
  startSearch(): void{
    this.movieService.searchForMoviesAdvanced(this.query, this.language, this.year, this.currentPage)
      .subscribe(result => {
        console.log(result);
        this.movies = result.movies;
        this.currentPage = result.currentPage;
        this.totalPages = result.totalPages;
        this.totalResults = result.totalResults;
      });
  }

}
