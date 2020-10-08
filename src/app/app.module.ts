import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/pages/main-page/movie-card/movie-card.component';
import { BottomBarComponent } from './layout/bottom-bar/bottom-bar.component';
import { MainBarComponent } from './layout/pages/main-page/main-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SingleMovieComponent } from './layout/pages/single-movie/single-movie.component';
import { MovieSearchFormComponent } from './layout/header/movie-search-form/movie-search-form.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieSearchPageComponent } from './layout/pages/movie-search-page/movie-search-page.component';
import { FoundMovieComponent } from './layout/pages/movie-search-page/found-movie/found-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TvShowsComponent } from './layout/pages/tv-shows/tv-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    BottomBarComponent,
    MainBarComponent,
    SidebarComponent,
    HeaderComponent,
    SingleMovieComponent,
    MovieSearchFormComponent,
    MovieSearchPageComponent,
    FoundMovieComponent,
    TvShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
