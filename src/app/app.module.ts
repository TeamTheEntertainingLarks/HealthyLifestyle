import { ModelFactoryInterface } from './services/factories/interfaces/model.factory';
import { ModelFactory } from './services/factories/model.factory';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdIconModule, MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppRoutesModule } from './routes.module';

import { RecipesModule } from './modules/food/recipes.module';
import { ActivitiesModule } from './modules/fitness/activities.module';
import { UserModule } from './modules/user/user.module';

import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { HomeComponent } from './modules/home/home.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DataService } from './services/data.service';
import { RecipeData } from './services/recipe-data.service';
import { UploadService } from './services/uploads/shared/upload.service';

import { firebaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserData } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutesModule,
    RecipesModule,
    ActivitiesModule,
    UserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MaterialModule
  ],
  providers: [
    DataService,
    UserData,
    AuthService,
    AuthGuard,
    RecipeData,
    ModelFactory,
    UploadService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}
