import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {SingleMovieComponent} from './layout/single-movie/single-movie.component';
import {MainBarComponent} from './layout/main-bar/main-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component:  MainBarComponent},
  { path: 'single-movie/:id', component:  SingleMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
