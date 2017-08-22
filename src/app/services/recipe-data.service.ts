import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
        // const items = this.db.list('recipes', {
        //     preserveSnapshot: true,
        // });

        // let item: any;

        // items.subscribe(snapshots => {
        //     snapshots.forEach(snapshot => {
        //         if (snapshot.val().id === id) {
        //             item = snapshot.val();
        //         }
        //     });
        // });

        // return item;
    }

    // need to add some notifications, not console outputs
    add(recipe: RecipeInterface): void {
        this.firebaseCollection.push(recipe)
            .then(_ => console.log('recipe added'))
            .catch(err => console.log(err, 'err when adding recipe'));
    }

    getRecipeByTitle(title: string) {
        const items = this.db.list('recipes', {
            preserveSnapshot: true,
        });

        let item: any;

        // need to be upgraded
        items.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                if (snapshot.val().title === title) {
                    item = snapshot.val();
                }
            });
        });

        return item;
    }
}
