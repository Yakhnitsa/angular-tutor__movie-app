import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie-app';
  sidebarHidden = false;
  constructor() {
  }

  toggleSidebar(): void{
    this.sidebarHidden = !this.sidebarHidden;
  }
}
