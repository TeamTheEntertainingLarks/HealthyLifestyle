import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { Workout } from '../../../interfaces/workout-routine';

@Component({
    selector: 'app-activities',
    templateUrl: './all.activities.component.html',
    styleUrls: ['./all.activities.component.css']
})

export class ActivitiesAllComponent implements OnInit {
    activities: Array<Workout>;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getActivitiesAll().then((data) => {
            this.activities = data;
        }).catch((err) => console.log(err));
    }

    orderByNameAcs() {
        this.activities.sort((a, b) => a.title.localeCompare(b.title));
    }

    orderByNameDesc() {
        this.activities.sort((a, b) => b.title.localeCompare(a.title));
    }
}
