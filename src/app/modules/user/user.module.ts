import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInFormComponent } from './signIn-form/signIn-form.component';
import { SignUpFormComponent } from './signUp-form/signUp-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdIconModule, MaterialModule,
  MD_ERROR_GLOBAL_OPTIONS,
  showOnDirtyErrorStateMatcher,
  MD_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignInFormComponent, SignUpFormComponent],
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
