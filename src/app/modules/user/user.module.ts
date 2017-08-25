import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInFormComponent } from './signIn-form/signIn-form.component';
import { SignUpFormComponent } from './signUp-form/signUp-form.component';

import { UserRoutesModule } from './user.routes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {
  MdIconModule, MaterialModule,
  MD_ERROR_GLOBAL_OPTIONS,
  showOnDirtyErrorStateMatcher,
  MD_PLACEHOLDER_GLOBAL_OPTIONS,
  MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UserRoutesModule,
    MdIconModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdDialogModule,
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    UserProfileComponent,
  ],
  providers: [
    { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: showOnDirtyErrorStateMatcher } },
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ],
  exports: [
    SignInFormComponent,
    SignUpFormComponent
  ]
})
export class UserModule { }
