import { UploadService } from './../../../services/uploads/shared/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';

import { User } from '../../../models/user';
import { UserInterface } from '../../../interfaces/user';
import { Upload } from '../../../services/uploads/shared/upload';
import { PASSWORD_REGEX, EMAIL_REGEX } from '../../../common/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signUp-form.component.html',
  styleUrls: ['./signUp-form.component.css']
})

export class SignUpFormComponent implements OnInit {
  public username;
  public firstName;
  public lastName;
  public password;
  public email;
  public isTrainer = false;
  public sport;
  public upload: Upload;
  public selectedFiles: FileList;

  private user: UserInterface;
  private userId;

  public userForm: FormGroup;
  public usernameFormControl: AbstractControl;
  public firstNameFormControl: AbstractControl;
  public lastNameFormControl: AbstractControl;
  public emailFormControl: AbstractControl;
  public passwordFormControl: AbstractControl;
  public isTrainerFormControl: AbstractControl;
  public sportFormControl: AbstractControl;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private modelFactory: ModelFactory,
    private uploadService: UploadService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  // TODO: More validation need to be added
  createForm() {
    this.usernameFormControl = new FormControl('', [
      Validators.required]);

    this.firstNameFormControl = new FormControl('', [
      Validators.required]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required]);

    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX),
      Validators.minLength(6),
      Validators.maxLength(25)]);

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

    this.isTrainerFormControl = new FormControl();

    this.sportFormControl = new FormControl();

    this.userForm = this.formBuilder.group({
      usernameFormControl: this.usernameFormControl,
      firstNameFormControl: this.firstNameFormControl,
      lastNameFormControl: this.lastNameFormControl,
      passwordFormControl: this.passwordFormControl,
      emailFormControl: this.emailFormControl,
      isTrainerFormControl: this.isTrainerFormControl,
      sportFormControl: this.sportFormControl
    });
  }

  detectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    const userId = this.auth.currentUserId;
    const file = this.selectedFiles.item(0);
    const dbPath = `users/${userId}/profileImage`;
    const storagePath = `images/users/${userId}`;

    this.upload = new Upload(file);
    return this.uploadService.uploadFile(storagePath, dbPath, this.upload);
  }

  signUp(): void {
    const user = this.modelFactory
      .createUser(this.username, this.firstName, this.lastName, this.email, this.isTrainer, '');

    this.auth.emailSignUp(this.email, this.password, user)
      .then(() => {
        this.uploadFile()
          .then(() => this.router.navigateByUrl('/user/profile'));
      });
  }
}
