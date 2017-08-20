import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(protected auth: AuthService) {
    console.log(auth.currentUser);
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }
}
