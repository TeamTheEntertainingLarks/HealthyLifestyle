import { UserData } from './../../services/user-data.service';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public user;
  public userProfileImageUrl;

  constructor(private auth: AuthService, private userService: UserData) {
  }

  ngOnInit() {

  }

  getCurrentUserDisplayName() {
    return this.auth.currentUserDisplayName;
  }

  getCurrentUserProfileImage() {
    this.userService.getUserProfileImageUrl(this.auth.currentUserId)
      .then((url) => {
        console.log(this.userProfileImageUrl);
        return this.userProfileImageUrl = url;
      });
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }

  signOut() {
    this.auth.signOut();
  }
}
