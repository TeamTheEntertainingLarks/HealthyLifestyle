import { UserInterface } from './../interfaces/user';
import { UserData } from './user-data.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    authState: any = null;
    public authUpdated: Subject<boolean> = new Subject<boolean>();

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router,
        private userData: UserData) {

        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth;
            this.authUpdated.next(this.authState);
        });
    }

    get isAuthenticated(): boolean {
        return this.authState !== null;
    }

    get currentUser(): any {
        return this.isAuthenticated ? this.authState : null;
    }

    get currentUserObservable(): any {
        return this.afAuth.authState;
    }

    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : '';
    }

    get currentUserAnonymous(): boolean {
        return this.isAuthenticated ? this.authState.isAnonymous : false;
    }

    get currentUserDisplayName(): string {
        if (!this.authState) {
            return 'Guest';
        } else if (this.currentUserAnonymous) {
            return 'Anonymous';
        } else {
            return this.authState['displayName'] || 'User without a Name';
        }
    }

    emailSignUp(email: string, password: string, model: UserInterface) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.updateProfile({ displayName: `${model.firstName} ${model.lastName}` });
                this.authState = user;
                this.userData.add(this.currentUserId, model);
                this.router.navigateByUrl('/');
            })
            .catch(error => console.log(error));
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                this.router.navigateByUrl('/user/profile');
            })
            .catch(error => console.log(error));
    }

    resetPassword(email: string) {
        const fbAuth = firebase.auth();

        return fbAuth.sendPasswordResetEmail(email)
            .then(() => console.log('email sent'))
            .catch((error) => console.log(error));
    }

    signOut(): void {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    }
}
