import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';
import { BottomBarComponent } from './layout/bottom-bar/bottom-bar.component';
import { MainBarComponent } from './layout/main-bar/main-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SingleMovieComponent } from './layout/single-movie/single-movie.component';
import { MovieSearchFormComponent } from './layout/header/movie-search-form/movie-search-form.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    BottomBarComponent,
    MainBarComponent,
    SidebarComponent,
    HeaderComponent,
    SingleMovieComponent,
    MovieSearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
