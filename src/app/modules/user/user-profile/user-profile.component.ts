import { UserInterface } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserData } from '../../../services/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: UserInterface;

  constructor(private auth: AuthService, private userService: UserData) { }

  ngOnInit() {
    this.userService.getUserByUid(this.auth.currentUserId)
      .subscribe((res) => this.user = res);
  }
}
