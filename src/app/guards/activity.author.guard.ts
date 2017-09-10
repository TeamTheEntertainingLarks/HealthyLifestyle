import { ActivityData } from './../services/activity-data.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ActivityAuthorGuard implements CanActivate {
    constructor(private router: Router, private afAuth: AngularFireAuth, private data: ActivityData) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userId = localStorage.getItem('authKey');
        const id = route.params['id'];
        let result: boolean;
        this.data.getActivityById(id).subscribe((activity) => {
            if (activity.userId === id) {
                result = true;
            } else {
                this.router.navigate(['/home']);
                result = false;
            }
        });

        return result;
    }
}
