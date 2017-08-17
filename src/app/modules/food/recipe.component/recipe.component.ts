import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { Food } from '../../../interfaces/food';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
    recipe: Food;
    paramId: any;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        this.paramId = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.dataService.getRecipeById(this.paramId).then((data) => {
            this.recipe = data;
        }).catch((err) => console.log(err));
    }
}
