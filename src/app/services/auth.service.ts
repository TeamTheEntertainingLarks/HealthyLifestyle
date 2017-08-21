import { UserInterface } from './../interfaces/user';
import { UserData } from './user-data.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    authState: any = null;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router,
        private userData: UserData) {

        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
    }

    // Returns true if user is logged in
    get isAuthenticated(): boolean {
        return this.authState !== null;
    }

    // Returns current user data
    get currentUser(): any {
        return this.isAuthenticated ? this.authState : null;
    }

    // Returns
    get currentUserObservable(): any {
        return this.afAuth.authState;
    }

    // Returns current user UID
    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : '';
    }

    // Anonymous User
    get currentUserAnonymous(): boolean {
        return this.isAuthenticated ? this.authState.isAnonymous : false;
    }

    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
        if (!this.authState) {
            return 'Guest';
        }
        // tslint:disable-next-line:one-line
        else if (this.currentUserAnonymous) {
            return 'Anonymous';
        }
        // tslint:disable-next-line:one-line
        else {
            return this.authState['displayName'] || 'User without a Name';
        }
    }

    emailSignUp(email: string, password: string, user: UserInterface) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this.authState = res;
                this.userData.add(this.currentUserId, user);
                this.router.navigateByUrl('/');
            })
            .catch(error => console.log(error));
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                // this.updateUserData();
            })
            .catch(error => console.log(error));
    }

    // Sends email allowing user to reset password
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
