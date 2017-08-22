import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';
import { CreateFormComponent } from './create.recipe.form/create.resipe.form.component';
import { RecipeComponent } from './recipe.component/recipe.component';


const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: RecipesAllComponent },
    { path: 'create', component: CreateFormComponent },
    { path: ':id', component: RecipeComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutesModule { }