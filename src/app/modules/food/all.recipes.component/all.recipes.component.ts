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

    path: string;
    order: number; // 1 asc, -1 desc;

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

    orderBy(prop: string, num: number) {
        this.path = prop;
        this.order = num;
        return false; // do not reload
    }

    isAuthenticated() {
        return this.auth.isAuthenticated;
    }
}
