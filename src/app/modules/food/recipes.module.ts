import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule, MdSelectModule } from '@angular/material';
import { MdInputModule , MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutesModule } from './recipes.routes.module';

import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';
import { CreateFormComponent } from './create.recipe.form/create.resipe.form.component';

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutesModule,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule
    ],
    declarations: [RecipeComponent, RecipesAllComponent, CreateFormComponent],
    providers: [{ provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
    exports: [
        RecipeComponent,
        RecipesAllComponent,
        MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdIconModule,
        MdGridListModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule
    ]
})

export class RecipesModule { }
