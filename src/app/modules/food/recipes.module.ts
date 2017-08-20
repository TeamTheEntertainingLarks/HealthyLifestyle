import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule } from '@angular/material';

import { AppRoutesModule } from '../../routes.module';

// import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule
    ],
    declarations: [RecipesAllComponent,
],
    providers: [],
    exports: [
        RecipesAllComponent,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule
    ]
})

export class RecipesModule { }
