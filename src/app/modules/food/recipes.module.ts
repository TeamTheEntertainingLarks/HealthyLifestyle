import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdIconModule, MdGridListModule, MdSelectModule } from '@angular/material';
import { MdInputModule, MdMenuModule, MdAutocompleteModule, MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutesModule } from './recipes.routes.module';

import { RecipeComponent } from './recipe.component/recipe.component';
import { RecipesAllComponent } from './all.recipes.component/all.recipes.component';
import { CreateFormComponent } from './create.recipe.form/create.resipe.form.component';
import { EditRecipeComponent } from './edit.recipe.component/edit.recipe.component';
import { CommentsComponent } from './comments.component/comments.component';

import { SortPipe } from '../../pipes/sort.pipe';
import { SearchPipe } from '../../pipes/search.pipe';

import { ZoomImageDirective } from './../../directives/zoom-image.directive';

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
        MdSelectModule,
        MdMenuModule,
        MdAutocompleteModule
    ],
    declarations: [
        RecipeComponent,
        RecipesAllComponent,
        CreateFormComponent,
        EditRecipeComponent,
        CommentsComponent,
        SortPipe,
        SearchPipe,
        ZoomImageDirective,
],
    providers: [{ provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
})

export class RecipesModule { }
