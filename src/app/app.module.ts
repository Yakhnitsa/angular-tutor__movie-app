import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BottomBarComponent } from './layout/bottom-bar/bottom-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MovieSearchFormComponent } from './layout/header/movie-search-form/movie-search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TvShowsComponent } from './layout/pages/tv-shows/tv-shows.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {MainPageModule} from './layout/pages/main-page/main-page.module';
import {MovieSearchPageModule} from './layout/pages/movie-search-page/movie-search-page.module';
import {SingleMovieModule} from './layout/pages/single-movie/single-movie.module';


@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    SidebarComponent,
    HeaderComponent,
    MovieSearchFormComponent,
    TvShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MainPageModule,
    MovieSearchPageModule,
    SingleMovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
