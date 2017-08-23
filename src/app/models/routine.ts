import { Exercise } from './exercise';
export class Routine {
    public exercise: Exercise;
    public repeatTimes: number;
    public seriesCount: number;
    public restingTime: number;

    constructor(exercise: Exercise, repeatTimes: number, seriesCount: number, restingTime: number) {
        this.exercise = exercise;
        this.repeatTimes = repeatTimes;
        this.seriesCount = seriesCount;
        this.restingTime = restingTime;
    }
}
