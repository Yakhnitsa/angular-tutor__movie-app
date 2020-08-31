import {Component, Input, OnInit} from '@angular/core';

export interface MovieCardData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieCardData;

  constructor() { }

  ngOnInit(): void {
  }

}
