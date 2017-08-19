import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppRoutesModule } from '../../routes.module';

import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';

@NgModule({
    imports: [CommonModule, AppRoutesModule, MdButtonModule, MdCheckboxModule],
    declarations: [RecipeComponent, RecipesAllComponent,
],
    providers: [],
    exports: [RecipeComponent, RecipesAllComponent, MdButtonModule, MdCheckboxModule]
})

export class RecipesModule { }
