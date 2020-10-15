import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FoundMovieComponent} from './found-movie/found-movie.component';
import {MovieSearchPageComponent} from './movie-search-page.component';

@NgModule({
  declarations: [
    FoundMovieComponent,
    MovieSearchPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MovieSearchPageComponent
  ]
})
export class MovieSearchPageModule { }
