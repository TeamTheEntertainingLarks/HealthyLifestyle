import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';
import { ModelFactory } from './../../../services/factories/model.factory';
import { ModelFactoryInterface } from './../../../services/factories/interfaces/model.factory';
import { RecipeInterface } from '../../../interfaces/recipe';
import { RecipeData } from '../../../services/recipe-data.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent extends AppComponent implements OnInit {
    public recipe: RecipeInterface;
    public recipes: Array<RecipeInterface>;

    private factory: ModelFactory;
    private dataService: DataService;
    private recipeDataService: RecipeData;
    auth: AuthService;

    recipeKey: string;

    constructor(private route: ActivatedRoute,
        dataService: DataService,
        recipeDataService: RecipeData,
        factory: ModelFactory,
        auth: AuthService) {
        super(auth);
        this.factory = factory;
        this.dataService = dataService;
        this.recipeDataService = recipeDataService;
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
}
