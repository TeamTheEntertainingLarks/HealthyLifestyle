import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInterface } from '../interfaces/user';

@Injectable()
export class UserData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/users');
    }

    getAll() {
        this.firebaseCollection
            .subscribe(items => {
                this.items = items;
            });

        return this.items;
    }

    // need to add some notifications, not console outputs
    add(userId: string, user: UserInterface): void {
        const path = `users/${userId}`;

        this.db.object(path)
            .set(user)
            .catch(error => console.log(error));
    }

    private update(userId: number, data: object): void {
        const path = `users/${userId}`;

        this.db.object(path)
            .update(data)
            .catch(error => console.log(error));
    }

    getUserByUid(id: number) {
    }
}
