import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { SignUpFormComponent } from './modules/user/signUp-form/signUp-form.component';
import { SignInFormComponent } from './modules/user/signIn-form/signIn-form.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'activities', loadChildren: './modules/fitness/activities.module#ActivitiesModule' },
    { path: 'recipes', loadChildren: './modules/food/recipes.module#RecipesModule' },
    { path: 'user', loadChildren: './modules//user/user.module#UserModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
