import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './all.recipes.component.html',
    styleUrls: ['./all.recipes.component.css']
})

export class RecipesAllComponent implements OnInit {
    public recipe: RecipeInterface;
    public recipes: Array<RecipeInterface>;

    path: string;
    order: number; // 1 asc, -1 desc;

    searchWord: string;

    categoryCtrl: FormControl;
    filteredCategories: any;

    categories = ['breakfast', 'soups', 'salads', 'desserts', 'breads', 'main dishes', 'side dishes'];

    constructor(
        private recipeDataService: RecipeData,
        private factory: ModelFactory,
        private auth: AuthService) {
        this.searchWord = '';

        this.categoryCtrl = new FormControl();
        this.filteredCategories = this.categoryCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterStates(name));
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

    filterStates(val: string) {
        return val ? this.categories.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
            : this.categories;
    }
}
