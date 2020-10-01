import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../model/movie';

@Component({
  selector: 'app-found-movie',
  templateUrl: './found-movie.component.html',
  styleUrls: ['./found-movie.component.css']
})
export class FoundMovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
