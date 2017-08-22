import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { AppRoutesModule } from '../../routes.module';

import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';
// import { CreateFormComponent } from './create.recipe.form/create.resipe.form.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdInputModule
    ],
    declarations: [RecipeComponent, RecipesAllComponent], // CreateFormComponent
    providers: [],
    exports: [
        RecipeComponent,
        RecipesAllComponent,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdInputModule
    ]
})

export class RecipesModule { }
