import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';
// import { RecipeDialogComponent } from '../recipe.dialog.component/recipe.dialog.component';

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

    searchWord: string;

    // starsCount: number;

    categoryCtrl: FormControl;
    filteredCategories: any;

    categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

    constructor(
        recipeDataService: RecipeData,
        // public dialog: MdDialog,
        factory: ModelFactory,
        auth: AuthService) {
        this.factory = factory;
        this.recipeDataService = recipeDataService;
        this.auth = auth;
        this.searchWord = '';

        this.categoryCtrl = new FormControl();
        this.filteredCategories = this.categoryCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterStates(name));
    }

    ngOnInit() {
        // this.starsCount = 3.5;
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

    filterStates(val: string) {
        return val ? this.categories.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
            : this.categories;
    }

    // openDialog() {
    //     this.dialog.open(RecipeDialogComponent, { width: '550px' });
    // }
}
