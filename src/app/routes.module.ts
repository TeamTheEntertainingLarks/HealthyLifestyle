import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/home/page.not.found/page.not.found.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'activities', loadChildren: './modules/fitness/activities.module#ActivitiesModule' },
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
