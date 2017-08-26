import { UploadService } from './../../../services/uploads/shared/upload.service';
import { UserInterface } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserData } from '../../../services/user-data.service';
import { MdDialog } from '@angular/material';
import { DialogType } from '../../../enums/dialogTypes';
import { UserDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: UserInterface;
  public userId: string;
  public selectedOption: string;

  constructor(
    private auth: AuthService,
    private userService: UserData,
    private dialog: MdDialog,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.userService
      .getUserByUid(this.auth.currentUserId)
      .subscribe((res) => {
        this.user = res;
        this.userId = this.auth.currentUserId;
      });
  }

  openDialog(event) {
    const buttonText = event.target.innerHTML;
    let dialogType;
    let header: string;

    if (buttonText.includes('email')) {
      dialogType = DialogType.ChangeEmail;
      header = 'Reset email';
    } else if (buttonText.includes('password')) {
      dialogType = DialogType.ResetPassword;
      header = 'Reset password';
    } else {
      dialogType = DialogType.ChangePicture;
      header = 'Change picture';
    }

    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        header: header,
        type: dialogType,
      }
    });

    dialogRef.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        if (dialogType === DialogType.ChangePicture) {
          const oldProfileImageName = this.user.profileImage.name;
          this.uploadService.deleteFileStorage(`images/users/${this.userId}`, oldProfileImageName);
          this.uploadService.uploadUserProfileImage(
            this.userId,
            'images/users',
            `users/${this.userId}/profileImage`,
            dialogRef.componentInstance.upload);
        } else if (dialogType === DialogType.ResetPassword) {
          this.auth.resetPassword(this.user.email);
        } else {
          const oldEmail = dialogRef.componentInstance.oldEmail;
          const password = dialogRef.componentInstance.password;
          const newEmail = dialogRef.componentInstance.newEmail;

          this.auth.changeEmail(oldEmail, newEmail, password);
        }
      }
    });
  }
}
