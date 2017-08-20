import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { Food } from '../../../interfaces/food';

@Component({
    selector: 'app-recipes',
    templateUrl: './all.recipes.component.html',
    styleUrls: ['./all.recipes.component.css']
})

export class RecipesAllComponent implements OnInit {
    recipes: Array<Food>;

    constructor (private dataService: DataService) {}

    ngOnInit() {

        this.dataService.getRecipesAll();
        console.log(this.dataService.getRecipesAll());
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
}
