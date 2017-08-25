import { UserInterface } from './../interfaces/user';
import { UserData } from './user-data.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { LOCALSTORAGE_AUTH_KEY_NAME, LOCALSTORAGE_EMAIL_KEY_NAME } from '../common/constants';

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
            })
            .then(() => {
                this.userData.add(this.currentUserId, model);
                this.router.navigateByUrl('/');
            })
            .catch(error => console.log(error));
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                localStorage.setItem(LOCALSTORAGE_AUTH_KEY_NAME, user.uid);
                localStorage.setItem(LOCALSTORAGE_EMAIL_KEY_NAME, user.email);
                this.router.navigateByUrl('/user/profile');
            })
            .catch(error => console.log(error));
    }

    resetPassword(email: string) {
        const fbAuth = firebase.auth();

        return fbAuth.sendPasswordResetEmail(email)
            .then(() => {
                console.log('email sent');
                this.signOut();
            })
            .catch((error) => console.log(error));
    }

    changeEmail(oldEmail: string, newEmail: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(oldEmail, password)
            .then((user) => {
                user.updateEmail(newEmail);
                this.userData.update(this.currentUserId, { email: newEmail });
            });

    }

    signOut(): void {
        this.afAuth.auth.signOut()
            .then(() => {
                localStorage.removeItem(LOCALSTORAGE_AUTH_KEY_NAME);
                localStorage.removeItem(LOCALSTORAGE_EMAIL_KEY_NAME);
                this.router.navigate(['/']);
            });
    }
}
