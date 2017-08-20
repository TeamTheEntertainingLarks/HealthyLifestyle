import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { DataService } from '../../../services/data.service';
import { Workout } from '../../../interfaces/workout-routine';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
    activity: Workout;
    paramId: any;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.paramId =  this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.dataService.getActivityById(this.paramId).then((data) => {
            this.activity = data;
        }).catch((err) => console.log(err));
    }
}
