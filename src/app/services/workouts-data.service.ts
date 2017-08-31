import { Exercise } from './../models/exercise';
import { Routine } from './../models/routine';
import { Workout } from './../models/workout';
import { WorkoutInterface } from './../interfaces/workout';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Category } from '../enums/workoutCategories';

@Injectable()
export class WorkoutData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/workouts');
    }

    getAvailableWorkouts() {
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

    addExercise(exercise: Exercise): void {
        this.db.list('/workouts/exercises').push(exercise)
            .then(_ => console.log('exercise added'))
            .catch(err => console.log(err, 'err when adding exercise'));
    }

    getExerciseSnapshot(name: string) {
        const exercises = this.db.list('/workouts/exercises', {
            preserveSnapshot: true,
        });

        let item: any;
        exercises.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                if (snapshot.val().name === name) {
                    item = snapshot;
                }
            });
        });

        return item;
    }
    getAvailableRoutines() {
        return this.db.list('/workouts/routines');
    }

    getAvailableExercises() {
        return this.db.list('/workouts/exercises');
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
