import { UserInterface } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserData } from '../../../services/user-data.service';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { MdDialog } from '@angular/material';
import { DialogType } from '../../../enums/dialogTypes';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: UserInterface;
  public selectedOption: string;

  constructor(
    private auth: AuthService,
    private userService: UserData,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.userService.getUserByUid(this.auth.currentUserId)
      .subscribe((res) => this.user = res);
  }

  openDialog(ev) {
    const header = ev.target.innerText;
    let inputIncluded = false;
    let dialogType;

    if (header.includes('Email')) {
      inputIncluded = true;
      dialogType = DialogType.ChangeEmail;
    }

    if (header.includes('password')) {
      dialogType = DialogType.ResetPassword;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: header,
        type: dialogType,
        inputIncluded: inputIncluded
      }
    });

    dialogRef.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        if (!inputIncluded) {
          this.auth.resetPassword(this.user.email);
        }

        const oldEmail = dialogRef.componentInstance.oldEmail;
        const password = dialogRef.componentInstance.password;
        const newEmail = dialogRef.componentInstance.newEmail;

        this.auth.changeEmail(oldEmail, newEmail, password);
      }
    });
  }
}
