import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { Component, OnInit } from '@angular/core';

import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './all.recipes.component.html',
    styleUrls: ['./all.recipes.component.css']
})

export class RecipesAllComponent implements OnInit {
    public recipe: RecipeInterface;
    public recipes: Array<RecipeInterface>;

    private factory: ModelFactory;
    private recipeDataService: RecipeData;
    auth: AuthService;

    constructor(
        recipeDataService: RecipeData,
        factory: ModelFactory,
        auth: AuthService) {
        this.factory = factory;
        this.recipeDataService = recipeDataService;
        this.auth = auth;
    }

    ngOnInit() {
        this.recipeDataService.getAllRecipes().subscribe(items => {
            this.recipes = items;
        });

        return this.recipes;
    }

    orderByDateAsc() {
        this.recipes.sort((a, b) => +a.createdOn - +b.createdOn);
    }

    orderByDateDesc() {
        this.recipes.sort((a, b) => +b.createdOn - +a.createdOn);
    }

    orderByTitleAsc() {
        this.recipes.sort((a, b) => a.title.localeCompare(b.title));
    }

    orderByTitleDesc() {
        this.recipes.sort((a, b) => b.title.localeCompare(a.title));
    }

    // getAllRecipes() {
    //     this.recipeDataService.getAllRecipes();
    //     console.log(this.recipeDataService.getAllRecipes());
    // }

    getOne() {
        console.log(this.recipeDataService.getRecipeByTitle('testTitle'));
    }

    isAuthenticated() {
         return this.auth.isAuthenticated;
           }
}
