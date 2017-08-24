import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { WorkoutInterface } from '../../../interfaces/workout';

@Component({
    selector: 'app-activities',
    templateUrl: './all.activities.component.html',
    styleUrls: ['./all.activities.component.css']
})

export class ActivitiesAllComponent implements OnInit {
    activities: Array<WorkoutInterface>;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getActivitiesAll().then((data) => {
            this.activities = data;
        }).catch((err) => console.log(err));
    }
}
