import { Component, OnInit } from '@angular/core';
import {MockedMovieService} from '../../model/mocked-movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public selectedCategory = null;

  constructor( private movieService: MockedMovieService) { }

  ngOnInit(): void {
  }

  get movieCategories(): string[]{
    return this.movieService.getCategories();
  }
  changeCategory(category): void{
    console.log(category);
  }

}
