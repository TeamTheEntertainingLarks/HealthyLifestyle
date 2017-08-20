import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { RecipeInterface } from '../../../interfaces/recipe';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent extends AppComponent implements OnInit {
    recipe: RecipeInterface;
    paramId: any;

    constructor(private route: ActivatedRoute,
        private dataService: DataService,
        auth: AuthService) {
        super(auth);
        this.paramId = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.dataService
            .getRecipeById(this.paramId)
            .then((data) => {
                this.recipe = data;
            }).catch((err) => console.log(err));
    }
}
