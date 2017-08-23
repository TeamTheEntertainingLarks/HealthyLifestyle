import { Workout } from './../models/workout';
import { WorkoutInterface } from './../interfaces/workout';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WorkoutData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/workouts');
    }

    getAll() {
        return this.db.list('/workouts');
    }

    getWorkoutById(workoutKey: string) {
        return this.db.object(`/workouts/${workoutKey}`);
    }

    // need to add some notifications, not console outputs
    add(workout: WorkoutInterface): void {
        this.firebaseCollection.push(workout)
            .then(_ => console.log('workout added'))
            .catch(err => console.log(err, 'err when adding workout'));
    }

    getWorkoutByTitle(title: string) {
        const items = this.db.list('workouts', {
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
