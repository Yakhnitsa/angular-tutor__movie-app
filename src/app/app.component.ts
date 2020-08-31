import { Component } from '@angular/core';
import {MockedMovieService} from './model/mocked-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie-app';
  constructor() {
  }
}
