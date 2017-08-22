import { AuthService } from './services/auth.service';
import { Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }

  // isAuthenticated() {
  //   return this.auth.isAuthenticated;
  // }
}
