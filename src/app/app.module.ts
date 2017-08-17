import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './routes.module';

import { RecipesModule } from './modules/food/recipes.module';
import { ActivitiesModule } from './modules/fitness/activities.module';

import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { HomeComponent } from './modules/home/home.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    RecipesModule,
    ActivitiesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
