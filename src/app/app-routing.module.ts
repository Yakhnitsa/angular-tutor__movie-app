import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SingleMovieComponent} from './layout/pages/single-movie/single-movie.component';
import {MainBarComponent} from './layout/pages/main-page/main-bar.component';
import {MovieSearchPageComponent} from './layout/pages/movie-search-page/movie-search-page.component';
import {TvShowsComponent} from './layout/pages/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component:  MainBarComponent},
  { path: 'movies/:collection', component:  MainBarComponent},
  { path: 'tv-shows/:collection', component:  TvShowsComponent},
  { path: 'movie-search', component:  MovieSearchPageComponent},
  { path: 'single-movie/:id', component:  SingleMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
