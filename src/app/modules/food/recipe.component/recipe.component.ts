import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RecipeData } from '../../../services/recipe-data.service';
import { RecipeInterface } from '../../../interfaces/recipe';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';

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

    constructor(private route: ActivatedRoute,
        recipeDataService: RecipeData,
        auth: AuthService) {
        this.recipeDataService = recipeDataService;
        this.auth = auth;
    }

    ngOnInit() {
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
}
