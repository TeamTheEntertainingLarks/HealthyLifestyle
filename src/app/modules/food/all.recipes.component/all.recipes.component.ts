import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './all.recipes.component.html',
    styleUrls: ['./all.recipes.component.css']
})

export class RecipesAllComponent extends AppComponent implements OnInit {
    public recipe: RecipeInterface;
    public recipes: Array<RecipeInterface>;

    private factory: ModelFactory;
    private dataService: DataService;
    private recipeDataService: RecipeData;
    auth: AuthService;

    constructor(
        dataService: DataService,
        recipeDataService: RecipeData,
        factory: ModelFactory,
        auth: AuthService) {
        super(auth);
        this.factory = factory;
        this.dataService = dataService;
        this.recipeDataService = recipeDataService;
        this.auth = auth;
    }

    ngOnInit() {
        this.recipeDataService.getAllRecipes().subscribe(items => this.recipes = items);
        console.log(this.recipeDataService.getAllRecipes());
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

        this.recipe = this.factory.createRecipe(title, author);
        this.recipeDataService.add(this.recipe);
    }

    // getAllRecipes() {
    //     this.recipeDataService.getAll();
    //     console.log(this.recipeDataService.getAll());
    // }

    getOne() {
        console.log(this.recipeDataService.getRecipeByTitle('testTitle'));
    }
}
