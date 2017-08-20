import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent extends AppComponent implements OnInit {
  constructor(auth: AuthService) {
    super(auth);
  }

  ngOnInit() {

  }

  signOut() {
    this.auth.signOut();
  }
}
