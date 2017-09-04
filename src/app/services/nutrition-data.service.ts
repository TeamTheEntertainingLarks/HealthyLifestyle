import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NutritionData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/nutrition');
    }

    getAllArticles() {
        return this.db.list('/nutrition/facts');
    }

    getAllMeals() {
        return this.db.list('/nutrition/meal');
    }
}
