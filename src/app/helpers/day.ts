import { Workout } from './../models/workout';
export class Day {
    constructor(workout: any, checked: boolean = false) {
        this.workout = workout;
        this.checked = checked;
    }
    public workout: any;
    public checked: boolean;
}
