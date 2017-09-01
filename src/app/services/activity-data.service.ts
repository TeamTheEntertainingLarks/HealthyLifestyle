import { UserData } from './user-data.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivityInterface } from '../interfaces/activity';
import { NotificationService } from './notification.service';

@Injectable()
export class ActivityData {
    private firebaseCollection: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase, private notificationService: NotificationService) {
        this.db = db;
        this.firebaseCollection = this.db.list('/activities');
    }

    getAllActivities() {
        return this.db.list('/activities');
    }

    getActivityById(activityKey: string) {
        return this.db.object(`/activities/${activityKey}`)
            .subscribe(activity => activity);
    }

    add(activity: ActivityInterface) {
        return Promise.resolve(
            this.firebaseCollection
                .push(activity)
                .then(_ => {
                    return _.key;
                })
                .catch((error) => this.notificationService.popToast('error', 'Ooops!', error.message)));
    }

    editActivity(activityKey: string, activity: object) {
        this.db.object(`/activities/${activityKey}`)
            .update(activity)
            .then((data) =>
                console.log(data))
            .catch((err) => console.log(err));
    }

    delete(activityKey: string) {
        this.db.object(`/activities/${activityKey}`)
        .remove();
    }

    getActivityByTitle(title: string) {
        const items = this.db.list('activities', {
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
