import { Routine } from './../models/routine';
import { Workout } from './../models/workout';
import { WorkoutInterface } from './../interfaces/workout';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Category } from "../enums/workoutCategories";

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
    addWorkout(workout: WorkoutInterface): void {
        this.firebaseCollection.push(workout)
            .then(_ => console.log('workout added'))
            .catch(err => console.log(err, 'err when adding workout'));
    }

    addRoutine(routine: Routine): void {
        this.db.list('/workouts/routines').push(routine)
            .then(_ => console.log('routine added'))
            .catch(err => console.log(err, 'err when adding routine'));
    }
    getAvailableRoutines(category: Category) {
        const routines = this.db.list('routines', {
            preserveSnapshot: true,
        });

        const avaialableRoutines: Array<Routine> = new Array<Routine>();

        routines.subscribe( snapshot => {
            snapshot.forEach(routine => {
                if (routine.val().category === category) {
                    avaialableRoutines.push(routine.val());
                }
            });
        });

        return avaialableRoutines;
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
