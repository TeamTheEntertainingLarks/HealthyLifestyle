import { ModelFactoryInterface } from './services/factories/interfaces/model.factory';
import { ModelFactory } from './services/factories/model.factory';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule } from '@angular/material';
import {
  MdIconModule, MaterialModule,
  MD_ERROR_GLOBAL_OPTIONS,
  showOnDirtyErrorStateMatcher,
  MD_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';
import 'hammerjs';

import { AppRoutesModule } from './routes.module';

import { RecipesModule } from './modules/food/recipes.module';
import { ActivitiesModule } from './modules/fitness/activities.module';

import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { HomeComponent } from './modules/home/home.component';
import { SignUpFormComponent } from './modules/user/signUp-form/signUp-form.component';
import { SignInFormComponent } from './modules/user/signIn-form/signIn-form.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { DataService } from './services/data.service';
import { RecipeData } from './services/recipe-data.service';

import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserData } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignUpFormComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutesModule,
    RecipesModule,
    ActivitiesModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MaterialModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard,
    RecipeData,
    UserData,
    ModelFactory,
    { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: showOnDirtyErrorStateMatcher } },
    { provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
