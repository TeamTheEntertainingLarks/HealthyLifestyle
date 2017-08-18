import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { RecipesAllComponent } from './modules/food/all.recipes.component/all.recipes.component';
import { ActivitiesAllComponent } from './modules/fitness/all.activities.component/all.activities.component';
import { RecipeComponent } from './modules/food/recipe.component/recipe.component';
import { ActivityComponent } from './modules/fitness/activity.component/activity.component';
import { SignUpFormComponent } from './modules/user/signUp-form/signUp-form.component';
import { SignInFormComponent } from './modules/user/signIn-form/signIn-form.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'sign-up', component: SignUpFormComponent },
    { path: 'sign-in', component: SignInFormComponent },
    { path: 'recipes/all', component: RecipesAllComponent },
    { path: 'activities/all', component: ActivitiesAllComponent },
    { path: 'recipes/:id', component: RecipeComponent },
    { path: 'activities/:id', component: ActivityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
