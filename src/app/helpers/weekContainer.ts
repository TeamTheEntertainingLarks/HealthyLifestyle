import { Day } from './day';

// the class keeps the last spot free for the add button slot
export class WeekContainer {
    constructor() {
        this.weeks = new Array<Array<Day>>();
        this.index = 0;
        this.daysCount = 0;
        this.weeks[this.index] = new Array<Day>();
    }
    public weeks: Array<Array<Day>>;
    private index: number;

    public daysCount: number;

    public Add(day: Day) {
        if (this.weeks[this.index].length === 7) {
            this.index += 1;
            this.weeks[this.index] = new Array<Day>();
        }

        this.weeks[this.index].push(day);
        this.daysCount += 1;
    }
}
