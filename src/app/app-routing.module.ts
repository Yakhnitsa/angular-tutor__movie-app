import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {SingleMovieComponent} from './layout/pages/single-movie/single-movie.component';
import {MainBarComponent} from './layout/pages/main-page/main-bar.component';
import {MovieSearchPageComponent} from './layout/pages/movie-search-page/movie-search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component:  MainBarComponent},
  { path: 'movie-search', component:  MovieSearchPageComponent},
  { path: 'single-movie/:id', component:  SingleMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
