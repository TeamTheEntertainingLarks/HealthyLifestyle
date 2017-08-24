import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInterface } from '../interfaces/user';
import * as firebase from 'firebase';

@Injectable()
export class UserData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;
    public user;
    public userProfileImage;

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

    getUserByUid(userId: string) {
        const path = `users/${userId}`;
        return this.db.object(path);
    }

    getUserProfileImageUrl(userId: string) {
        const subscription = this.getUserByUid(userId)
            .subscribe(user => this.user = user);

        const imageName = this.user.profileImage.name;
        const userStorageRef = firebase.storage().ref().child(`images/users/` + userId + '/' + imageName);
        return userStorageRef.getDownloadURL()
            .then(url => {
                console.log(this.user);
                return url;
            });
    }
}
