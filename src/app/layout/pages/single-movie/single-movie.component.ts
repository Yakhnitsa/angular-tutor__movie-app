import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MovieService} from '../../../model/movie.service';
import {MovieFull} from '../../../model/movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  public movie: MovieFull;
  public loadAwait: boolean;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) {
    //
    // router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.loadAwait = true;
    //     this.fetchSingleMovie();
    //   }
    // });
    this.route.params.subscribe((param) => {
      this.fetchSingleMovie();
    });
  }

  ngOnInit(): void {
    this.loadAwait = true;
    this.fetchSingleMovie();
  }

  fetchSingleMovie(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getSingleMovie(movieId).subscribe(data => {
      this.movie = data;
      this.loadAwait = false;
    });
  }

}
