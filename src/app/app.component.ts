import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';
  isActive = 'Home';
  routerName = '';

  constructor(private router: Router) {
    this.routerName = this.router.url;
  }
  
  changeMwnuSelection(menuName) {
    this.isActive = menuName;
  }
}

