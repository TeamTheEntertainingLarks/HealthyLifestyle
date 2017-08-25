import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

@Component({
  selector: 'app-signin-form',
  templateUrl: './signIn-form.component.html',
  styleUrls: ['./signIn-form.component.css']
})
export class SignInFormComponent implements OnInit {
  public email;
  public password;
  public userForm: FormGroup;
  public emailFormControl: AbstractControl;
  public passwordFormControl: AbstractControl;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

      this.passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(PASSWORD_REGEX),
        Validators.minLength(6),
        Validators.maxLength(25)]);

    this.userForm = this.formBuilder.group({
      emailFormControl: this.emailFormControl,
      passwordFormControl: this.passwordFormControl,
    });
  }

  signIn(): void {
    this.auth.emailLogin(this.email, this.password);
  }
}
