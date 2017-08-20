import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { RecipeFactory } from './../../../factories/recipeFactory';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './all.recipes.component.html',
    styleUrls: ['./all.recipes.component.css']
})

export class RecipesAllComponent extends AppComponent implements OnInit {
    recipe: RecipeInterface;
    recipes: Array<RecipeInterface>;

    constructor(private dataService: DataService,
        private recipeDataService: RecipeData,
        private recipeFactory: RecipeFactory,
        auth: AuthService) {
        super(auth);
    }

    ngOnInit() {
        this.dataService.getRecipesAll().then((data) => {
            this.recipes = data;
        }).catch((err) => console.log(err));
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

    createRecipe(title: string, author: string) {
        title = 'testTitle';
        author = this.auth.currentUserId;

        this.recipe = this.recipeFactory.create(title, author);
        this.recipeDataService.add(this.recipe);
    }

    getAllRecipes() {
        this.recipeDataService.getAll();
        console.log(this.recipeDataService.getAll());
    }

    getOne() {
        console.log(this.recipeDataService.getRecipeByTitle('testTitle'));
    }
}
