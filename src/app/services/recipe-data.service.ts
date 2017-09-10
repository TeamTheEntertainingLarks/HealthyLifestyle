import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RecipeInterface } from '../interfaces/recipe';

@Injectable()
export class RecipeData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/recipes');
    }

    getAllRecipes() {
        return this.db.list('/recipes');
    }

    getRecipeById(recipeKey: string) {
        return this.db.object(`/recipes/${recipeKey}`);
    }

    add(recipe: RecipeInterface): void {
        this.firebaseCollection.push(recipe)
            .then(_ => console.log('recipe added'))
            .catch(err => console.log(err, 'err when adding recipe'));
    }

    editRecipe(recipeKey: string, recipe: object) {
        this.db.object(`/recipes/${recipeKey}`).update(recipe).then((data) => console.log(data)).catch((err) => console.log(err));
    }

    removeRecipe(recipeKey: string) {
        this.db.object(`/recipes/${recipeKey}`).remove().then((data) => console.log(data)).catch((err) => console.log(err));
    }
}
