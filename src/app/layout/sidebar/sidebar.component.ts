import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../model/movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public selectedCategory = null;

  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
  }

  get movieCategories(): string[]{
    return [];
  }
  changeCategory(category): void{
    console.log(category);
  }

}
