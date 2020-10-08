import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../model/movie.service';
import {Movie, MovieFull} from '../../../model/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  defaultCollection = 'top_rated';
  public loadAwait: boolean;
  public movies: Movie[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
      this.route.params.subscribe((param) => {
        this.fetchMovieCollection();
      });
  }

  ngOnInit(): void {
    // this.fetchMovieCollection();
  }

  fetchMovieCollection(): void {
    let collection = this.route.snapshot.paramMap.get('collection');
    collection = collection === null ? this.defaultCollection : collection;
    console.log(collection);
    this.movieService.getMovieCollection(collection).subscribe(data => {
      this.movies = data;
    });
  }
}
