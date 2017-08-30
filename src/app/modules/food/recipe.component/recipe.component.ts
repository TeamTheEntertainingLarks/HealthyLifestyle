import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { RecipeData } from '../../../services/recipe-data.service';
import { RecipeInterface } from '../../../interfaces/recipe';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';
import { RecipeDialogComponent } from '../recipe.dialog.component/recipe.dialog.component';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
    public recipe: RecipeInterface;
    public recipes: Array<RecipeInterface>;

    private recipeDataService: RecipeData;
    auth: AuthService;

    recipeKey: string;

    starsCount: number;

    constructor(private route: ActivatedRoute,
        recipeDataService: RecipeData,
        auth: AuthService,
        public dialog: MdDialog) {
        this.recipeDataService = recipeDataService;
        this.auth = auth;
    }

    ngOnInit() {
        this.starsCount = 3.5;
        this.route.params
            .subscribe(params => {
                this.recipeDataService.getRecipeById(params.id)
                    .subscribe(recipe => {
                        this.recipe = recipe;
                        this.recipeKey = recipe.$key;
                        console.log(recipe);
                    });
            });
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }

    isAuthor(authorId: string) {
        if (this.auth.currentUserId === authorId) {
            return true;
        }

        return false;
    }

    openDialog() {
        this.dialog.open(RecipeDialogComponent, { width: '550px' });
    }
}
