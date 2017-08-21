import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';

import { User } from '../../../models/user';
import { UserInterface } from '../../../interfaces/user';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  private user: UserInterface;

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
    private modelFactory: ModelFactory) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  // More validation need to be added
  createForm() {
    this.usernameFormControl = new FormControl('', [
      Validators.required]);

    this.firstNameFormControl = new FormControl('', [
      Validators.required]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required]);

    this.passwordFormControl = new FormControl('', [
      Validators.required]);

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

  signUp(): void {
    const user = this.modelFactory
      .createUser(this.username, this.firstName, this.lastName, this.email, this.isTrainer);
    this.auth.emailSignUp(this.email, this.password, user);
  }
}
