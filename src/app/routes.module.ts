import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';

import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './modules/shared/page.not.found/page.not.found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'activities', loadChildren: './modules/activities/activities.module#ActivitiesModule' },
    { path: 'recipes', loadChildren: './modules/food/recipes.module#RecipesModule' },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
    { path: 'workouts', loadChildren: './modules/workouts/workouts.module#WorkoutsModule' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
