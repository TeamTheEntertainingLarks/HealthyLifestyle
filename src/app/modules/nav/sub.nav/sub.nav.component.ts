import { Component } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-subnav',
  templateUrl: './sub.nav.component.html',
  styleUrls: ['./sub.nav.component.css']
})
export class SubNavComponent {
  auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }
}
