import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule } from '@angular/material';
import {MdIconModule} from '@angular/material';
import 'hammerjs';

import { AppRoutesModule } from './routes.module';

import { RecipesModule } from './modules/food/recipes.module';
import { ActivitiesModule } from './modules/fitness/activities.module';

import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { HomeComponent } from './modules/home/home.component';
import { SignUpFormComponent } from './modules/user/signUp-form/signUp-form.component';
import { SignInFormComponent } from './modules/user/signIn-form/signIn-form.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    MdIconModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
