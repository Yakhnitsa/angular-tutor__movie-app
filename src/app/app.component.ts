import { Component } from '@angular/core';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuIcon = faAlignLeft;
  title = 'angular-movie-app';
  sidebarHidden = false;
  constructor() {
  }

  toggleSidebar(): void{
    this.sidebarHidden = !this.sidebarHidden;
  }
}
