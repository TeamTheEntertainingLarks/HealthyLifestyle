import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from '../../routes.module';

import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';

@NgModule({
    imports: [CommonModule, AppRoutesModule],
    declarations: [RecipeComponent, RecipesAllComponent],
    providers: [],
    exports: [RecipeComponent, RecipesAllComponent]
})

export class RecipesModule {}
