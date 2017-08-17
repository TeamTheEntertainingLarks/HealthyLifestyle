import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { RecipesAllComponent } from './modules/food/all.recipes.component/all.recipes.component';
import { ActivitiesAllComponent } from './modules/fitness/all.activities.component/all.activities.component';
import { RecipeComponent } from './modules/food/recipe.component/recipe.component';
import { ActivityComponent } from './modules/fitness/activity.component/activity.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes/all', component: RecipesAllComponent},
    { path: 'activities/all', component: ActivitiesAllComponent},
    { path: 'recipes/:id', component: RecipeComponent},
    { path: 'activities/:id', component: ActivityComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}
