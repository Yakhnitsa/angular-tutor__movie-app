import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../model/movie.service';
import {Movie} from '../../../model/movie';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.css']
})
export class MovieSearchPageComponent implements OnInit {
  searchForm = new FormGroup({
    query: new FormControl(''),
    year: new FormControl(''),
    language: new FormControl(''),
  });
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
      if (params.query){
        this.searchForm.patchValue({
          query: params.query
        });
        this.startSearch();
      }
    });
  }
  startSearch(): void{
    this.movieService.searchForMoviesAdvanced(
      this.searchForm.value.query,
      this.searchForm.value.language,
      this.searchForm.value.year,
      this.currentPage)

      .subscribe(result => {
        this.movies = result.movies;
        this.currentPage = result.currentPage;
        this.totalPages = result.totalPages;
        this.totalResults = result.totalResults;
      });
  }
  test(): void{
    console.log(this.searchForm.value);
    this.startSearch();
  }

}
